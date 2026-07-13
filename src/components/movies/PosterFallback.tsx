import { Film } from "lucide-react";

/** Used whenever a movie has no `poster` file — a generated visual instead of a broken image. */
export function PosterFallback({ title, className }: { title: string; className?: string }) {
  return (
    <div
      className={`relative flex aspect-[2/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-foreground/10 via-background to-accent/20 ${className ?? ""}`}
    >
      <Film
        className="absolute -bottom-4 -right-4 h-24 w-24 text-foreground/5"
        strokeWidth={1}
      />
      <span className="font-display text-5xl text-foreground/25">{title.charAt(0)}</span>
    </div>
  );
}
