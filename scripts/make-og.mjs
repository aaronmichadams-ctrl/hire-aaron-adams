// Renders public/og.png (1200x630), the link preview for LinkedIn, Slack and email.
// Run: npm run og   (needs Playwright with Chromium: `npx playwright install chromium`)
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = fileURLToPath(new URL('..', import.meta.url));
const font = (p) => readFileSync(root + 'node_modules/' + p).toString('base64');
const display = font('@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2');
const ui = font('@fontsource-variable/inter/files/inter-latin-wght-normal.woff2');

const html = `<!doctype html><html><head><style>
@font-face{font-family:D;src:url(data:font/woff2;base64,${display});font-weight:100 900}
@font-face{font-family:U;src:url(data:font/woff2;base64,${ui});font-weight:100 900}
*{box-sizing:border-box}
body{margin:0;width:1200px;height:630px;font-family:U;color:#161616;background:#f2f2f0;
 background-image:radial-gradient(#d6d6d2 1.4px,transparent 1.6px);background-size:26px 26px;position:relative;overflow:hidden}
.lab{position:absolute;left:64px;top:44px;font-size:18px;color:#6e6e6b}
.f{position:absolute;left:64px;top:74px;width:1072px;height:500px;background:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.05),0 2px 6px rgba(0,0,0,.06);padding:70px 72px}
h1{font-family:D;font-weight:700;font-size:132px;line-height:.92;letter-spacing:-.045em;margin:0}
.l{font-family:D;font-weight:500;font-size:46px;letter-spacing:-.02em;color:#4b4b49;margin:26px 0 0}
.s{position:relative;color:#161616}
.s i{position:absolute;inset:-4px -8px -2px -9px;border:2.5px solid #ff7a59}
.s em{position:absolute;width:11px;height:11px;background:#fff;border:2.5px solid #ff7a59}
.s b{position:absolute;left:-11px;top:-36px;font:600 18px U;color:#2a1208;background:#ff7a59;padding:3px 9px;border-radius:4px 4px 4px 0}
.m{position:absolute;left:72px;bottom:62px;font-size:24px;color:#4b4b49}
.t{position:absolute;right:72px;bottom:56px;display:flex;gap:12px}
.t span{width:70px;height:70px;border-radius:16px}
.c{position:absolute;right:300px;bottom:120px}
.c svg{width:26px;height:32px;fill:#0a6bc4;stroke:#fff;stroke-width:1.4}
.c b{position:absolute;left:20px;top:24px;font:600 18px U;color:#fff;background:#0a6bc4;padding:3px 10px;border-radius:3px 9px 9px 9px}
</style></head><body>
<div class="lab">intro</div>
<div class="f">
<h1>Aaron Adams</h1>
<p class="l">I run <span class="s">operations,<i></i><em style="left:-15px;top:-10px"></em><em style="right:-14px;top:-10px"></em><em style="left:-15px;bottom:-8px"></em><em style="right:-14px;bottom:-8px"></em><b>Aaron</b></span> programs and teams.</p>
<p class="m">Atlanta metro, GA · hireaaronadams.com</p>
<div class="t"><span style="background:#c6f36b"></span><span style="background:#ff7a59;border-radius:16px 16px 16px 40px"></span><span style="background:#8fd3ff;border-radius:40px 40px 16px 16px"></span><span style="background:#b18cff"></span></div>
<div class="c"><svg viewBox="0 0 16 20"><path d="M1 1l13.5 9.2-6.3 1.1-3.3 6.2z"/></svg><b>You</b></div>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: root + 'public/og.png' });
await browser.close();
console.log('Wrote public/og.png');
