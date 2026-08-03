import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Breadcrumbs,
  ContentRenderer,
} from "@/components/content/ContentRenderer";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge, ButtonLink, Container } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { RatingBadge } from "@/components/seo/RatingBadge";
import {
  blogs,
  getAllBlogSlugs,
  getBlogBySlug,
} from "@/content/blogs";
import { DOWNLOAD_URL, SITE_NAME } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  return createMetadata({
    title: blog.title,
    description: blog.description,
    path: `/blogs/${blog.slug}`,
    keywords: blog.tags,
    type: "article",
    publishedTime: blog.publishedAt,
    modifiedTime: blog.updatedAt,
    image: "/gamepk.webp",
    imageAlt: "GamePK",
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const related = blogs
    .filter((item) => item.slug !== blog.slug)
    .filter(
      (item) =>
        item.category === blog.category ||
        item.tags.some((tag) => blog.tags.includes(tag)),
    )
    .slice(0, 3);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blogs" },
    { name: blog.title, path: `/blogs/${blog.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          articleJsonLd({
            title: blog.title,
            description: blog.description,
            path: `/blogs/${blog.slug}`,
            publishedAt: blog.publishedAt,
            updatedAt: blog.updatedAt,
            author: SITE_NAME,
            image: "/gamepk.webp",
            imageAlt: "GamePK",
            rating: blog.rating,
          }),
        ]}
      />

      <Container as="article" className="py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blogs" },
            { label: blog.title },
          ]}
        />

        <AnimateIn>
          <header className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{blog.category}</Badge>
              {blog.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="zinc">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {blog.title}
            </h1>
            <p className="mt-4 text-lg text-zinc-400">{blog.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
              <time dateTime={blog.publishedAt}>
                Published {blog.publishedAt}
              </time>
              <time dateTime={blog.updatedAt}>Updated {blog.updatedAt}</time>
            </div>
            <div className="mt-4">
              <RatingBadge
                ratingValue={blog.rating}
                ratingCount={1}
                label="Editorial game score"
              />
            </div>
          </header>
        </AnimateIn>

        <AnimateIn delay={80}>
          <div className="mx-auto mt-10 max-w-3xl">
            <ContentRenderer content={blog.content} />

            <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h2 className="text-xl font-semibold text-white">
                Ready to play on GamePK?
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Download the official APK, deposit with JazzCash or Easypaisa, and
                open this game from the lobby.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href="/download" className="btn-shimmer">
                  Download GamePK
                </ButtonLink>
                <ButtonLink href={DOWNLOAD_URL} external variant="secondary">
                  Direct APK Link
                </ButtonLink>
              </div>
            </div>
          </div>
        </AnimateIn>

        {related.length > 0 && (
          <section className="mx-auto mt-16 max-w-3xl" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-2xl font-bold text-white">
              Related GamePK guides
            </h2>
            <ul className="mt-5 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="text-red-400 hover:text-red-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </Container>
    </>
  );
}
