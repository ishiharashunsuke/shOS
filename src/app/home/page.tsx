import { AppWindow } from "@/components/os/AppWindow";
import { getRecentActivity, getWidgets } from "@/features/home";
import { DashboardWidgets } from "@/features/home/components/DashboardWidgets";
import { RecentActivity } from "@/features/home/components/RecentActivity";

export default function HomePage() {
  const widgets = getWidgets();
  const recentActivity = getRecentActivity();

  return (
    <AppWindow title="Home" backHref="/" backLabel="Desktop">
      <h1 className="font-display text-[13vw] leading-none tracking-tight md:text-[6vw]">
        Home
      </h1>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Widgets</h2>
        <div className="mt-4">
          <DashboardWidgets widgets={widgets} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Recent Activity
        </h2>
        <div className="mt-4">
          <RecentActivity items={recentActivity} />
        </div>
      </section>
    </AppWindow>
  );
}
