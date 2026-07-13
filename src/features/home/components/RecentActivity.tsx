import Link from "next/link";
import { EmptyState } from "@/components/feedback/EmptyState";
import type { ActivityItem } from "../types";

/** Placeholder — no visual design yet, structure only. */
export function RecentActivity({ items }: { items: ActivityItem[] }) {
  if (items.length === 0) return <EmptyState message="まだアクティビティがありません。" />;

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="flex items-baseline justify-between gap-4">
            <span>{item.label}</span>
            <span className="font-mono text-xs text-muted">{item.meta}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
