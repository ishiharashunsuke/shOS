import type { AccountInfo, Preferences } from "../types";

// Placeholder — Settings is expected to stay mostly client-side (e.g. theme in
// localStorage) rather than Supabase-backed, since this is a single-user site.
// This service exists for structural symmetry with the other features.

export function getAccountInfo(): AccountInfo | undefined {
  return undefined;
}

export function getPreferences(): Preferences {
  return { theme: "system" };
}
