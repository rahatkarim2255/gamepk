import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/content/ContentRenderer";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge, Card, Container } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { blogs } from "@/content/blogs";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

type BlogsPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export const metadata: Metadata = createMetadata({
  title: "GamePK Blogs — Slots, Fishing & Hot Game Guides",
  description:
    "GamePK blogs for Pakistani players: Fortune Gems 3, Money Coming, Happy Fishing, Super Ace, and more JILI slot tips with JazzCash & Easypaisa context.",
  path: "/blogs",
  keywords: [
    "GamePK blog",
    "GamePK guides",
    "Fortune Gems 3 guide",
    "JILI slots Pakistan",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blogs" },
];

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { q } = await searchParams;
  const query = (q ?? "").trim().toLowerCase();

  const filtered = query
    ? blogs.filter((blog) => {
        const haystack = [
          blog.title,
          blog.description,
          blog.excerpt,
          blog.category,
          ...blog.tags,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
    : blogs;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          webPageJsonLd({
            title: "GamePK Blogs — Slots, Fishing & Hot Game Guides",
            description:
              "SEO guides for GamePK games popular with Pakistani players.",
            path: "/blogs",
          }),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "GamePK Blogs",
            url: "https://gamepk.net.pk/blogs",
            hasPart: filtered.map((blog) => ({
              "@type": "Article",
              headline: blog.title,
              url: `https://gamepk.net.pk/blogs/${blog.slug}`,
              datePublished: blog.publishedAt,
              dateModified: blog.updatedAt,
            })),
          },
        ]}
      />

      <Container as="article" className="py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />

        <AnimateIn>
          <header className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              GamePK <span className="text-red-400">Blogs</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Guides for hot games, JILI slots, and fishing titles on GamePK —
              written for Pakistani players who deposit with JazzCash &amp; Easypaisa.
            </p>
          </header>
        </AnimateIn>

        <AnimateIn delay={60}>
          <form action="/blogs" method="get" className="mt-8 max-w-xl" role="search">
            <label htmlFor="blog-search" className="sr-only">
              Search GamePK blogs
            </label>
            <div className="flex gap-2">
              <input
                id="blog-search"
                name="q"
                type="search"
                defaultValue={q ?? ""}
                placeholder="Search Fortune Gems, Happy Fishing..."
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500"
              >
                Search
              </button>
            </div>
          </form>
        </AnimateIn>

        {query && (
          <p className="mt-6 text-sm text-zinc-500">
            Showing {filtered.length} result{filtered.length === 1 ? "" : "s"} for
            &quot;{q}&quot;.{" "}
            <Link href="/blogs" className="text-red-400 hover:text-red-300">
              Clear search
            </Link>
          </p>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((blog, i) => (
            <AnimateIn key={blog.slug} delay={i * 50}>
              <Card href={`/blogs/${blog.slug}`} padded={false} className="h-full overflow-hidden">
                <div className="relative aspect-video overflow-hidden bg-zinc-950">
                  <Image
                    src={blog.image}
                    alt={blog.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="accent">{blog.category}</Badge>
                    <span className="text-sm text-zinc-500">★ {blog.rating}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-red-400">
                    {blog.title}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <time
                    dateTime={blog.updatedAt}
                    className="mt-4 block text-xs text-zinc-500"
                  >
                    Updated {blog.updatedAt}
                  </time>
                </div>
              </Card>
            </AnimateIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-zinc-400">
            No blogs matched your search. Try another keyword or{" "}
            <Link href="/blogs" className="text-red-400 hover:text-red-300">
              browse all guides
            </Link>
            .
          </p>
        )}
      </Container>
    </>
  );
}
