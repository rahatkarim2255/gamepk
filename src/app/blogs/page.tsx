import type { Metadata } from "next";
import { blogs } from "@/content/blogs";
import { Badge, Card, Container, SectionHeading } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blogs",
  description:
    "GamePK blogs on Fortune Gems 3, Money Coming, Happy Fishing, Genie's 3 Wishes, Super Ace, and more JILI slots for Pakistani players.",
  path: "/blogs",
  keywords: ["GamePK blogs", "JILI slots", "Fortune Gems 3", "Happy Fishing", "Money Coming"],
});

export default function BlogsPage() {
  return (
    <Container as="main" className="py-16">
      <SectionHeading
        title="Gaming Blogs"
        subtitle="Guides for the hottest GamePK games — Fortune Gems 3, Money Coming, Happy Fishing, JILI slots, and more."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card key={blog.slug} href={`/blogs/${blog.slug}`}>
            <div className="flex items-center gap-2">
              <Badge variant="accent">{blog.category}</Badge>
              <span className="text-sm text-zinc-500">★ {blog.rating}</span>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
              {blog.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-400 line-clamp-3">
              {blog.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {blog.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs text-zinc-500">
                  #{tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
