"use client";

import { motion } from "motion/react";
import type { Movie } from "../types";
import { MoviePoster } from "./MoviePoster";
import { RatingStars } from "./RatingStars";
import { PlaqueLabel } from "./PlaqueLabel";
import { RoomDivider } from "./RoomDivider";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-mono text-xs uppercase tracking-widest text-accent">{label}</h2>
      <p className="mt-3 whitespace-pre-line leading-relaxed text-foreground/85">{children}</p>
    </section>
  );
}

/**
 * A single reading path down the middle of the alcove — poster, plaque,
 * title, then each reflection in turn, ending on the quietest note.
 */
export function MovieDetail({ movie }: { movie: Movie }) {
  return (
    <div className="mx-auto max-w-2xl">
      <motion.div
        layoutId={`poster-${movie.slug}`}
        className="mx-auto w-full max-w-xs overflow-hidden border border-foreground/15 p-2 shadow-[0_0_60px_-15px_var(--accent)]"
      >
        <MoviePoster poster={movie.poster} title={movie.title} />
      </motion.div>

      <PlaqueLabel className="mt-8 flex-wrap justify-center gap-x-6 gap-y-2 text-center">
        <span>{movie.director}</span>
        <span>{movie.year}</span>
        <span>{movie.genres.join(" / ")}</span>
        <RatingStars rating={movie.rating} />
      </PlaqueLabel>

      <div className="mt-10 text-center">
        <h1 className="font-display text-4xl leading-tight md:text-5xl">{movie.title}</h1>
        <p className="mt-4 font-display text-xl text-foreground/70 italic">
          &ldquo;{movie.oneLiner}&rdquo;
        </p>
      </div>

      <RoomDivider />
      <Section label="感想">{movie.thoughts}</Section>

      <RoomDivider />
      <Section label="好きなシーン">{movie.favoriteScene}</Section>

      <RoomDivider />
      <Section label="考察">{movie.analysis}</Section>

      <RoomDivider />
      <section className="pb-4 text-center">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">余韻メモ</h2>
        <p className="mt-3 font-display text-base text-foreground/70 italic">
          {movie.lingeringNote}
        </p>
      </section>
    </div>
  );
}
