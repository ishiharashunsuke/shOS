import { notFound } from "next/navigation";
import { movies } from "@/data/movies";
import { getMovieBySlug, getRelatedMovies } from "@/lib/movies";
import { AppWindow } from "@/components/os/AppWindow";
import { MovieDetail } from "@/components/movies/MovieDetail";
import { RelatedMovies } from "@/components/movies/RelatedMovies";

export function generateStaticParams() {
  return movies.map((movie) => ({ slug: movie.slug }));
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const movie = getMovieBySlug(slug);

  if (!movie) notFound();

  const related = getRelatedMovies(movie);

  return (
    <AppWindow title={movie.title} backHref="/movies" backLabel="Movies">
      <MovieDetail movie={movie} />
      <RelatedMovies movies={related} />
    </AppWindow>
  );
}
