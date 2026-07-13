import { AppLayout } from "@/components/layout/AppLayout";

const TABS = [
  { label: "Players", href: "/football/players" },
  { label: "Teams", href: "/football/teams" },
  { label: "Formations", href: "/football/formations" },
  { label: "Analysis", href: "/football/analysis" },
];

export default function FootballLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout title="Football" backHref="/" backLabel="Desktop" tabs={TABS}>
      {children}
    </AppLayout>
  );
}
