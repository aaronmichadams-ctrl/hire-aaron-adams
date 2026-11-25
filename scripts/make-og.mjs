// Renders public/og.png (1200x630), the link preview for LinkedIn, Slack and email.
// Run: npm run og   (uses the Playwright + Chromium preinstalled on the machine, or `npx playwright`)
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = fileURLToPath(new URL('..', import.meta.url));
const font = (p) => readFileSync(root + 'node_modules/@fontsource/' + p).toString('base64');
const marker = font('permanent-marker/files/permanent-marker-latin-400-normal.woff2');
const kalam = font('kalam/files/kalam-latin-700-normal.woff2');
const atk = font('atkinson-hyperlegible/files/atkinson-hyperlegible-latin-700-normal.woff2');

const html = `<!doctype html><html><head><style>
@font-face{font-family:M;src:url(data:font/woff2;base64,${marker})}
@font-face{font-family:K;src:url(data:font/woff2;base64,${kalam})}
@font-face{font-family:A;src:url(data:font/woff2;base64,${atk})}
*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#ddd6c8;font-family:A}
.b{position:absolute;inset:24px;border:18px solid transparent;border-image:linear-gradient(90deg,#b9bcc0,#eceef1 40%,#a7abb0) 1;
 background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.8) 48%,transparent 62%),radial-gradient(ellipse at 20% 10%,#fff,#fbfaf6 60%);
 box-shadow:0 14px 30px rgba(60,45,20,.25);padding:56px 70px;color:#1f2328;overflow:hidden}
.g{position:absolute;font-family:M;font-size:44px;color:rgba(31,35,40,.06);white-space:nowrap}
h1{font-family:M;font-weight:400;font-size:92px;line-height:1;margin:0}
svg{display:block;width:620px;height:22px;margin:10px 0 18px}
.r{font-family:M;font-size:46px;color:#c22f2a;margin:0 0 26px}
.l{font-family:K;font-size:32px;margin:0;color:#4a4f57}
.s{position:absolute;right:70px;bottom:62px;background:#ffe57f;padding:22px 30px;font-family:K;font-size:34px;transform:rotate(-3deg);box-shadow:0 16px 24px -10px rgba(60,40,0,.45)}
.s:before{content:'';position:absolute;top:-12px;left:50%;width:90px;height:24px;transform:translateX(-50%) rotate(-3deg);background:rgba(255,255,255,.65)}
.t{position:absolute;left:0;right:0;bottom:0;height:20px;background:linear-gradient(#c9ccd0,#9da1a6)}
.k{position:absolute;bottom:6px;width:80px;height:12px;border-radius:3px 6px 6px 3px}
</style></head><body><div class="b">
<span class="g" style="top:40px;left:760px;transform:rotate(-6deg)">woof water??</span>
<span class="g" style="top:455px;left:380px;transform:rotate(-3deg)">soap + fragrance v2</span>
<h1>Hi, I'm Aaron Adams.</h1>
<svg viewBox="0 0 300 16" preserveAspectRatio="none"><path d="M3 10 C 70 2, 160 14, 297 5" fill="none" stroke="#c22f2a" stroke-width="5" stroke-linecap="round"/></svg>
<p class="r">I run operations, programs and teams.</p>
<p class="l">Process · Inventory · Staffing · Fulfillment · Growth</p>
<p class="l" style="margin-top:8px">Atlanta metro, GA</p>
<div class="s">hireaaronadams.com</div>
<div class="t"><span class="k" style="left:40px;background:#2a2d31"></span><span class="k" style="left:134px;background:#c22f2a"></span><span class="k" style="left:228px;background:#1d4fa3"></span></div>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: root + 'public/og.png' });
await browser.close();
console.log('Wrote public/og.png');
