import { movies } from "@/data/movies";
import { AppWindow } from "@/components/os/AppWindow";
import { MovieGrid } from "@/components/movies/MovieGrid";

export default function MoviesPage() {
  return (
    <AppWindow title="Movies" backHref="/" backLabel="Desktop">
      <h1 className="font-display text-[13vw] leading-none tracking-tight md:text-[6vw]">
        Movies
      </h1>
      <p className="mt-4 max-w-md font-mono text-sm text-muted">好きな映画たち</p>
      <div className="mt-16">
        <MovieGrid movies={movies} />
      </div>
    </AppWindow>
  );
}
