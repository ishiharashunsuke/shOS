import Link from "next/link";

export type SidebarItem = { label: string; href: string };

/** Placeholder — opt-in per-app secondary navigation. No visual design yet. */
export function Sidebar({ items }: { items: SidebarItem[] }) {
  return (
    <aside>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
