// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.stron.me',
  integrations: [],
  output: 'hybrid',
  adapter: cloudflare(),
  build: {
    inlineStylesheets: 'always',
  }
});
