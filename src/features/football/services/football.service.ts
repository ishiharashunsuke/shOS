import type { Analysis, Formation, Player, Team } from "../types";

// Placeholder — structure only, no data source wired up yet.

export function getPlayers(): Player[] {
  return [];
}

export function getPlayerBySlug(slug: string): Player | undefined {
  return getPlayers().find((player) => player.slug === slug);
}

export function getTeams(): Team[] {
  return [];
}

export function getTeamBySlug(slug: string): Team | undefined {
  return getTeams().find((team) => team.slug === slug);
}

export function getFormations(): Formation[] {
  return [];
}

export function getAnalyses(): Analysis[] {
  return [];
}

export function getAnalysisBySlug(slug: string): Analysis | undefined {
  return getAnalyses().find((analysis) => analysis.slug === slug);
}
