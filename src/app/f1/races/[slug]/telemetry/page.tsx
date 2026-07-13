import { EmptyState } from "@/components/feedback/EmptyState";

// Telemetry intentionally has no data layer yet — see features/f1/services/f1.service.ts
// for why raw per-lap telemetry needs a different storage strategy than a normal table.
export default function TelemetryPage() {
  return <EmptyState message="テレメトリ機能は未実装です。" />;
}
