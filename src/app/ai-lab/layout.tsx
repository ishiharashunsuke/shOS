import { AppLayout } from "@/components/layout/AppLayout";

const TABS = [
  { label: "Chat", href: "/ai-lab/chat" },
  { label: "Prompts", href: "/ai-lab/prompts" },
  { label: "Experiments", href: "/ai-lab/experiments" },
];

export default function AiLabLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout title="AI Lab" backHref="/" backLabel="Desktop" tabs={TABS}>
      {children}
    </AppLayout>
  );
}
