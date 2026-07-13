import { AppLayout } from "@/components/layout/AppLayout";

const TABS = [
  { label: "Profile", href: "/about" },
  { label: "Career", href: "/about/career" },
  { label: "Skills", href: "/about/skills" },
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout title="About" backHref="/" backLabel="Desktop" tabs={TABS}>
      {children}
    </AppLayout>
  );
}
