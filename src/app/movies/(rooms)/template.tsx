"use client";

import { motion } from "motion/react";

/**
 * Room-to-room movement inside Movies gets its own heavier, foggier
 * transition than the OS-default fade (app/template.tsx) — nests inside it.
 */
export default function MoviesRoomsTemplate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
