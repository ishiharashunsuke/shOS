export default function Loading() {
  return (
    <div className="min-h-screen px-6 pt-28 pb-20 md:px-10">
      <div className="mb-10 h-6 w-24 animate-pulse rounded bg-foreground/5" />
      <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        <div className="aspect-[2/3] w-full max-w-xs animate-pulse bg-foreground/5" />
        <div className="space-y-4">
          <div className="h-10 w-2/3 animate-pulse rounded bg-foreground/5" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-foreground/5" />
        </div>
      </div>
    </div>
  );
}
