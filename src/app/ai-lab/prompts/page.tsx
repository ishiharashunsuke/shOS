import { EmptyState } from "@/components/feedback/EmptyState";
import { getPrompts } from "@/features/ai-lab";

export default function PromptsPage() {
  const prompts = getPrompts();

  if (prompts.length === 0) return <EmptyState message="まだプロンプトがありません。" />;

  return (
    <ul>
      {prompts.map((prompt) => (
        <li key={prompt.id}>{prompt.title}</li>
      ))}
    </ul>
  );
}
