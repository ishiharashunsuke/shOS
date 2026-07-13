"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Movie } from "@/data/movies";
import { MoviePoster } from "./MoviePoster";
import { RatingStars } from "./RatingStars";

export function MovieCard({ movie, index }: { movie: Movie; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/movies/${movie.slug}`} className="group flex flex-col">
        <div className="relative overflow-hidden">
          <MoviePoster
            poster={movie.poster}
            title={movie.title}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors group-hover:border-accent/40" />
        </div>
        <div className="flex flex-1 flex-col gap-2 pt-5">
          <span className="font-mono text-xs text-muted">{movie.year}</span>
          <h3 className="font-display text-xl leading-tight transition-colors group-hover:text-accent">
            {movie.title}
          </h3>
          <div className="mt-auto flex items-center justify-between pt-3">
            <RatingStars rating={movie.rating} />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              {movie.genres[0]}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
