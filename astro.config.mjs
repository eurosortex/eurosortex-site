// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eurosortex.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'ru', 'uk', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
