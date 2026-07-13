import { EmptyState } from "@/components/feedback/EmptyState";
import { getBooks } from "@/features/books";

export default function BooksPage() {
  const books = getBooks();

  if (books.length === 0) return <EmptyState message="まだ本が登録されていません。" />;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.slug}>{book.title}</li>
      ))}
    </ul>
  );
}
