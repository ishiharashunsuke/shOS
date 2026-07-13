import { EmptyState } from "@/components/feedback/EmptyState";
import { getArticleBySlug } from "@/features/journal";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return <EmptyState message="この記事はまだありません。" />;

  return <h1>{article.title}</h1>;
}
