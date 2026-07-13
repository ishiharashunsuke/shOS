import { EmptyState } from "@/components/feedback/EmptyState";
import { getRaceBySlug } from "@/features/f1";

export default async function RaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const race = getRaceBySlug(slug);

  if (!race) return <EmptyState message="このレースはまだ登録されていません。" />;

  return <h1>{race.name}</h1>;
}
