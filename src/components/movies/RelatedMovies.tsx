import Link from "next/link";
import type { Movie } from "@/data/movies";
import { MoviePoster } from "./MoviePoster";

export function RelatedMovies({ movies }: { movies: Movie[] }) {
  if (movies.length === 0) return null;

  return (
    <div className="mt-20 border-t border-foreground/10 pt-10">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">関連作品</h2>
      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {movies.map((movie) => (
          <Link key={movie.slug} href={`/movies/${movie.slug}`} className="group">
            <div className="overflow-hidden">
              <MoviePoster
                poster={movie.poster}
                title={movie.title}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 font-display text-sm leading-tight transition-colors group-hover:text-accent">
              {movie.title}
            </p>
            <p className="font-mono text-xs text-muted">{movie.year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
