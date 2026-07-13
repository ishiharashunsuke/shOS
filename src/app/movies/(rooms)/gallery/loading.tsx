export default function Loading() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="aspect-[2/3] w-full animate-pulse bg-foreground/5" />
      ))}
    </div>
  );
}
