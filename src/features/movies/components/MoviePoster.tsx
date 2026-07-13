import Image from "next/image";
import { PosterFallback } from "./PosterFallback";

export function MoviePoster({
  poster,
  title,
  className,
}: {
  poster?: string;
  title: string;
  className?: string;
}) {
  if (poster) {
    return (
      <Image
        src={poster}
        alt={title}
        width={400}
        height={600}
        className={`aspect-[2/3] w-full object-cover ${className ?? ""}`}
      />
    );
  }

  return <PosterFallback title={title} className={className} />;
}
