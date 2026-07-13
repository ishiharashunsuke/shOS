import { EmptyState } from "@/components/feedback/EmptyState";
import { getTeamBySlug } from "@/features/football";

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);

  if (!team) return <EmptyState message="このチームはまだ登録されていません。" />;

  return <h1>{team.name}</h1>;
}
