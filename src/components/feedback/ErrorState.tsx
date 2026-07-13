"use client";

/** Placeholder — used by route-level error.tsx files across all apps. */
export function ErrorState({
  message = "エラーが発生しました。",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div role="alert">
      <p>{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry}>
          再試行
        </button>
      )}
    </div>
  );
}
