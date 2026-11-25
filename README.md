# hireaaronadams.com

Personal hiring site for Aaron Adams. Designed like a file in a design tool: a dotted canvas with named frames, a properties panel of quick facts, a project timeline of every job, sticky notes and a comment thread. Built with Astro (static output), deployed on Vercel.

## Pages

| Path | What it is |
| --- | --- |
| `/` | The portfolio. Printing it prints the plain resume instead. |
| `/resume` | The plain, print-ready resume. Same content. Good for printing or pasting into an ATS. |
| `/AaronAdamsResume2026.pdf` | The downloadable PDF. Replace `public/AaronAdamsResume2026.pdf` to update it. |

## Edit the words

All copy lives in [`src/data/aaron.ts`](src/data/aaron.ts). Change text there; you never need to touch a component.
Search the repo for `TODO(aaron)` to find anything that still needs your input.

House rule: no em dashes. `npm run build` fails if one sneaks in (`npm run lint:copy` runs the check on its own).

## Local dev

Needs Node 18.17+ (Node 20 or 22 recommended).

```bash
npm install
```

```bash
npm run dev
```

Opens at http://localhost:4321.

## Build and preview

```bash
npm run build
```

```bash
npm run preview
```

The built site lands in `dist/`.

## Share image

`public/og.png` is the 1200x630 preview shown when the link is pasted into LinkedIn, Slack or email. It is generated from `scripts/make-og.mjs`. To regenerate after changing the words in it (needs Playwright):

```bash
npx playwright install chromium
```

```bash
npm run og
```

## Deploy to Vercel

1. Go to vercel.com, choose **Add New → Project**, and import `aaronmichadams-ctrl/hire-aaron-adams` from GitHub.
2. Vercel detects Astro automatically. Leave the defaults: build command `npm run build`, output directory `dist`.
3. Choose the branch to deploy from as the production branch (Settings → Git → Production Branch).
4. Click **Deploy**. Every push to that branch redeploys; every other branch gets a preview URL.

Or from the command line:

```bash
npx vercel
```

```bash
npx vercel --prod
```

## Point hireaaronadams.com at it

1. In the Vercel project, open **Settings → Domains** and add `hireaaronadams.com`, then add `www.hireaaronadams.com` and set it to redirect to the apex domain.
2. Vercel shows the DNS records to create. At your domain registrar (wherever hireaaronadams.com is registered today), replace the records that point at the current site with:
   - `A` record for `@` pointing to the IP Vercel shows (currently `76.76.21.21`).
   - `CNAME` record for `www` pointing to `cname.vercel-dns.com`.
   Use the exact values Vercel shows on the Domains page; they take precedence over this README.
3. Remove any old `A`, `AAAA` or `CNAME` records for `@` and `www` that point at the previous host, or the two sites will fight.
4. Wait for DNS to propagate (minutes to a few hours). Vercel issues the HTTPS certificate automatically once it sees the records.

If the current site is on a builder like Wix or Squarespace, disconnect the domain there first so it stops managing the DNS, or move DNS to Vercel by switching nameservers (Vercel shows the nameserver option on the same page).

## Project layout

```
src/data/aaron.ts            all copy and facts
src/pages/index.astro        the portfolio (canvas, frames, timeline)
src/pages/resume.astro       plain resume page
src/pages/404.astro          "this frame got deleted"
src/components/ResumeView.astro  the plain resume: /resume and the print version of /
src/layouts/Base.astro       head, SEO, Open Graph, the file bar header
src/styles/global.css        color tokens, file bar, resume and print styles
scripts/make-og.mjs          renders public/og.png
scripts/lint-copy.mjs        em dash check
DECISIONS.md                 why it looks the way it does
```
