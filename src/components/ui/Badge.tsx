import type { HTMLAttributes } from "react";

/** Placeholder — no visual design yet, structure only. */
export function Badge({ children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span {...props}>{children}</span>;
}
