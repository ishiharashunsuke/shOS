import Link from "next/link";
import type { Collection, Movie } from "../types";
import { MoviePoster } from "./MoviePoster";

export function CollectionBanner({ collection, movies }: { collection: Collection; movies: Movie[] }) {
  return (
    <Link
      href={`/movies/collections/${collection.slug}`}
      className="group grid gap-6 border border-foreground/15 p-6 transition-colors hover:border-accent/40 md:grid-cols-[1fr_auto]"
    >
      <div>
        <h3 className="font-display text-2xl italic transition-colors group-hover:text-accent">
          {collection.title}
        </h3>
        <p className="mt-2 max-w-md text-sm text-foreground/80">{collection.curatorNote}</p>
        <p className="mt-3 font-mono text-xs text-muted">{movies.length} works</p>
      </div>
      <div className="flex gap-2">
        {movies.slice(0, 4).map((movie) => (
          <div key={movie.slug} className="w-14 shrink-0">
            <MoviePoster poster={movie.poster} title={movie.title} />
          </div>
        ))}
      </div>
    </Link>
  );
}
