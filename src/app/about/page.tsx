import { EmptyState } from "@/components/feedback/EmptyState";
import { getProfile } from "@/features/about";

export default function ProfilePage() {
  const profile = getProfile();

  if (!profile) return <EmptyState message="プロフィールはまだ準備中です。" />;

  return <h1>{profile.name}</h1>;
}
