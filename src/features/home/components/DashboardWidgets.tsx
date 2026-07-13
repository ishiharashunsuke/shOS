import type { Widget } from "../types";

/** Placeholder — no visual design yet, structure only. */
export function DashboardWidgets({ widgets }: { widgets: Widget[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {widgets.map((widget) => (
        <li key={widget.id}>{widget.title}</li>
      ))}
    </ul>
  );
}
