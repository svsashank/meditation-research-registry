// @ts-check
import { defineConfig } from 'astro/config';

// Staging deploy target: GitHub Pages under the repo path.
// The whole site is kept `noindex` (see BaseLayout + robots.txt) until a
// qualified reviewer signs off per BRIEF.md §13 / §18.
export default defineConfig({
  site: 'https://svsashank.github.io',
  base: '/meditation-research-registry',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
