// Placeholder — shared LLM client wrapper, meant to be used by AI Lab AND
// any future AI features in other apps (movie recs, journal summaries, etc).
// This file only ever wraps an I/O client — it must not hold feature-specific
// business logic (that belongs in each feature's own service).

export function generateText(prompt: string): never {
  void prompt;
  throw new Error("AI service is not configured yet. See src/services/ai.service.ts.");
}
