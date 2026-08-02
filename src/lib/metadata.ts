import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "./constants";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  imageAlt?: string;
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  imageAlt = "GamePK - Pakistan Gaming Platform",
  image = "/opengraph-image",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const normalizedPath = path === "" ? "/" : path;
  const url = `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
  const fullTitle =
    normalizedPath === "/"
      ? `GamePK Download Latest Version For Android 2026`
      : `${title} | ${SITE_NAME}`;

  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [...SITE_KEYWORDS, ...keywords],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "gaming",
    applicationName: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        "en-PK": url,
        "x-default": url,
      },
    },
    icons: {
      icon: [{ url: "/favicon.ico" }, { url: "/gamepk.webp", type: "image/webp" }],
      apple: [{ url: "/gamepk.webp" }],
      shortcut: "/favicon.ico",
    },
    openGraph: {
      type,
      locale: "en_PK",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    other: {
      "geo.region": "PK",
      "geo.placename": "Pakistan",
    },
  };
}

export const homeMetadata = createMetadata({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "GamePK download",
    "GamePK APK Pakistan",
    "GamePK JazzCash",
    "best gaming app Pakistan 2026",
  ],
});
