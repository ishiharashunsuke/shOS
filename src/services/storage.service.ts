// Placeholder — shared Supabase Storage wrapper (posters, avatars, telemetry
// files, etc). I/O adapter only — no feature-specific logic here.

export function uploadFile(path: string, file: Blob): never {
  void path;
  void file;
  throw new Error("Storage service is not configured yet. See src/services/storage.service.ts.");
}
