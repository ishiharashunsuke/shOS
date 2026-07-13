import type { ButtonHTMLAttributes } from "react";

/** Placeholder — no visual design yet, structure/behavior only. */
export function Button({ children, type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}
