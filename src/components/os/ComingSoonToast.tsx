"use client";

import { motion } from "motion/react";

export function ComingSoonToast() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 4, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 4, scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-foreground/10 bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted shadow-lg"
    >
      Coming soon
    </motion.span>
  );
}
