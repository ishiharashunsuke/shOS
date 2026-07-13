import {
  Film,
  Boxes,
  FlaskConical,
  Newspaper,
  UserRound,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";

export type DesktopApp = {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Present when the app is actually navigable. */
  href?: string;
  /** Shown as a coming-soon icon when no href is set. */
  comingSoon?: boolean;
};

/**
 * Single source of truth for every app shown on the Desktop
 * and referenced by TopBar for the current-app label.
 */
export const apps: DesktopApp[] = [
  { id: "movies", label: "Movies", icon: Film, href: "/movies" },
  { id: "projects", label: "Projects", icon: Boxes, comingSoon: true },
  { id: "lab", label: "Lab", icon: FlaskConical, comingSoon: true },
  { id: "blog", label: "Blog", icon: Newspaper, comingSoon: true },
  { id: "about", label: "About", icon: UserRound, comingSoon: true },
  { id: "terminal", label: "Terminal", icon: SquareTerminal, comingSoon: true },
];
