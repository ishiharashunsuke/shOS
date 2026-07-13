"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Movie } from "../types";
import { MoviePoster } from "./MoviePoster";
import { RatingStars } from "./RatingStars";

// Deterministic per-plate tilt (from the slug, not Math.random) so frames
// look hand-hung without a server/client hydration mismatch.
function tiltFor(slug: string): number {
  const hash = [...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return (hash % 5) - 2; // -2deg .. 2deg
}

export function ExhibitPlate({ movie, index }: { movie: Movie; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotate: tiltFor(movie.slug) }}
      whileHover={{ rotate: 0 }}
    >
      <Link href={`/movies/${movie.slug}`} className="group flex flex-col">
        <motion.div
          layoutId={`poster-${movie.slug}`}
          className="overflow-hidden border border-foreground/15 p-1.5 transition-colors group-hover:border-accent/50"
        >
          <MoviePoster poster={movie.poster} title={movie.title} />
        </motion.div>
        <PlaqueRow index={index} year={movie.year} />
        <div className="mt-2 flex items-center justify-between gap-2">
          <h3 className="font-display text-lg leading-tight italic transition-colors group-hover:text-accent">
            {movie.title}
          </h3>
          <RatingStars rating={movie.rating} size={11} />
        </div>
      </Link>
    </motion.div>
  );
}

function PlaqueRow({ index, year }: { index: number; year: number }) {
  return (
    <div className="mt-4 flex items-center justify-between border-y border-foreground/15 px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
      <span>No. {String(index + 1).padStart(3, "0")}</span>
      <span>{year}</span>
    </div>
  );
}
