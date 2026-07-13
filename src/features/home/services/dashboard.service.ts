import { getRecentMovies } from "@/features/movies";
import type { ActivityItem, Widget } from "../types";

/**
 * Home is the only feature allowed to import from other features' public
 * barrels (e.g. "@/features/movies") to aggregate cross-app data. No other
 * feature may import from "@/features/home" — the dependency is one-way.
 */
export function getRecentActivity(limit = 5): ActivityItem[] {
  const recentMovies = getRecentMovies(limit).map(
    (movie): ActivityItem => ({
      label: movie.title,
      meta: "Movies",
      href: `/movies/${movie.slug}`,
    }),
  );

  return recentMovies.slice(0, limit);
}

export function getWidgets(): Widget[] {
  // Placeholder — one widget per live app. Extend as apps go live.
  return [{ id: "movies", title: "Movies" }];
}
