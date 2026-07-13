import { EmptyState } from "@/components/feedback/EmptyState";
import { getDriverBySlug } from "@/features/f1";

export default async function DriverDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const driver = getDriverBySlug(slug);

  if (!driver) return <EmptyState message="このドライバーはまだ登録されていません。" />;

  return <h1>{driver.name}</h1>;
}
