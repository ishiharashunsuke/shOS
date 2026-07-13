import { EmptyState } from "@/components/feedback/EmptyState";
import { getChatById } from "@/features/ai-lab";

export default async function ChatDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chat = getChatById(id);

  if (!chat) return <EmptyState message="このチャットはまだありません。" />;

  return <h1>{chat.title}</h1>;
}
