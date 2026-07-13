// Public surface of the movies feature. Other features (e.g. home's
// dashboard) may only reach into movies through what's exported here —
// never by importing from features/movies/services or components directly.
export type { Movie, Viewing, Collection, DirectorSummary, GenreSummary } from "./types";
export {
  getMovies,
  getMovieBySlug,
  getRelatedMovies,
  getRecentMovies,
  getViewings,
  getViewingsByMovie,
  getCollections,
  getCollectionBySlug,
  getMoviesInCollection,
  getDirectors,
  getMoviesByDirectorSlug,
  getGenres,
  getMoviesByGenreSlug,
} from "./services/movies.service";
export { ExhibitPlate } from "./components/ExhibitPlate";
