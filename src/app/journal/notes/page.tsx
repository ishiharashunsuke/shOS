import { EmptyState } from "@/components/feedback/EmptyState";
import { getNotes } from "@/features/journal";

export default function NotesPage() {
  const notes = getNotes();

  if (notes.length === 0) return <EmptyState message="まだノートがありません。" />;

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}
