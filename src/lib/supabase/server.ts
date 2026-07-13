// Placeholder — no Supabase project is connected yet.
//
// Once one exists: `npm i @supabase/ssr @supabase/supabase-js`, add
// NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local,
// then implement this using `createServerClient` from "@supabase/ssr"
// (cookies() from "next/headers") for use in Server Components / Actions.

export function createServerSupabaseClient(): never {
  throw new Error("Supabase is not configured yet. See src/lib/supabase/server.ts.");
}
