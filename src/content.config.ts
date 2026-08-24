import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { existsSync, readdirSync } from 'node:fs';

const blogDirectory = new URL('./content/blog/', import.meta.url);
const hasBlogArticles = existsSync(blogDirectory)
  && readdirSync(blogDirectory, { recursive: true }).some((file) => typeof file === 'string' && file.endsWith('.md'));

const blog = defineCollection({
  loader: hasBlogArticles ? glob({ base: './src/content/blog', pattern: '**/*.md' }) : async () => [],
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['pl', 'ru', 'uk', 'en']).default('pl'),
    category: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    readingTime: z.number().int().positive(),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
