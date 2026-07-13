import { slugify } from "@/utils/slugify";
import { collections, movies, viewings } from "../data";
import type { Collection, DirectorSummary, GenreSummary, Movie, Viewing } from "../types";

/**
 * Backed by static placeholder data today. When Supabase is wired up,
 * only these internals change — every caller keeps the same signatures.
 */

export function getMovies(): Movie[] {
  return movies;
}

export function getMovieBySlug(slug: string): Movie | undefined {
  return movies.find((movie) => movie.slug === slug);
}

export function getRelatedMovies(movie: Movie): Movie[] {
  return movie.relatedSlugs
    .map((slug) => getMovieBySlug(slug))
    .filter((related): related is Movie => Boolean(related));
}

export function getRecentMovies(limit: number): Movie[] {
  return movies.slice(0, limit);
}

/** Newest first — the order Journal displays them in. */
export function getViewings(): Viewing[] {
  return [...viewings].sort((a, b) => b.watchedDate.localeCompare(a.watchedDate));
}

export function getViewingsByMovie(slug: string): Viewing[] {
  return viewings.filter((viewing) => viewing.movieSlug === slug);
}

export function getCollections(): Collection[] {
  return collections;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}

export function getMoviesInCollection(collection: Collection): Movie[] {
  return collection.movieSlugs
    .map((slug) => getMovieBySlug(slug))
    .filter((movie): movie is Movie => Boolean(movie));
}

export function getDirectors(): DirectorSummary[] {
  const counts = new Map<string, number>();
  for (const movie of movies) {
    counts.set(movie.director, (counts.get(movie.director) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, slug: slugify(name), count }))
    .sort((a, b) => b.count - a.count);
}

export function getMoviesByDirectorSlug(slug: string): Movie[] {
  return movies.filter((movie) => slugify(movie.director) === slug);
}

export function getGenres(): GenreSummary[] {
  const counts = new Map<string, number>();
  for (const movie of movies) {
    for (const genre of movie.genres) {
      counts.set(genre, (counts.get(genre) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, slug: slugify(name), count }))
    .sort((a, b) => b.count - a.count);
}

export function getMoviesByGenreSlug(slug: string): Movie[] {
  return movies.filter((movie) => movie.genres.some((genre) => slugify(genre) === slug));
}
