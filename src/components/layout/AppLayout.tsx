import { AppWindow } from "@/components/os/AppWindow";
import { Tabs, type TabItem } from "@/components/ui/Tabs";

/**
 * Shared shell for any app with 2+ sub-routes: renders the OS window chrome
 * once (via AppWindow) plus an optional tab bar. Apps with 0-1 sub-routes
 * don't need this — just use AppWindow directly in the page.
 */
export function AppLayout({
  title,
  backHref,
  backLabel,
  tabs,
  children,
}: {
  title: string;
  backHref: string;
  backLabel: string;
  tabs?: TabItem[];
  children: React.ReactNode;
}) {
  const showTabs = tabs && tabs.length > 1;

  return (
    <AppWindow title={title} backHref={backHref} backLabel={backLabel}>
      {showTabs && <Tabs items={tabs} />}
      <div className={showTabs ? "mt-8" : undefined}>{children}</div>
    </AppWindow>
  );
}
