import { EmptyState } from "@/components/feedback/EmptyState";
import { getTeams } from "@/features/football";

export default function TeamsPage() {
  const teams = getTeams();

  if (teams.length === 0) return <EmptyState message="まだチームが登録されていません。" />;

  return (
    <ul>
      {teams.map((team) => (
        <li key={team.slug}>{team.name}</li>
      ))}
    </ul>
  );
}
