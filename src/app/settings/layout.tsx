import { AppLayout } from "@/components/layout/AppLayout";

const TABS = [
  { label: "Theme", href: "/settings" },
  { label: "Account", href: "/settings/account" },
  { label: "Preferences", href: "/settings/preferences" },
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout title="Settings" backHref="/" backLabel="Desktop" tabs={TABS}>
      {children}
    </AppLayout>
  );
}
