"use client";

import type { InputHTMLAttributes } from "react";

/** Placeholder — no visual design yet, structure only. */
export function SearchInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="search" {...props} />;
}
