import type { MetadataRoute } from "next";
import { blogs } from "@/content/blogs";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
      images: [`${SITE_URL}/gamepk.webp`, `${SITE_URL}/opengraph-image`],
    },
    {
      url: `${SITE_URL}/download`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${SITE_URL}/gamepk.webp`],
    },
    {
      url: `${SITE_URL}/deposit`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${SITE_URL}/gamepk-deposit.webp`],
    },
    {
      url: `${SITE_URL}/withdraw`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${SITE_URL}/gamepk-dashboard.webp`],
    },
    {
      url: `${SITE_URL}/pc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [`${SITE_URL}/gamepk-login.webp`],
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
      images: [`${SITE_URL}/gamepk.webp`],
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      images: [`${SITE_URL}/gamepk.webp`, `${SITE_URL}/gamepk-pak.webp`],
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [`${SITE_URL}/gamepk.webp`],
  }));

  return [...staticPages, ...blogPages];
}
