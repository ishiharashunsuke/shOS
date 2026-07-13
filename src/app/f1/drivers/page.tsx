import { EmptyState } from "@/components/feedback/EmptyState";
import { getDrivers } from "@/features/f1";

export default function DriversPage() {
  const drivers = getDrivers();

  if (drivers.length === 0) return <EmptyState message="まだドライバーが登録されていません。" />;

  return (
    <ul>
      {drivers.map((driver) => (
        <li key={driver.slug}>{driver.name}</li>
      ))}
    </ul>
  );
}
