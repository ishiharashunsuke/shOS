import { EmptyState } from "@/components/feedback/EmptyState";
import { getRaces } from "@/features/f1";

export default function RacesPage() {
  const races = getRaces();

  if (races.length === 0) return <EmptyState message="まだレースが登録されていません。" />;

  return (
    <ul>
      {races.map((race) => (
        <li key={race.slug}>{race.name}</li>
      ))}
    </ul>
  );
}
