import { EmptyState } from "@/components/feedback/EmptyState";
import { getAccountInfo } from "@/features/settings";

export default function AccountSettingsPage() {
  const account = getAccountInfo();

  if (!account) return <EmptyState message="アカウント情報はまだありません。" />;

  return <p>{account.email}</p>;
}
