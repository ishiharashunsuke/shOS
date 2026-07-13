import type { HTMLAttributes } from "react";

/** Placeholder — no visual design yet, structure only. */
export function Card({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}
