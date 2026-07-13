import type { Circuit, Driver, Race, Team } from "../types";

// Placeholder — structure only, no data source wired up yet.
// Telemetry intentionally has no service function here: per the architecture
// review, raw per-lap telemetry doesn't belong in a regular Postgres table
// (it's high-volume time-series data). When implemented, it should read
// summary rows from a `lap_summary` table, with raw data in Supabase Storage.

export function getDrivers(): Driver[] {
  return [];
}

export function getDriverBySlug(slug: string): Driver | undefined {
  return getDrivers().find((driver) => driver.slug === slug);
}

export function getTeams(): Team[] {
  return [];
}

export function getTeamBySlug(slug: string): Team | undefined {
  return getTeams().find((team) => team.slug === slug);
}

export function getCircuits(): Circuit[] {
  return [];
}

export function getCircuitBySlug(slug: string): Circuit | undefined {
  return getCircuits().find((circuit) => circuit.slug === slug);
}

export function getRaces(): Race[] {
  return [];
}

export function getRaceBySlug(slug: string): Race | undefined {
  return getRaces().find((race) => race.slug === slug);
}
