import Link from "next/link";

/** Placeholder — no visual design yet, structure only. */
export function Pagination({
  page,
  totalPages,
  basePath,
}: {
  page: number;
  totalPages: number;
  basePath: string;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination">
      <ul className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <Link href={`${basePath}?page=${n}`} aria-current={n === page ? "page" : undefined}>
              {n}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
