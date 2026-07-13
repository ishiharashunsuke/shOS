import { AppLayout } from "@/components/layout/AppLayout";

const TABS = [
  { label: "Drivers", href: "/f1/drivers" },
  { label: "Teams", href: "/f1/teams" },
  { label: "Circuits", href: "/f1/circuits" },
  { label: "Races", href: "/f1/races" },
];

export default function F1Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout title="F1" backHref="/" backLabel="Desktop" tabs={TABS}>
      {children}
    </AppLayout>
  );
}
