import { EmptyState } from "@/components/feedback/EmptyState";
import { getExperiments } from "@/features/ai-lab";

export default function ExperimentsPage() {
  const experiments = getExperiments();

  if (experiments.length === 0) return <EmptyState message="まだ実験記録がありません。" />;

  return (
    <ul>
      {experiments.map((experiment) => (
        <li key={experiment.id}>{experiment.title}</li>
      ))}
    </ul>
  );
}
