"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { apps } from "@/data/apps";

function useClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      setTime(new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }));
    }
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function TopBar() {
  const pathname = usePathname();
  const time = useClock();
  const activeApp = apps.find((app) => app.href && pathname.startsWith(app.href));

  // Themed apps (e.g. Movies) get their own museum-signage skin instead of
  // the OS-default mix-blend-difference bar, since they already swap
  // --background/--foreground via ThemeSync — a blend-mode bar would fight
  // with that instead of reading as part of the same room.
  const chrome = activeApp?.theme
    ? "border-b border-foreground/15 bg-background/70 backdrop-blur-sm"
    : "mix-blend-difference";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-colors duration-500 md:px-10 ${chrome}`}
    >
      <Link
        href="/"
        className="font-display text-lg font-semibold tracking-tight text-foreground"
      >
        shOS
      </Link>
      <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-foreground/80">
        {activeApp && <span>{activeApp.label}</span>}
        <span suppressHydrationWarning>{time}</span>
      </div>
    </header>
  );
}
