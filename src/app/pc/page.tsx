import type { Metadata } from "next";
import { blogs } from "@/content/blogs";
import { Badge, Card, Container, SectionHeading, ButtonLink } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { createMetadata } from "@/lib/metadata";
import { DOWNLOAD_URL } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "GamePK for PC — Play on Computer",
  description:
    "Play GamePK on PC via browser or emulator. Same JazzCash deposits, JILI slots, Fortune Gems 3, Money Coming, Happy Fishing and more for Pakistani players.",
  path: "/pc",
  keywords: ["GamePK PC", "GamePK computer", "GamePK browser", "play GamePK on PC"],
});

export default function PCPage() {
  const featured = blogs.slice(0, 6);

  return (
    <Container as="main" className="py-16">
      <AnimateIn>
        <SectionHeading
          title="Play GamePK on PC"
          subtitle="Open GamePK on your computer and enjoy the same hot games — Fortune Gems 3, Money Coming, Happy Fishing, and more."
        />
      </AnimateIn>

      <AnimateIn delay={80}>
        <div className="mt-8 max-w-3xl space-y-4 text-zinc-400 leading-relaxed">
          <p>
            Similar to other popular Pakistan gaming sites, GamePK works great beyond
            mobile. Use Chrome or Edge on PC for a bigger screen, easier mouse control,
            and longer sessions of slots or fishing games.
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
              Deposit &amp; withdraw with JazzCash / Easypaisa
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
              Same wallet and VIP rewards as mobile
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
              Ideal for JILI slots and fishing games
            </li>
          </ul>
          <div className="pt-2">
            <ButtonLink href={DOWNLOAD_URL} external className="btn-shimmer">
              Open GamePK
            </ButtonLink>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn>
        <h2 className="mt-14 text-2xl font-bold text-white">Popular games to try on PC</h2>
      </AnimateIn>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((blog, i) => (
          <AnimateIn key={blog.slug} delay={i * 60}>
            <Card href={`/blogs/${blog.slug}`}>
              <div className="flex items-center gap-2">
                <Badge variant="accent">{blog.category}</Badge>
                <span className="text-sm text-zinc-500">★ {blog.rating}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                {blog.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 line-clamp-3">{blog.excerpt}</p>
            </Card>
          </AnimateIn>
        ))}
      </div>
    </Container>
  );
}
