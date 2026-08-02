import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/content/ContentRenderer";
import { FaqSection } from "@/components/seo/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink, Container } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { DOWNLOAD_URL } from "@/lib/constants";
import { PC_FAQS } from "@/lib/faqs";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Play GamePK on PC — Windows Emulator Guide",
  description:
    "How to play GamePK on PC with an Android emulator. Install the official GamePK APK on Windows for a bigger-screen experience in Pakistan.",
  path: "/pc",
  keywords: [
    "GamePK PC",
    "GamePK Windows",
    "GamePK emulator",
    "play GamePK on PC",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "PC Guide", path: "/pc" },
];

const steps = [
  "Download a trusted Android emulator for Windows (BlueStacks, LDPlayer, or similar).",
  "Install and open the emulator with enough RAM allocated for smooth play.",
  "Visit gamepk.net.pk/download inside the emulator browser (or transfer the APK).",
  "Install the official GamePK APK and open the app.",
  "Register / log in, deposit with JazzCash or Easypaisa if needed, and play.",
];

export default function PcGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          webPageJsonLd({
            title: "Play GamePK on PC — Windows Emulator Guide",
            description:
              "Install GamePK on a Windows PC using an Android emulator.",
            path: "/pc",
          }),
          faqJsonLd(PC_FAQS),
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Play GamePK on PC",
            description:
              "Install GamePK APK on Windows using an Android emulator.",
            step: steps.map((text, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              text,
            })),
          },
        ]}
      />

      <Container as="article" className="py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "PC Guide" },
          ]}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <AnimateIn>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Play GamePK on{" "}
                <span className="text-red-400">PC</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Prefer a bigger screen? Run the official GamePK Android APK inside a
                Windows emulator. Same JazzCash &amp; Easypaisa wallet, same hot
                games — just on desktop.
              </p>
            </AnimateIn>

            <AnimateIn delay={80}>
              <h2 className="mt-10 text-2xl font-bold text-white">
                PC setup steps
              </h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-zinc-400">
                {steps.map((step) => (
                  <li key={step} className="leading-relaxed pl-1">
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/download" className="btn-shimmer">
                  Official Download Page
                </ButtonLink>
                <ButtonLink href={DOWNLOAD_URL} external variant="secondary">
                  Get APK Link
                </ButtonLink>
              </div>

              <p className="mt-6 text-sm text-zinc-500">
                Related:{" "}
                <Link href="/download" className="text-red-400 hover:text-red-300">
                  APK download
                </Link>
                {" · "}
                <Link href="/deposit" className="text-red-400 hover:text-red-300">
                  Deposit
                </Link>
                {" · "}
                <Link href="/blogs" className="text-red-400 hover:text-red-300">
                  Blogs
                </Link>
              </p>
            </AnimateIn>
          </div>

          <AnimateIn delay={120}>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <Image
                src="/gamepk-login.webp"
                alt="GamePK login screen suitable for PC emulator play"
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
        faqs={PC_FAQS}
        title="PC Play FAQs"
        subtitle="Answers for Pakistani players running GamePK on Windows."
      />
    </>
  );
}
