import Link from "next/link";
import type { Movie, Viewing } from "../types";
import { MoviePoster } from "./MoviePoster";

/** A single watch record — shared by Journal (reverse-chronological feed) and Timeline (grouped by year). */
export function JournalEntry({ viewing, movie }: { viewing: Viewing; movie: Movie }) {
  const formatted = new Date(viewing.watchedDate).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/movies/${movie.slug}`}
      className="group flex items-center gap-4 border-b border-foreground/10 py-4"
    >
      <div className="w-12 shrink-0 overflow-hidden">
        <MoviePoster poster={movie.poster} title={movie.title} />
      </div>
      <div className="flex-1">
        <p className="font-display text-lg leading-tight transition-colors group-hover:text-accent">
          {movie.title}
        </p>
        <p className="font-mono text-xs text-muted">{formatted}</p>
        {viewing.note && <p className="mt-1 text-sm text-foreground/80">{viewing.note}</p>}
      </div>
    </Link>
  );
}
