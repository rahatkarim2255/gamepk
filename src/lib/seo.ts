import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./constants";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/gamepk.webp`,
    description:
      "GamePK is Pakistan's gaming platform for hot slots, fishing games, JazzCash & Easypaisa payments, and APK download.",
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.youtube],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@gamepk.net.pk",
      availableLanguage: ["English", "Urdu"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "GamePK Download Pakistan — hot games, JILI slots, JazzCash deposit, Easypaisa withdraw.",
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
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  imageAlt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/gamepk.webp`,
      },
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/gamepk.webp`,
      caption: imageAlt,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
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
