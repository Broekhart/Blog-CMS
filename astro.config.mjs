import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import db from '@astrojs/db';
import node from '@astrojs/node';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), db(), vue()],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    port: 3000,
  },
});
