import type { Movie } from "@/data/movies";
import { MovieCard } from "./MovieCard";

export function MovieGrid({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie, index) => (
        <MovieCard key={movie.slug} movie={movie} index={index} />
      ))}
    </div>
  );
}
