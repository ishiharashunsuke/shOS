"use client";

import { apps } from "@/data/apps";
import { AppIcon } from "./AppIcon";

export function Desktop() {
  return (
    <main className="flex min-h-screen flex-col justify-center px-6 pt-32 pb-16 md:px-10">
      <p className="mb-16 max-w-xl font-mono text-sm uppercase tracking-widest text-muted">
        Personal Operating System
      </p>
      <div className="grid grid-cols-3 gap-x-6 gap-y-12 sm:grid-cols-4 md:grid-cols-6">
        {apps.map((app, index) => (
          <AppIcon key={app.id} app={app} index={index} />
        ))}
      </div>
    </main>
  );
}
