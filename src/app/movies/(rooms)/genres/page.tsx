import Link from "next/link";
import { getGenres } from "@/features/movies";
import { PlaqueLabel } from "@/features/movies/components/PlaqueLabel";

export default function GenresPage() {
  const genres = getGenres();

  return (
    <div>
      <h1 className="font-display text-4xl italic md:text-5xl">Genres</h1>
      <p className="mt-3 max-w-md text-sm text-foreground/70">それぞれの翼(Wing)を巡る。</p>

      <div className="mt-10 flex flex-col gap-3">
        {genres.map((genre) => (
          <Link key={genre.slug} href={`/movies/genres/${genre.slug}`} className="group">
            <PlaqueLabel className="justify-between transition-colors group-hover:border-accent/40 group-hover:text-accent">
              <span className="font-display text-base text-foreground normal-case italic group-hover:text-accent">
                {genre.name}
              </span>
              <span>{genre.count} works</span>
            </PlaqueLabel>
          </Link>
        ))}
      </div>
    </div>
  );
}
