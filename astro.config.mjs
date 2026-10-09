// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eurosortex.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'ru', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({
    // The reviews page contains clearly labelled fictional examples until real reviews are supplied.
    filter: (page) => !/^\/(ru|uk|en)(\/|$)/.test(new URL(page).pathname) && !page.endsWith('/404.html') && new URL(page).pathname !== '/opinie/',
  })],
});
