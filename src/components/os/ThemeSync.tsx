"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { apps } from "@/data/apps";

/**
 * Applies the active app's theme (if any) to `<body data-theme>`, which
 * globals.css uses to override --background/--foreground/--accent/--grain.
 * Lives once in RootLayout, outside the per-route content, so it can reach
 * TopBar too (TopBar is a sibling of the routed page, not a descendant).
 */
export function ThemeSync() {
  const pathname = usePathname();

  useEffect(() => {
    const activeApp = apps.find((app) => app.href && pathname.startsWith(app.href));

    if (activeApp?.theme) {
      document.body.dataset.theme = activeApp.theme;
    } else {
      delete document.body.dataset.theme;
    }

    return () => {
      delete document.body.dataset.theme;
    };
  }, [pathname]);

  return null;
}
