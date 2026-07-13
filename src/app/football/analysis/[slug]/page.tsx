import { EmptyState } from "@/components/feedback/EmptyState";
import { getAnalysisBySlug } from "@/features/football";

export default async function AnalysisDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const analysis = getAnalysisBySlug(slug);

  if (!analysis) return <EmptyState message="この分析記事はまだありません。" />;

  return <h1>{analysis.title}</h1>;
}
