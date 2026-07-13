import { AppLayout } from "@/components/layout/AppLayout";

const TABS = [
  { label: "Gallery", href: "/movies/gallery" },
  { label: "Collections", href: "/movies/collections" },
  { label: "Journal", href: "/movies/journal" },
  { label: "Directors", href: "/movies/directors" },
  { label: "Genres", href: "/movies/genres" },
  { label: "Timeline", href: "/movies/timeline" },
];

export default function MoviesRoomsLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout title="Movies" backHref="/movies" backLabel="Entrance" tabs={TABS}>
      {children}
    </AppLayout>
  );
}
