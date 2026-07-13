import type { Movie } from "@/data/movies";
import { MoviePoster } from "./MoviePoster";
import { RatingStars } from "./RatingStars";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-mono text-xs uppercase tracking-widest text-accent">{label}</h2>
      <p className="mt-3 max-w-2xl whitespace-pre-line leading-relaxed text-foreground/85">
        {children}
      </p>
    </section>
  );
}

export function MovieDetail({ movie }: { movie: Movie }) {
  return (
    <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
      <div className="md:sticky md:top-28 md:self-start">
        <div className="w-full max-w-xs overflow-hidden">
          <MoviePoster poster={movie.poster} title={movie.title} />
        </div>
        <dl className="mt-6 space-y-3 font-mono text-xs text-muted">
          <div className="flex justify-between gap-4">
            <dt>Director</dt>
            <dd className="text-right text-foreground/80">{movie.director}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Year</dt>
            <dd className="text-foreground/80">{movie.year}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Genre</dt>
            <dd className="text-right text-foreground/80">{movie.genres.join(" / ")}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt>Rating</dt>
            <dd>
              <RatingStars rating={movie.rating} />
            </dd>
          </div>
        </dl>
      </div>

      <div className="max-w-2xl space-y-12">
        <div>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">{movie.title}</h1>
          <p className="mt-4 font-display text-xl text-foreground/70 italic">
            &ldquo;{movie.oneLiner}&rdquo;
          </p>
        </div>
        <Section label="感想">{movie.thoughts}</Section>
        <Section label="好きなシーン">{movie.favoriteScene}</Section>
        <Section label="考察">{movie.analysis}</Section>
      </div>
    </div>
  );
}
