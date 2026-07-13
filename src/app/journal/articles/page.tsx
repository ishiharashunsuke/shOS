import { EmptyState } from "@/components/feedback/EmptyState";
import { getArticles } from "@/features/journal";

export default function ArticlesPage() {
  const articles = getArticles();

  if (articles.length === 0) return <EmptyState message="まだ記事がありません。" />;

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.slug}>{article.title}</li>
      ))}
    </ul>
  );
}
