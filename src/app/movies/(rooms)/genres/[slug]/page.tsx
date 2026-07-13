import { notFound } from "next/navigation";
import { getGenres, getMoviesByGenreSlug } from "@/features/movies";
import { MovieGrid } from "@/features/movies/components/MovieGrid";

export function generateStaticParams() {
  return getGenres().map((genre) => ({ slug: genre.slug }));
}

export default async function GenreDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const movies = getMoviesByGenreSlug(slug);
  const genre = getGenres().find((g) => g.slug === slug);

  if (!genre || movies.length === 0) notFound();

  return (
    <div>
      <h1 className="font-display text-4xl italic md:text-5xl">{genre.name} Wing</h1>
      <div className="mt-12">
        <MovieGrid movies={movies} />
      </div>
    </div>
  );
}
