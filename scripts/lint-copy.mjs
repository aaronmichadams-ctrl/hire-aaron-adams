// Fails if any em dash (or en dash used as one) sneaks into the copy or the built site.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const roots = ['src', 'dist', 'README.md', 'DECISIONS.md'];
const exts = new Set(['.ts', '.astro', '.md', '.html', '.css']);
const bad = /[—]|\s–\s/;
const hits = [];

function walk(p) {
  let st; try { st = statSync(p); } catch { return; }
  if (st.isDirectory()) return readdirSync(p).forEach((f) => walk(join(p, f)));
  if (!exts.has(extname(p))) return;
  readFileSync(p, 'utf8').split('\n').forEach((line, i) => { if (bad.test(line)) hits.push(`${p}:${i + 1}: ${line.trim().slice(0, 100)}`); });
}
roots.forEach(walk);
if (hits.length) { console.error('Em dashes found:\n' + hits.join('\n')); process.exit(1); }
console.log('Copy check passed: no em dashes.');
