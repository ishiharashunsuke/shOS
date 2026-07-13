import type { Book, Quote } from "../types";

// Placeholder — structure only, no data source wired up yet.

export function getBooks(): Book[] {
  return [];
}

export function getBookBySlug(slug: string): Book | undefined {
  return getBooks().find((book) => book.slug === slug);
}

export function getQuotes(): Quote[] {
  return [];
}
