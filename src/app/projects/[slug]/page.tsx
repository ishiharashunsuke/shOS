import { AppWindow } from "@/components/os/AppWindow";
import { EmptyState } from "@/components/feedback/EmptyState";
import { getProjectBySlug } from "@/features/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return (
    <AppWindow title={project?.title ?? "Project"} backHref="/projects" backLabel="Projects">
      {project ? <h1>{project.title}</h1> : <EmptyState message="このプロジェクトはまだ登録されていません。" />}
    </AppWindow>
  );
}
