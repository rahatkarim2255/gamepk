import type { MetadataRoute } from "next";
import { blogs } from "@/content/blogs";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/blogs",
    "/download",
    "/deposit",
    "/withdraw",
    "/pc",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("daily" as const) : ("weekly" as const),
    priority: path === "" ? 1 : 0.8,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
