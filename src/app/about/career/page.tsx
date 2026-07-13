import { EmptyState } from "@/components/feedback/EmptyState";
import { getCareerEntries } from "@/features/about";

export default function CareerPage() {
  const entries = getCareerEntries();

  if (entries.length === 0) return <EmptyState message="まだ経歴が登録されていません。" />;

  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>
          {entry.role} — {entry.company}
        </li>
      ))}
    </ul>
  );
}
