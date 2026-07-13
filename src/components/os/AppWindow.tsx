import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Shared "app window" chrome for Movies screens. The page-level fade/slide
 * transition itself lives in `app/template.tsx`, so this stays a plain wrapper.
 */
export function AppWindow({
  title,
  backHref,
  backLabel,
  children,
}: {
  title: string;
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen px-6 pt-28 pb-20 md:px-10">
      <div className="mb-10 flex items-center justify-between border-b border-foreground/10 pb-6">
        <Link
          href={backHref}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          {backLabel}
        </Link>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">{title}</span>
      </div>
      {children}
    </div>
  );
}
