import { blogs } from "@/content/blogs";

/** Editorial ratings derived from published GamePK game guides (visible on-site). */
export function getAppEditorialRating() {
  const count = blogs.length;
  const sum = blogs.reduce((acc, blog) => acc + blog.rating, 0);
  const average = Math.round((sum / count) * 10) / 10;

  return {
    ratingValue: average,
    ratingCount: count,
    bestRating: 5,
    worstRating: 1,
    label: "GamePK editorial score",
  };
}

export function getBlogReviewsForSchema() {
  return blogs.map((blog) => ({
    "@type": "Review" as const,
    name: blog.title,
    reviewBody: blog.excerpt,
    datePublished: blog.publishedAt,
    author: {
      "@type": "Organization" as const,
      name: "GamePK",
    },
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: blog.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "SoftwareApplication" as const,
      name: "GamePK",
      operatingSystem: "Android",
      applicationCategory: "GameApplication",
    },
    url: `https://gamepk.net.pk/blogs/${blog.slug}`,
  }));
}
