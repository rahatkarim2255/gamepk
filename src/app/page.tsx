import {
  Hero,
  AppDetailsTable,
  IntroSection,
  TableOfContents,
  WhatIsGamePK,
  ReasonsToChoose,
  SpecialOffers,
  ExclusiveBonuses,
  KeyFeatures,
  DownloadInstall,
  SystemRequirements,
  RegisterLogin,
  PlayAndEarn,
  PaymentsSection,
  SupportSection,
  PopularGamesSection,
  SecuritySection,
  StrategiesSection,
  ProsCons,
  FinalThoughts,
  PlatformPreview,
  FAQSection,
  CTASection,
} from "@/components/sections/HomeSections";
import { FeaturedBlogs } from "@/components/sections/ContentSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";

const homeFaqs = [
  {
    question: "Is GamePK secure to use?",
    answer:
      "Yes. GamePK uses account protection and trusted JazzCash/Easypaisa payments so you can deposit, play, and withdraw with more confidence.",
  },
  {
    question: "Can we play GamePK for free?",
    answer:
      "You can download GamePK for free and often start with welcome or daily bonuses. Real-money tables require wallet balance.",
  },
  {
    question: "Does GamePK have customer support?",
    answer:
      "Yes. Use in-app live chat, FAQs, or the Contact page on gamepk.net.pk for help with registration, deposits, and withdrawals.",
  },
  {
    question: "What should we do if transactions fail?",
    answer:
      "Check your JazzCash/Easypaisa balance and network, retry carefully, then contact GamePK support with transaction details if it still fails.",
  },
  {
    question: "Which games are popular on GamePK?",
    answer:
      "Fortune Gems 3, Money Coming, FlyX Cash Turbo, Happy Fishing, Genie's 3 Wishes, Fortune Garuda 500, Super Ace, and Fortune Coins.",
  },
  {
    question: "Can we customise our game experience?",
    answer:
      "Yes. Use Member Center tools for profile, VIP, rewards, and account settings while choosing games that match your style.",
  },
  {
    question: "Is there any limit to how much we can earn?",
    answer:
      "Earnings depend on play results, bonuses, and withdrawal rules. Always follow app limits and play responsibly.",
  },
  {
    question: "Can we play on multiple devices with the same account?",
    answer:
      "For security, avoid multi-device login abuse. Use one active session and keep your password private.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <AppDetailsTable />
      <IntroSection />
      <TableOfContents />
      <WhatIsGamePK />
      <ReasonsToChoose />
      <SpecialOffers />
      <ExclusiveBonuses />
      <KeyFeatures />
      <DownloadInstall />
      <SystemRequirements />
      <RegisterLogin />
      <PlayAndEarn />
      <PaymentsSection />
      <SupportSection />
      <PopularGamesSection />
      <PlatformPreview />
      <SecuritySection />
      <StrategiesSection />
      <ProsCons />
      <FinalThoughts />
      <FeaturedBlogs />
      <FAQSection />
      <CTASection />
    </>
  );
}
