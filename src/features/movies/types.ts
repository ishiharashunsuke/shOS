export type Movie = {
  slug: string;
  title: string;
  year: number;
  director: string;
  genres: string[];
  /** 0-5, supports .5 increments. */
  rating: number;
  /** Path under /public, e.g. "/movies/poster.jpg". Omit to use the generated placeholder. */
  poster?: string;
  oneLiner: string;
  thoughts: string;
  favoriteScene: string;
  analysis: string;
  /** 余韻メモ — a short note about the feeling that lingered after watching. */
  lingeringNote: string;
  relatedSlugs: string[];
};

/** A single watch event. Powers both Journal (reverse-chronological feed) and Timeline (grouped by year). */
export type Viewing = {
  id: string;
  movieSlug: string;
  /** ISO date, e.g. "2026-03-01". */
  watchedDate: string;
  note?: string;
};

export type Collection = {
  slug: string;
  title: string;
  curatorNote: string;
  movieSlugs: string[];
};

/** Derived from Movie.director — not a stored entity (see movies.service.ts). */
export type DirectorSummary = { name: string; slug: string; count: number };

/** Derived from Movie.genres — not a stored entity (see movies.service.ts). */
export type GenreSummary = { name: string; slug: string; count: number };
