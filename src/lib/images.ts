import type { ImageMetadata } from 'astro';

// Public originals keep existing social/sharing URLs stable; Astro creates
// responsive, compressed variants from these sources during the build.
const images = import.meta.glob<ImageMetadata>('../assets/images/**/*.{jpg,png}', {
  eager: true,
  import: 'default',
});

export function imageAsset(publicPath: string): ImageMetadata {
  const image = images[publicPath.replace('/images/', '../assets/images/')];
  if (!image) throw new Error(`Missing responsive image source: ${publicPath}`);
  return image;
}
