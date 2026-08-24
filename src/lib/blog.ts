import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Locale } from '../config/locales';
import { locales } from '../config/locales';

export const BLOG_PAGE_SIZE = 6;

export async function getPublishedBlogPosts(locale: Locale = 'pl') {
  return (await getCollection('blog', ({ data }) => !data.draft && data.locale === locale)).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

export function getBlogRoot(locale: Locale) {
  return locale === 'pl' ? '/blog/' : `/${locale}/blog/`;
}

export function getBlogPagePath(page: number, locale: Locale = 'pl') {
  const root = getBlogRoot(locale);
  return page === 1 ? root : `${root}page/${page}/`;
}

export function getBlogEntrySlug(post: CollectionEntry<'blog'>) {
  return post.id.split('/').at(-1) ?? post.id;
}

export function getBlogArticlePath(locale: Locale, slug: string) {
  return `${getBlogRoot(locale)}${slug}/`;
}

export function getBlogPageAlternatePaths(page: number) {
  return Object.fromEntries(locales.map((locale) => [locale, getBlogPagePath(page, locale)])) as Record<Locale, string>;
}

export function getBlogArticleAlternatePaths(slug: string) {
  return Object.fromEntries(locales.map((locale) => [locale, getBlogArticlePath(locale, slug)])) as Record<Locale, string>;
}
