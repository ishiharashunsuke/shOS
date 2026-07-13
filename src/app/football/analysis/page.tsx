import { EmptyState } from "@/components/feedback/EmptyState";
import { getAnalyses } from "@/features/football";

export default function AnalysisPage() {
  const analyses = getAnalyses();

  if (analyses.length === 0) return <EmptyState message="まだ分析記事がありません。" />;

  return (
    <ul>
      {analyses.map((analysis) => (
        <li key={analysis.slug}>{analysis.title}</li>
      ))}
    </ul>
  );
}
