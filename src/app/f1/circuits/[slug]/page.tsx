import { EmptyState } from "@/components/feedback/EmptyState";
import { getCircuitBySlug } from "@/features/f1";

export default async function CircuitDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const circuit = getCircuitBySlug(slug);

  if (!circuit) return <EmptyState message="このサーキットはまだ登録されていません。" />;

  return <h1>{circuit.name}</h1>;
}
