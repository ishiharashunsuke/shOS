import { notFound } from "next/navigation";
import { AppWindow } from "@/components/os/AppWindow";
import { getMovies, getMovieBySlug, getRelatedMovies } from "@/features/movies";
import { MovieDetail } from "@/features/movies/components/MovieDetail";
import { RelatedMovies } from "@/features/movies/components/RelatedMovies";

export function generateStaticParams() {
  return getMovies().map((movie) => ({ slug: movie.slug }));
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
    <AppWindow title={movie.title} backHref="/movies/gallery" backLabel="Gallery">
      <MovieDetail movie={movie} />
      <RelatedMovies movies={related} />
    </AppWindow>
  );
}
