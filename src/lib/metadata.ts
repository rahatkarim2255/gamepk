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
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `GamePK Download Latest Version For Android 2026`
      : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: [...SITE_KEYWORDS, ...keywords],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
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
          url: "/gamepk.webp",
          width: 512,
          height: 512,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/gamepk.webp"],
    },
    robots: {
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
