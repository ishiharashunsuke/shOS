"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import type { DesktopApp } from "@/data/apps";
import { ComingSoonToast } from "./ComingSoonToast";

const TOAST_DURATION_MS = 1600;

export function AppIcon({ app, index }: { app: DesktopApp; index: number }) {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const Icon = app.icon;

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), TOAST_DURATION_MS);
    return () => clearTimeout(timer);
  }, [showToast]);

  function handleClick() {
    if (app.href) {
      router.push(app.href);
    } else {
      setShowToast(true);
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      className="group relative flex flex-col items-center gap-3"
    >
      <AnimatePresence>{showToast && <ComingSoonToast />}</AnimatePresence>
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.03] text-foreground/70 transition-colors group-hover:border-accent/40 group-hover:text-accent md:h-20 md:w-20">
        <Icon size={28} strokeWidth={1.5} />
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-foreground/80">
        {app.label}
      </span>
    </motion.button>
  );
}
