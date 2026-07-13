import { EmptyState } from "@/components/feedback/EmptyState";
import { getCollections, getMoviesInCollection } from "@/features/movies";
import { CollectionBanner } from "@/features/movies/components/CollectionBanner";

export default function CollectionsPage() {
  const collections = getCollections();

  return (
    <div>
      <h1 className="font-display text-4xl italic md:text-5xl">Collections</h1>
      <p className="mt-3 max-w-md text-sm text-foreground/70">テーマごとに組まれた、特別な部屋。</p>

      <div className="mt-10 flex flex-col gap-6">
        {collections.length === 0 ? (
          <EmptyState message="まだコレクションがありません。" />
        ) : (
          collections.map((collection) => (
            <CollectionBanner
              key={collection.slug}
              collection={collection}
              movies={getMoviesInCollection(collection)}
            />
          ))
        )}
      </div>
    </div>
  );
}
