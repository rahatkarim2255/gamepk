import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/content/blogs";
import {
  Badge,
  Card,
  Container,
  SectionHeading,
} from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FeaturedBlogs() {
  const featured = blogs.slice(0, 3);

  return (
    <section className="py-20" aria-labelledby="featured-blogs-heading">
      <Container>
        <AnimateIn>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              id="featured-blogs-heading"
              title="Latest GamePK Blogs"
              subtitle="SEO-friendly tips for Fortune Gems 3, Money Coming, Happy Fishing, and more."
            />
            <Link
              href="/blogs"
              className="shrink-0 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
            >
              View all blogs →
            </Link>
          </div>
        </AnimateIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((blog, i) => (
            <AnimateIn key={blog.slug} delay={i * 80}>
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
                  <h3 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-red-400">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
