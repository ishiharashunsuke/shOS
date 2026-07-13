export default function Loading() {
  return (
    <div className="min-h-screen px-6 pt-28 pb-20 md:px-10">
      <div className="mb-16 h-10 w-40 animate-pulse rounded bg-foreground/5" />
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="aspect-[2/3] w-full animate-pulse bg-foreground/5" />
        ))}
      </div>
    </div>
  );
}
