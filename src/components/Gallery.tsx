import { useState } from "react";

interface GalleryProps {
  imageUrls: string[];
  title: string;
  /** The media is of the genuine article, so a failed check must not let it
   *  read as a picture of the thing in the customer's hand. */
  muted?: boolean;
}

// A tag carries plain URLs with no media type, so the extension is all there is
// to go on.
const isVideo = (url: string) => /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(url);

const Gallery = ({ imageUrls, title, muted = false }: GalleryProps) => {
  const [selected, setSelected] = useState(0);
  const [broken, setBroken] = useState<Set<string>>(new Set());

  // A counterfeit gets no brand film. Nothing here should invite a customer to
  // press play on a product that just failed its check.
  const media = imageUrls
    .filter((url) => !(muted && isVideo(url)))
    .filter((url) => !broken.has(url));

  if (media.length === 0) return null;

  const current = media[Math.min(selected, media.length - 1)] as string;
  const markBroken = (url: string) => setBroken((previous) => new Set(previous).add(url));
  const tone = muted ? "opacity-60 grayscale blur-[3px]" : "";

  return (
    <div className="animate-fade-in space-y-3">
      <div className="aspect-square overflow-hidden rounded bg-card">
        {isVideo(current) ? (
          <video
            key={current}
            src={current}
            controls
            playsInline
            preload="metadata"
            onError={() => markBroken(current)}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={current}
            alt={title}
            onError={() => markBroken(current)}
            className={`h-full w-full object-cover ${tone}`}
          />
        )}
      </div>

      {media.length > 1 && (
        <div className="flex flex-wrap gap-3">
          {media.map((url, index) => (
            <button
              key={url}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`${title}, ${isVideo(url) ? "video" : "image"} ${index + 1}`}
              aria-current={url === current}
              className={`aspect-square w-20 overflow-hidden rounded border transition-colors ${
                url === current ? "border-accent" : "border-border hover:border-accent/50"
              }`}
            >
              {isVideo(url) ? (
                <video src={url} preload="metadata" muted className="h-full w-full object-cover" />
              ) : (
                <img
                  src={url}
                  alt=""
                  onError={() => markBroken(url)}
                  className={`h-full w-full object-cover ${tone}`}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {muted && (
        <p className="font-body text-sm text-muted-foreground">
          These pictures show the genuine product, not the one you have.
        </p>
      )}
    </div>
  );
};

export default Gallery;
