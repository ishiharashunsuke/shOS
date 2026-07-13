import { AppWindow } from "@/components/os/AppWindow";
import { getRecentMovies } from "@/features/movies";
import { ExhibitPlate } from "@/features/movies/components/ExhibitPlate";
import { DoorwayTile } from "@/features/movies/components/DoorwayTile";

const ROOMS = [
  { href: "/movies/gallery", label: "Gallery", description: "全ての展示を歩く" },
  { href: "/movies/collections", label: "Collections", description: "特別展を覗く" },
  { href: "/movies/journal", label: "Journal", description: "観た記憶を綴る" },
  { href: "/movies/directors", label: "Directors", description: "作家の部屋を訪ねる" },
  { href: "/movies/genres", label: "Genres", description: "翼(Wing)を巡る" },
  { href: "/movies/timeline", label: "Timeline", description: "時をたどる回廊" },
];

export default function MoviesEntrancePage() {
  const featured = getRecentMovies(3);

  return (
    <AppWindow title="Movies" backHref="/" backLabel="Desktop">
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-20 -top-20 h-72 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_18%,transparent),transparent)] blur-2xl"
        />
        <p className="relative font-mono text-sm uppercase tracking-widest text-muted">
          A Museum of Memory
        </p>
        <h1 className="relative mt-3 font-display text-[13vw] leading-none tracking-tight italic md:text-[6vw]">
          Movies
        </h1>
        <p className="relative mt-4 max-w-md text-sm text-foreground/70">
          夜ごと灯りがともる、記憶の映画館。
        </p>
      </div>

      <section className="mt-20">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">今夜の展示</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {featured.map((movie, index) => (
            <ExhibitPlate key={movie.slug} movie={movie} index={index} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">館内図</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room, index) => (
            <DoorwayTile key={room.href} {...room} index={index} />
          ))}
        </div>
      </section>
    </AppWindow>
  );
}
