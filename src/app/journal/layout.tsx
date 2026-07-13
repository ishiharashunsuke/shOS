import { AppLayout } from "@/components/layout/AppLayout";

const TABS = [
  { label: "Timeline", href: "/journal" },
  { label: "Articles", href: "/journal/articles" },
  { label: "Notes", href: "/journal/notes" },
];

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout title="Journal" backHref="/" backLabel="Desktop" tabs={TABS}>
      {children}
    </AppLayout>
  );
}
