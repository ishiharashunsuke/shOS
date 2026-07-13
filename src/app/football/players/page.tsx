import { EmptyState } from "@/components/feedback/EmptyState";
import { getPlayers } from "@/features/football";

export default function PlayersPage() {
  const players = getPlayers();

  if (players.length === 0) return <EmptyState message="まだ選手が登録されていません。" />;

  return (
    <ul>
      {players.map((player) => (
        <li key={player.slug}>{player.name}</li>
      ))}
    </ul>
  );
}
