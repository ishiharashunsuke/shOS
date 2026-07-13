import { EmptyState } from "@/components/feedback/EmptyState";
import { getPlayerBySlug } from "@/features/football";

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const player = getPlayerBySlug(slug);

  if (!player) return <EmptyState message="この選手はまだ登録されていません。" />;

  return <h1>{player.name}</h1>;
}
