import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/content/ContentRenderer";
import { FaqSection } from "@/components/seo/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink, Container } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { DOWNLOAD_URL } from "@/lib/constants";
import { WITHDRAW_FAQS } from "@/lib/faqs";
import { createMetadata } from "@/lib/metadata";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  howToWithdrawJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "GamePK Withdraw to JazzCash & Easypaisa",
  description:
    "How to withdraw from GamePK to JazzCash or Easypaisa in Pakistan. Step-by-step cash-out guide for GamePK winnings.",
  path: "/withdraw",
  keywords: [
    "GamePK withdraw",
    "GamePK withdrawal",
    "GamePK JazzCash withdraw",
    "GamePK Easypaisa withdraw",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Withdraw", path: "/withdraw" },
];

const steps = [
  "Log in to GamePK and open Member Center.",
  "Tap Withdraw and choose JazzCash or Easypaisa.",
  "Enter your registered mobile wallet number carefully.",
  "Enter the withdrawal amount and submit the request.",
  "Wait for processing — funds typically arrive in your wallet after verification.",
];

export default function WithdrawPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          webPageJsonLd({
            title: "GamePK Withdraw to JazzCash & Easypaisa",
            description:
              "Withdraw GamePK winnings to JazzCash or Easypaisa in Pakistan.",
            path: "/withdraw",
          }),
          howToWithdrawJsonLd(),
          faqJsonLd(WITHDRAW_FAQS),
        ]}
      />

      <Container as="article" className="py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Withdraw" },
          ]}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <AnimateIn>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                GamePK Withdraw —{" "}
                <span className="text-red-400">Cash Out Fast</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Move your GamePK balance to JazzCash or Easypaisa with a clear
                withdrawal flow designed for Pakistani players. Always double-check
                your wallet number before submitting.
              </p>
            </AnimateIn>

            <AnimateIn delay={80}>
              <h2 className="mt-10 text-2xl font-bold text-white">
                How to withdraw from GamePK
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
                <ButtonLink href="/deposit" variant="secondary">
                  Deposit Guide
                </ButtonLink>
              </div>

              <p className="mt-6 text-sm text-zinc-500">
                Related:{" "}
                <Link href="/deposit" className="text-red-400 hover:text-red-300">
                  Deposit
                </Link>
                {" · "}
                <Link href="/about" className="text-red-400 hover:text-red-300">
                  About GamePK
                </Link>
                {" · "}
                <Link href="/contact" className="text-red-400 hover:text-red-300">
                  Contact support
                </Link>
              </p>
            </AnimateIn>
          </div>

          <AnimateIn delay={120}>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <Image
                src="/gamepk-dashboard.webp"
                alt="GamePK member dashboard used for withdrawals in Pakistan"
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
        faqs={WITHDRAW_FAQS}
        title="Withdraw FAQs"
        subtitle="Tips for smooth GamePK cash-outs to JazzCash and Easypaisa."
      />
    </>
  );
}
