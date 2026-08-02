"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-PK">
      <body className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col items-center justify-center gap-4 p-6">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="max-w-md text-center text-sm text-zinc-400">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
