import { EmptyState } from "@/components/feedback/EmptyState";
import { getFormations } from "@/features/football";

export default function FormationsPage() {
  const formations = getFormations();

  if (formations.length === 0) return <EmptyState message="まだフォーメーションが登録されていません。" />;

  return (
    <ul>
      {formations.map((formation) => (
        <li key={formation.id}>{formation.name}</li>
      ))}
    </ul>
  );
}
