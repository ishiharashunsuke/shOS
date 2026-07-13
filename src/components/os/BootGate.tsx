"use client";

import { useState } from "react";
import { BootScreen } from "./BootScreen";

/**
 * Plays the boot sequence on every full page load (state is not persisted),
 * then reveals the app shell. Client-side navigation never remounts this,
 * so moving between Desktop and apps doesn't re-trigger the boot.
 */
export function BootGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return <BootScreen onComplete={() => setReady(true)} />;
  }

  return <>{children}</>;
}
