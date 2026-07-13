import type { Article, JournalEntry, Note } from "../types";

// Placeholder — structure only, no data source wired up yet.

export function getTimeline(): JournalEntry[] {
  return [];
}

export function getArticles(): Article[] {
  return [];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((article) => article.slug === slug);
}

export function getNotes(): Note[] {
  return [];
}
