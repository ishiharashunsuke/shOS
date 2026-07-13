import { EmptyState } from "@/components/feedback/EmptyState";
import { getCircuits } from "@/features/f1";

export default function CircuitsPage() {
  const circuits = getCircuits();

  if (circuits.length === 0) return <EmptyState message="まだサーキットが登録されていません。" />;

  return (
    <ul>
      {circuits.map((circuit) => (
        <li key={circuit.slug}>{circuit.name}</li>
      ))}
    </ul>
  );
}
