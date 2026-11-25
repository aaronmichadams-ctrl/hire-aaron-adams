import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hireaaronadams.com',
  output: 'static',
  trailingSlash: 'ignore',
  // Inline CSS so the first paint never waits on a stylesheet request.
  build: { inlineStylesheets: 'always' },
});
