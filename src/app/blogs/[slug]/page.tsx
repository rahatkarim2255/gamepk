import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlogBySlug } from "@/content/blogs";
import {
  Breadcrumbs,
  ContentRenderer,
} from "@/components/content/ContentRenderer";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge, Container } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  return createMetadata({
    title: blog.title,
    description: blog.description,
    path: `/blogs/${slug}`,
    keywords: blog.tags,
    type: "article",
    publishedTime: blog.publishedAt,
    modifiedTime: blog.updatedAt,
    imageAlt: blog.imageAlt,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: blog.title, path: `/blogs/${slug}` },
  ];

  return (
    <Container as="article" className="py-16">
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          articleJsonLd({
            title: blog.title,
            description: blog.description,
            path: `/blogs/${slug}`,
            publishedAt: blog.publishedAt,
            updatedAt: blog.updatedAt,
            author: "GamePK Editorial",
            imageAlt: blog.imageAlt,
          }),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: blog.title },
        ]}
      />

      <header className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="accent">{blog.category}</Badge>
          <span className="text-sm text-zinc-500">★ {blog.rating}/5</span>
          <time dateTime={blog.updatedAt} className="text-sm text-zinc-500">
            Updated{" "}
            {new Date(blog.updatedAt).toLocaleDateString("en-PK", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {blog.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-400">{blog.description}</p>
      </header>

      <div className="mt-10 max-w-3xl">
        <ContentRenderer content={blog.content} />
      </div>

      <footer className="mt-12 max-w-3xl border-t border-zinc-800 pt-8">
        <p className="text-sm text-zinc-500">
          Tags:{" "}
          {blog.tags.map((tag) => (
            <span key={tag} className="mr-2">
              #{tag}
            </span>
          ))}
        </p>
      </footer>
    </Container>
  );
}
