# hireaaronadams.com

Personal hiring site for Aaron Adams. Astro, static output, deploys to Vercel.

> Status: checkpoint 2 of 4. The homepage is the unstyled complete version. Hero directions are on `/lab`.

## Edit the words

All copy lives in [`src/data/aaron.ts`](src/data/aaron.ts). Change text there; you never need to touch a component.
Search for `TODO(aaron)` to find anything that still needs your input.

## Local dev

```bash
npm install
```

```bash
npm run dev
```

Opens at http://localhost:4321. Pages: `/` (site), `/resume` (plain resume, same as boring mode), `/lab` (design sketches, not indexed).

## Build

```bash
npm run build
```

```bash
npm run preview
```

The resume PDF served by the site is `public/AaronAdamsResume2026.pdf`. Replace that file to update the download.

_Deploy and domain steps land at the final checkpoint._
