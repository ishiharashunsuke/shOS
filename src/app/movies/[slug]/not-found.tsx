import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">404</p>
      <h1 className="font-display text-3xl">この映画は見つかりませんでした</h1>
      <Link
        href="/movies"
        className="mt-4 font-mono text-xs uppercase tracking-widest text-accent hover:underline"
      >
        ← Movies に戻る
      </Link>
    </div>
  );
}
