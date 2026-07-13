import { movies, type Movie } from "@/data/movies";

export function getMovieBySlug(slug: string): Movie | undefined {
  return movies.find((movie) => movie.slug === slug);
}

export function getRelatedMovies(movie: Movie): Movie[] {
  return movie.relatedSlugs
    .map((slug) => getMovieBySlug(slug))
    .filter((related): related is Movie => Boolean(related));
}
