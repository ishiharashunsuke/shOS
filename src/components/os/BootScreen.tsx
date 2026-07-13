"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const LINES = [
  "Booting shOS…",
  "Loading Modules…",
  "✓ Profile",
  "✓ Movies",
  "✓ Projects",
  "✓ Lab",
  "Welcome.",
];

const LINE_DELAY_MS = 320;
const HOLD_AFTER_LAST_MS = 700;

export function BootScreen({ onComplete }: { onComplete: () => void }) {
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(reduceMotion ? LINES.length : 0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    if (visibleCount >= LINES.length) {
      const timer = setTimeout(finish, HOLD_AFTER_LAST_MS);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setVisibleCount((count) => count + 1), LINE_DELAY_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      const timer = setTimeout(finish, 400);
      return () => clearTimeout(timer);
    }
  }, [reduceMotion]);

  useEffect(() => {
    function skip(event: KeyboardEvent) {
      if (event.key === "Enter" || event.key === " ") finish();
    }
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, []);

  function finish() {
    setExiting(true);
    setTimeout(onComplete, 400);
  }

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Skip boot sequence"
      onClick={finish}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] flex cursor-pointer flex-col justify-center bg-background px-6 md:px-10"
    >
      <div className="mx-auto w-full max-w-md font-mono text-sm text-muted">
        <AnimatePresence>
          {LINES.slice(0, visibleCount).map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={
                index === LINES.length - 1
                  ? "mt-4 text-foreground"
                  : line.startsWith("✓")
                    ? "text-foreground/80"
                    : "text-muted"
              }
            >
              {line}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>
      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-widest text-muted/60">
        Press Enter to skip
      </span>
    </motion.div>
  );
}
