import { EmptyState } from "@/components/feedback/EmptyState";
import { getSkills } from "@/features/about";

export default function SkillsPage() {
  const skills = getSkills();

  if (skills.length === 0) return <EmptyState message="まだスキルが登録されていません。" />;

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>{skill.name}</li>
      ))}
    </ul>
  );
}
