"use client";

import { useEffect } from "react";
import { ButtonLink, Container } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="text-3xl font-bold text-white">Something went wrong</h1>
      <p className="mt-4 max-w-md text-zinc-400">
        Please try again. If the problem continues, refresh the page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500"
        >
          Try again
        </button>
        <ButtonLink href="/" variant="secondary">
          Go Home
        </ButtonLink>
      </div>
    </Container>
  );
}
