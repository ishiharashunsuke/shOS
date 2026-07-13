"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function DoorwayTile({
  href,
  label,
  description,
  index,
}: {
  href: string;
  label: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={href}
        className="group block border border-foreground/15 px-6 py-8 transition-colors hover:border-accent/50"
      >
        <span className="font-display text-2xl italic text-foreground transition-colors group-hover:text-accent">
          {label}
        </span>
        <p className="mt-2 font-mono text-xs text-muted">{description}</p>
      </Link>
    </motion.div>
  );
}
