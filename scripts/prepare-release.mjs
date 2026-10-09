import { rm } from 'node:fs/promises';

// Fictional review layouts are available in the dev server only.
// Remove their generated pages before any production or preview deployment.
for (const route of ['opinie', 'ru/otzyvy', 'uk/vidhuky']) {
  await rm(new URL(`../dist/${route}/`, import.meta.url), { recursive: true, force: true });
}
console.log('Release prepared: demonstration reviews excluded.');
