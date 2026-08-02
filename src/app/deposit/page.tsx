import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/content/ContentRenderer";
import { FaqSection } from "@/components/seo/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink, Container } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { DOWNLOAD_URL } from "@/lib/constants";
import { DEPOSIT_FAQS } from "@/lib/faqs";
import { createMetadata } from "@/lib/metadata";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  howToDepositJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "GamePK Deposit with JazzCash & Easypaisa",
  description:
    "How to deposit on GamePK using JazzCash or Easypaisa in Pakistan. Step-by-step GamePK wallet top-up guide for fast PKR deposits.",
  path: "/deposit",
  keywords: [
    "GamePK deposit",
    "GamePK JazzCash",
    "GamePK Easypaisa",
    "deposit GamePK Pakistan",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Deposit", path: "/deposit" },
];

const steps = [
  "Open GamePK and log in to your account.",
  "Go to Member Center → Deposit / Wallet.",
  "Choose JazzCash or Easypaisa.",
  "Enter the amount in PKR and confirm payment.",
  "Wait for balance update, then start playing hot games & JILI slots.",
];

export default function DepositPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          webPageJsonLd({
            title: "GamePK Deposit with JazzCash & Easypaisa",
            description:
              "Deposit PKR into your GamePK wallet using JazzCash or Easypaisa.",
            path: "/deposit",
          }),
          howToDepositJsonLd(),
          faqJsonLd(DEPOSIT_FAQS),
        ]}
      />

      <Container as="article" className="py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Deposit" },
          ]}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <AnimateIn>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                GamePK Deposit —{" "}
                <span className="text-red-400">JazzCash &amp; Easypaisa</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Top up your GamePK wallet in Pakistan with the payment methods you
                already use. JazzCash and Easypaisa deposits are the fastest way to
                fund Fortune Gems 3, Happy Fishing, Money Coming, and more.
              </p>
            </AnimateIn>

            <AnimateIn delay={80}>
              <h2 className="mt-10 text-2xl font-bold text-white">
                How to deposit on GamePK
              </h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-zinc-400">
                {steps.map((step) => (
                  <li key={step} className="leading-relaxed pl-1">
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={DOWNLOAD_URL} external className="btn-shimmer">
                  Download GamePK
                </ButtonLink>
                <ButtonLink href="/withdraw" variant="secondary">
                  Withdraw Guide
                </ButtonLink>
              </div>

              <p className="mt-6 text-sm text-zinc-500">
                Related:{" "}
                <Link href="/download" className="text-red-400 hover:text-red-300">
                  Download APK
                </Link>
                {" · "}
                <Link href="/blogs" className="text-red-400 hover:text-red-300">
                  Game blogs
                </Link>
                {" · "}
                <Link href="/contact" className="text-red-400 hover:text-red-300">
                  Support
                </Link>
              </p>
            </AnimateIn>
          </div>

          <AnimateIn delay={120}>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <Image
                src="/gamepk-deposit.webp"
                alt="GamePK deposit screen showing JazzCash and Easypaisa payment options"
                width={900}
                height={1600}
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </AnimateIn>
        </div>
      </Container>

      <FaqSection
        faqs={DEPOSIT_FAQS}
        title="Deposit FAQs"
        subtitle="Common questions about GamePK JazzCash and Easypaisa deposits."
      />
    </>
  );
}
