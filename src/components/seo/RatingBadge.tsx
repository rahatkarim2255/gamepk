import { getAppEditorialRating } from "@/lib/ratings";

export function RatingBadge({
  ratingValue,
  ratingCount,
  label = "Editorial score",
  className = "",
}: {
  ratingValue: number;
  ratingCount: number;
  label?: string;
  className?: string;
}) {
  const fullStars = Math.floor(ratingValue);
  const hasHalf = ratingValue - fullStars >= 0.5;

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 ${className}`}
      aria-label={`${label}: ${ratingValue} out of 5 from ${ratingCount} guide reviews`}
    >
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < fullStars || (i === fullStars && hasHalf);
          return (
            <span
              key={i}
              className={filled ? "text-amber-400" : "text-zinc-600"}
            >
              ★
            </span>
          );
        })}
      </div>
      <p className="text-sm text-zinc-200">
        <span className="font-semibold text-white">{ratingValue}</span>
        <span className="text-zinc-500"> / 5</span>
        <span className="mx-1.5 text-zinc-600">·</span>
        <span className="text-zinc-400">{label}</span>
        <span className="mx-1.5 text-zinc-600">·</span>
        <span className="text-zinc-400">
          {ratingCount} guide review{ratingCount === 1 ? "" : "s"}
        </span>
      </p>
    </div>
  );
}

export function AppRatingBadge({ className = "" }: { className?: string }) {
  const rating = getAppEditorialRating();
  return (
    <RatingBadge
      ratingValue={rating.ratingValue}
      ratingCount={rating.ratingCount}
      label={rating.label}
      className={className}
    />
  );
}
