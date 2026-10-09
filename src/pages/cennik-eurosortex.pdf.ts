import type { APIRoute } from 'astro';
import { createPricelistPdf } from '../lib/pricelist-pdf';

export const prerender = true;

export const GET: APIRoute = async () => new Response(new Uint8Array(await createPricelistPdf()), {
  headers: {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="cennik-eurosortex.pdf"',
  },
});
