import { AppWindow } from "@/components/os/AppWindow";
import { EmptyState } from "@/components/feedback/EmptyState";
import { getProjects } from "@/features/projects";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <AppWindow title="Projects" backHref="/" backLabel="Desktop">
      {projects.length === 0 ? (
        <EmptyState message="まだプロジェクトが登録されていません。" />
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.slug}>{project.title}</li>
          ))}
        </ul>
      )}
    </AppWindow>
  );
}
