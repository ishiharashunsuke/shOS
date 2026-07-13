import type { Chat, Experiment, Prompt } from "../types";

// Placeholder — structure only. Chat will eventually call the shared
// "@/services/ai.service" LLM client wrapper rather than a provider SDK directly.

export function getChats(): Chat[] {
  return [];
}

export function getChatById(id: string): Chat | undefined {
  return getChats().find((chat) => chat.id === id);
}

export function getPrompts(): Prompt[] {
  return [];
}

export function getExperiments(): Experiment[] {
  return [];
}
