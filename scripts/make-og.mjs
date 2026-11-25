// Renders public/og.png (1200x630), the link preview for LinkedIn, Slack and email.
// Run: npm run og   (needs Playwright with Chromium: `npx playwright install chromium`)
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = fileURLToPath(new URL('..', import.meta.url));
const photo = readFileSync(root + 'public/aaron-320.webp').toString('base64');
const dm = readFileSync(root + 'node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2').toString('base64');

const chip = (t, x, y, main) => `<b style="left:${x}%;top:${y}%;${main ? 'background:#b8231b;font-size:20px;padding:5px 14px' : ''}">${t}</b>`;
const html = `<!doctype html><html><head><style>
@font-face{font-family:D;src:url(data:font/woff2;base64,${dm});font-weight:100 1000}
*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#fafafa;font-family:D;color:#111;padding:48px}
.c{height:534px;background:#fff;border:2px solid #ececec;border-radius:28px;overflow:hidden;display:grid;grid-template-rows:auto 1fr}
.band{background:#b8231b;color:#fff;display:flex;align-items:center;gap:30px;padding:40px 48px}
.av{width:132px;height:132px;border-radius:50%;background:#fff;object-fit:cover;box-shadow:0 0 0 4px #fff}
h1{margin:0;font-size:68px;font-weight:600;line-height:1}
.band p{margin:10px 0 0;font-size:30px}
.body{display:grid;grid-template-columns:1fr 1fr 250px;gap:0 36px;padding:34px 48px}
dt{font-size:34px}dd{margin:4px 0 22px;color:#6b6b6b;font-size:22px}
.p{position:relative;background:#f2f2f2;border-radius:10px;height:228px}
.p b{position:absolute;transform:translate(-50%,-50%);background:#6b6b6b;color:#fff;font-size:16px;padding:4px 11px;border-radius:999px}
.p i{position:absolute;left:0;right:0;top:50%;border-top:3px solid #fff}
</style></head><body><div class="c">
<div class="band"><img class="av" src="data:image/webp;base64,${photo}"><div><h1>Aaron Adams</h1><p>Operations · Sales · Marketing · Programs</p></div></div>
<div class="body">
<dl style="margin:0"><dt>Atlanta, GA</dt><dd>Based in</dd><dt>Founder</dt><dd>NXT, 2023 to now</dd></dl>
<dl style="margin:0"><dt>+110%</dt><dd>Enrollment in one week</dd><dt>125,000+</dt><dd>Inventory items tracked</dd></dl>
<div class="p"><i></i>${chip('SAL',27,20)}${chip('MKT',73,20)}${chip('OPS',50,44,true)}${chip('PRG',24,66)}${chip('PTN',76,66)}${chip('GM',50,85)}</div>
</div></div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: root + 'public/og.png' });
await browser.close();
console.log('Wrote public/og.png');
