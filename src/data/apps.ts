import {
  Home,
  Film,
  Gauge,
  CircleDot,
  FlaskConical,
  BookOpen,
  NotebookPen,
  Boxes,
  UserRound,
  Settings,
} from "lucide-react";
import type { DesktopApp } from "@/types/apps";

/**
 * Single source of truth for every app shown on the Desktop
 * and referenced by TopBar for the current-app label.
 * Data only — no display/ordering logic belongs here (that's Desktop.tsx's job).
 */
export const apps: DesktopApp[] = [
  { id: "home", label: "Home", icon: Home, href: "/home" },
  { id: "movies", label: "Movies", icon: Film, href: "/movies", theme: "movies" },
  { id: "f1", label: "F1", icon: Gauge, href: "/f1" },
  { id: "football", label: "Football", icon: CircleDot, href: "/football" },
  { id: "ai-lab", label: "AI Lab", icon: FlaskConical, href: "/ai-lab" },
  { id: "books", label: "Books", icon: BookOpen, href: "/books" },
  { id: "journal", label: "Journal", icon: NotebookPen, href: "/journal" },
  { id: "projects", label: "Projects", icon: Boxes, href: "/projects" },
  { id: "about", label: "About", icon: UserRound, href: "/about" },
  { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
];
