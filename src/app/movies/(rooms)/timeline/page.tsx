import { EmptyState } from "@/components/feedback/EmptyState";
import { getMovieBySlug, getViewings } from "@/features/movies";
import { JournalEntry } from "@/features/movies/components/JournalEntry";
import { RoomDivider } from "@/features/movies/components/RoomDivider";

export default function TimelinePage() {
  const decades = groupByWatchedDecade(getViewings());

  return (
    <div>
      <h1 className="font-display text-4xl italic md:text-5xl">Timeline</h1>
      <p className="mt-3 max-w-md text-sm text-foreground/70">
        自分が観た時をたどる、長い回廊。
      </p>

      {decades.length === 0 ? (
        <div className="mt-10">
          <EmptyState message="まだ記録がありません。" />
        </div>
      ) : (
        decades.map(([decade, viewings]) => (
          <div key={decade}>
            <RoomDivider label={`${decade}s`} />
            <div className="mx-auto max-w-xl border-l border-foreground/15 pl-6">
              {viewings.map((viewing) => {
                const movie = getMovieBySlug(viewing.movieSlug);
                return movie ? (
                  <JournalEntry key={viewing.id} viewing={viewing} movie={movie} />
                ) : null;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function groupByWatchedDecade(viewings: ReturnType<typeof getViewings>) {
  const groups = new Map<number, typeof viewings>();
  for (const viewing of viewings) {
    const decade = Math.floor(new Date(viewing.watchedDate).getFullYear() / 10) * 10;
    groups.set(decade, [...(groups.get(decade) ?? []), viewing]);
  }
  return [...groups.entries()].sort((a, b) => b[0] - a[0]);
}
