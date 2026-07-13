import { EmptyState } from "@/components/feedback/EmptyState";
import { getChats } from "@/features/ai-lab";

export default function ChatListPage() {
  const chats = getChats();

  if (chats.length === 0) return <EmptyState message="まだチャットがありません。" />;

  return (
    <ul>
      {chats.map((chat) => (
        <li key={chat.id}>{chat.title}</li>
      ))}
    </ul>
  );
}
