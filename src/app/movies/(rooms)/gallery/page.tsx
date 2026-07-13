import { getMovies } from "@/features/movies";
import { RoomDivider } from "@/features/movies/components/RoomDivider";
import { MovieGrid } from "@/features/movies/components/MovieGrid";

export default function GalleryPage() {
  const movies = getMovies();
  const decades = groupByDecade(movies);

  return (
    <div>
      <h1 className="font-display text-4xl italic md:text-5xl">Gallery</h1>
      <p className="mt-3 max-w-md text-sm text-foreground/70">
        額に収められた記憶を、壁づたいに歩いていく。
      </p>

      {decades.map(([decade, decadeMovies]) => (
        <div key={decade}>
          <RoomDivider label={`${decade}s`} />
          <MovieGrid movies={decadeMovies} />
        </div>
      ))}
    </div>
  );
}

function groupByDecade(movies: ReturnType<typeof getMovies>) {
  const groups = new Map<number, typeof movies>();
  for (const movie of movies) {
    const decade = Math.floor(movie.year / 10) * 10;
    groups.set(decade, [...(groups.get(decade) ?? []), movie]);
  }
  return [...groups.entries()].sort((a, b) => b[0] - a[0]);
}
