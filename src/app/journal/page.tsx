import { EmptyState } from "@/components/feedback/EmptyState";
import { getTimeline } from "@/features/journal";

export default function JournalTimelinePage() {
  const entries = getTimeline();

  if (entries.length === 0) return <EmptyState message="まだ記録がありません。" />;

  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>{entry.title}</li>
      ))}
    </ul>
  );
}
