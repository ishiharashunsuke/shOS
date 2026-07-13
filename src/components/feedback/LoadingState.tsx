/** Placeholder — used by route-level loading.tsx files across all apps. */
export function LoadingState({ label = "Loading…" }: { label?: string }) {
  return <p role="status">{label}</p>;
}
