/** Placeholder — shown when a list/collection has no items yet. */
export function EmptyState({ message = "まだデータがありません。" }: { message?: string }) {
  return <p>{message}</p>;
}
