import { EmptyState } from "@/components/feedback/EmptyState";
import { getQuotes } from "@/features/books";

export default function QuotesPage() {
  const quotes = getQuotes();

  if (quotes.length === 0) return <EmptyState message="まだ引用がありません。" />;

  return (
    <ul>
      {quotes.map((quote) => (
        <li key={quote.id}>{quote.text}</li>
      ))}
    </ul>
  );
}
