import { Star, StarHalf } from "lucide-react";

export function RatingStars({ rating, size = 14 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5 text-accent" aria-label={`評価 ${rating} / 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`full-${i}`} size={size} strokeWidth={1.5} fill="currentColor" />
      ))}
      {hasHalf && <StarHalf size={size} strokeWidth={1.5} fill="currentColor" />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`empty-${i}`} size={size} strokeWidth={1.5} className="text-foreground/20" />
      ))}
    </div>
  );
}
