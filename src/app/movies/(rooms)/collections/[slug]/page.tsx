import { notFound } from "next/navigation";
import { getCollectionBySlug, getCollections, getMoviesInCollection } from "@/features/movies";
import { MovieGrid } from "@/features/movies/components/MovieGrid";

export function generateStaticParams() {
  return getCollections().map((collection) => ({ slug: collection.slug }));
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) notFound();

  const movies = getMoviesInCollection(collection);

  return (
    <div>
      <h1 className="font-display text-4xl italic md:text-5xl">{collection.title}</h1>
      <p className="mt-3 max-w-md text-sm text-foreground/70">{collection.curatorNote}</p>
      <div className="mt-12">
        <MovieGrid movies={movies} />
      </div>
    </div>
  );
}
