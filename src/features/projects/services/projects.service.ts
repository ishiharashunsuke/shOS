import type { Project } from "../types";

// Placeholder — structure only, no data source wired up yet.

export function getProjects(): Project[] {
  return [];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}
