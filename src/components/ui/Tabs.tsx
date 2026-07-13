"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type TabItem = { label: string; href: string };

/** Active tab is derived from the current route, so callers never need to pass it in. */
export function Tabs({ items }: { items: TabItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Section navigation">
      <ul className="flex flex-wrap gap-4">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "font-mono text-xs uppercase tracking-widest text-accent"
                    : "font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
                }
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
