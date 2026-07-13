import { notFound } from "next/navigation";
import { getDirectors, getMoviesByDirectorSlug } from "@/features/movies";
import { MovieGrid } from "@/features/movies/components/MovieGrid";

export function generateStaticParams() {
  return getDirectors().map((director) => ({ slug: director.slug }));
}

export default async function DirectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const movies = getMoviesByDirectorSlug(slug);

  if (movies.length === 0) notFound();

  return (
    <div>
      <h1 className="font-display text-4xl italic md:text-5xl">{movies[0].director}</h1>
      <div className="mt-12">
        <MovieGrid movies={movies} />
      </div>
    </div>
  );
}
