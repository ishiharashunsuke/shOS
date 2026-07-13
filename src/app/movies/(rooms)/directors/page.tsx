import Link from "next/link";
import { getDirectors } from "@/features/movies";
import { PlaqueLabel } from "@/features/movies/components/PlaqueLabel";

export default function DirectorsPage() {
  const directors = getDirectors();

  return (
    <div>
      <h1 className="font-display text-4xl italic md:text-5xl">Directors</h1>
      <p className="mt-3 max-w-md text-sm text-foreground/70">作家ごとの部屋を訪ねる。</p>

      <div className="mt-10 flex flex-col gap-3">
        {directors.map((director) => (
          <Link key={director.slug} href={`/movies/directors/${director.slug}`} className="group">
            <PlaqueLabel className="justify-between transition-colors group-hover:border-accent/40 group-hover:text-accent">
              <span className="font-display text-base text-foreground normal-case italic group-hover:text-accent">
                {director.name}
              </span>
              <span>{director.count} works</span>
            </PlaqueLabel>
          </Link>
        ))}
      </div>
    </div>
  );
}
