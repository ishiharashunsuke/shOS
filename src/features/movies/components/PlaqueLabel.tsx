/** The "engraved brass plaque" strip — a bordered, letter-spaced mono label used for metadata throughout Movies. */
export function PlaqueLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 border-y border-foreground/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
