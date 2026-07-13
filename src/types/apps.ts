import type { LucideIcon } from "lucide-react";

export type DesktopApp = {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Present when the app is actually navigable. */
  href?: string;
  /** Shown as a coming-soon icon when no href is set. */
  comingSoon?: boolean;
  /**
   * Matches a `body[data-theme="<value>"]` block in globals.css. When set,
   * ThemeSync applies it while any of this app's routes are active, swapping
   * the OS's shared background/foreground/accent/grain for the app's own.
   */
  theme?: string;
};
