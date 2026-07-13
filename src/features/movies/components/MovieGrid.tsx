import type { Movie } from "../types";
import { ExhibitPlate } from "./ExhibitPlate";

export function MovieGrid({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie, index) => (
        <ExhibitPlate key={movie.slug} movie={movie} index={index} />
      ))}
    </div>
  );
}
