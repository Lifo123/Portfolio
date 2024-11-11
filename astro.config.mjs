import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.lifo123.site/',
  integrations: [react(), mdx(), sitemap()],
  outDir: 'Build',
  build: {
    assets: 'assets',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  }
});