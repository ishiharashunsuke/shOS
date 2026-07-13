import { EmptyState } from "@/components/feedback/EmptyState";
import { getMovieBySlug, getViewings } from "@/features/movies";
import { JournalEntry } from "@/features/movies/components/JournalEntry";

export default function JournalPage() {
  const viewings = getViewings();

  return (
    <div>
      <h1 className="font-display text-4xl italic md:text-5xl">Journal</h1>
      <p className="mt-3 max-w-md text-sm text-foreground/70">観た記憶を、日付とともに綴っていく。</p>

      <div className="mt-10">
        {viewings.length === 0 ? (
          <EmptyState message="まだ記録がありません。" />
        ) : (
          viewings.map((viewing) => {
            const movie = getMovieBySlug(viewing.movieSlug);
            return movie ? <JournalEntry key={viewing.id} viewing={viewing} movie={movie} /> : null;
          })
        )}
      </div>
    </div>
  );
}
