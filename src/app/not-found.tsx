import Link from "next/link";
import { Container, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center">
      <p className="text-6xl font-black text-red-600">404</p>
      <h1 className="mt-4 text-3xl font-bold text-white">Page Not Found</h1>
      <p className="mt-4 max-w-md text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist on GamePK. Head back home
        or explore our blogs.
      </p>
      <div className="mt-8 flex gap-4">
        <ButtonLink href="/">Go Home</ButtonLink>
        <Link
          href="/blogs"
          className="inline-flex items-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 hover:bg-zinc-800"
        >
          Browse Blogs
        </Link>
      </div>
    </Container>
  );
}
