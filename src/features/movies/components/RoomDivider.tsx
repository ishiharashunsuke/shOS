/** A quiet section break — used between Movie Detail sections and Gallery decade groupings. */
export function RoomDivider({ label }: { label?: string }) {
  return (
    <div className="my-10 flex items-center gap-4 text-muted" role="separator">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
      {label && <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{label}</span>}
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
    </div>
  );
}
