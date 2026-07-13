import { getPreferences } from "@/features/settings";

export default function PreferencesPage() {
  const preferences = getPreferences();

  return <p>Theme: {preferences.theme}</p>;
}
