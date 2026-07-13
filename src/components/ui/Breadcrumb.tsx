import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

/** Placeholder — no visual design yet, structure only. */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex gap-2">
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
