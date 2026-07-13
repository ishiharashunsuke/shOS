import { AppLayout } from "@/components/layout/AppLayout";

const TABS = [
  { label: "Library", href: "/books" },
  { label: "Quotes", href: "/books/quotes" },
];

export default function BooksLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout title="Books" backHref="/" backLabel="Desktop" tabs={TABS}>
      {children}
    </AppLayout>
  );
}
