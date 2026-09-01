# EuroSortex

Production Astro site for the EuroSortex B2B wholesale clothing business.

## Commands

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Structure

- `src/pages/index.astro` — Polish landing page
- `src/components/` — page sections and shared UI
- `src/data/site.ts` — products, FAQ and contact links
- `src/styles/global.css` — design tokens and global styles
- `public/images/logo.png` — EuroSortex logo

## Kommo enquiry form

The product enquiry form uses a Cloudflare Pages Function and keeps Kommo
credentials server-side. See [docs/kommo-form-setup.md](docs/kommo-form-setup.md)
for the one-time integration and deployment setup.
