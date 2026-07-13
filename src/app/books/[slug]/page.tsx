import { EmptyState } from "@/components/feedback/EmptyState";
import { getBookBySlug } from "@/features/books";

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) return <EmptyState message="この本はまだ登録されていません。" />;

  return <h1>{book.title}</h1>;
}
