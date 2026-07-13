// TMDB integration is not implemented yet — movie data is static for now (see src/data/movies.ts).
export async function GET() {
  return new Response("Not implemented", { status: 501 });
}
