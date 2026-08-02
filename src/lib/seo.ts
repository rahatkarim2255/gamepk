import {
  APP_DETAILS,
  DOWNLOAD_URL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "./constants";
import { getAppEditorialRating, getBlogReviewsForSchema } from "./ratings";

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export function imageObjectJsonLd({
  url,
  alt,
  width,
  height,
}: {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return {
    "@type": "ImageObject" as const,
    contentUrl: absoluteUrl(url),
    url: absoluteUrl(url),
    caption: alt,
    description: alt,
    name: alt,
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    inLanguage: "en-PK",
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: imageObjectJsonLd({
      url: "/gamepk.webp",
      alt: "GamePK logo",
      width: 512,
      height: 512,
    }),
    description:
      "GamePK is Pakistan's gaming platform for hot slots, fishing games, JazzCash & Easypaisa payments, and APK download.",
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.youtube],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@gamepk.net.pk",
      availableLanguage: ["English", "Urdu"],
      areaServed: "PK",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-PK",
    description:
      "GamePK Download Pakistan — hot games, JILI slots, JazzCash deposit, Easypaisa withdraw.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blogs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
  author,
  image,
  imageAlt,
  rating,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  image: string;
  imageAlt: string;
  rating?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    inLanguage: "en-PK",
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: imageObjectJsonLd({
        url: "/gamepk.webp",
        alt: "GamePK logo",
        width: 512,
        height: 512,
      }),
    },
    image: imageObjectJsonLd({
      url: image,
      alt: imageAlt,
      width: 1200,
      height: 630,
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
    ...(typeof rating === "number"
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: rating,
            ratingCount: 1,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function softwareApplicationJsonLd() {
  const rating = getAppEditorialRating();
  const reviews = getBlogReviewsForSchema();

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_DETAILS.name,
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.ratingValue,
      ratingCount: rating.ratingCount,
      bestRating: rating.bestRating,
      worstRating: rating.worstRating,
    },
    review: reviews,
    description:
      "Download GamePK APK for Android — play JILI slots, fishing games, and more with JazzCash & Easypaisa support in Pakistan.",
    downloadUrl: DOWNLOAD_URL,
    url: `${SITE_URL}/download`,
    image: imageObjectJsonLd({
      url: "/gamepk.webp",
      alt: "GamePK APK app icon",
      width: 512,
      height: 512,
    }),
    screenshot: imageObjectJsonLd({
      url: "/gamepk-dashboard.webp",
      alt: "GamePK member dashboard screenshot",
      width: 900,
      height: 1600,
    }),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function howToDownloadJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download and Install GamePK APK",
    description:
      "Step-by-step guide to download GamePK APK on Android from the official gamepk.net.pk download page.",
    totalTime: "PT5M",
    supply: [
      {
        "@type": "HowToSupply",
        name: "Android smartphone",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "GamePK APK installer",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open the download page",
        text: "Visit gamepk.net.pk/download and tap Download GamePK.",
        url: `${SITE_URL}/download`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Allow unknown sources",
        text: "If Android asks, allow install from unknown sources for your browser or file manager.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Install the APK",
        text: "Open the downloaded APK from Downloads and tap Install.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Register and play",
        text: "Open GamePK, register or log in, then start playing hot games and JILI slots.",
      },
    ],
  };
}

export function howToDepositJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Deposit on GamePK with JazzCash or Easypaisa",
    description:
      "Deposit money into your GamePK wallet in Pakistan using JazzCash or Easypaisa.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open GamePK wallet",
        text: "Log in to GamePK and open Deposit or Wallet from the Member Center.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Choose JazzCash or Easypaisa",
        text: "Select JazzCash or Easypaisa as your payment method.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Enter amount and confirm",
        text: "Enter your deposit amount in PKR, follow the on-screen instructions, and confirm payment.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Start playing",
        text: "Once your balance updates, play slots, fishing games, or other hot titles on GamePK.",
      },
    ],
  };
}

export function howToWithdrawJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Withdraw from GamePK to JazzCash or Easypaisa",
    description:
      "Withdraw winnings from GamePK to JazzCash or Easypaisa in Pakistan.",
    totalTime: "PT15M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open withdraw",
        text: "Log in to GamePK and open the Withdraw section in Member Center.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Select wallet",
        text: "Choose JazzCash or Easypaisa and enter your registered mobile wallet details.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Submit request",
        text: "Enter the amount, confirm your details, and submit the withdrawal request.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Receive funds",
        text: "Wait for processing — funds are typically sent to your JazzCash or Easypaisa wallet.",
      },
    ],
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "en-PK",
  };
}
