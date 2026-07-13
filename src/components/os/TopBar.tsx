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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 mix-blend-difference md:px-10">
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
