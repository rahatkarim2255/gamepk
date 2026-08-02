import Image from "next/image";
import Link from "next/link";
import { FeaturedBlogs } from "@/components/sections/ContentSections";
import { FaqSection } from "@/components/seo/FaqSection";
import {
  Badge,
  ButtonLink,
  Card,
  Container,
  SectionHeading,
} from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { DOWNLOAD_URL } from "@/lib/constants";
import { HOME_FAQS } from "@/lib/faqs";

const features = [
  {
    title: "Hot Games & JILI Slots",
    description:
      "Play Fortune Gems 3, Money Coming, Super Ace, Genie's 3 Wishes, and more popular titles on GamePK.",
    href: "/blogs",
  },
  {
    title: "JazzCash & Easypaisa",
    description:
      "Deposit and withdraw with Pakistan's favourite mobile wallets — fast, familiar, and built for local players.",
    href: "/deposit",
  },
  {
    title: "Safe APK Download",
    description:
      "Get the official GamePK APK from gamepk.net.pk/download. Avoid fake mirrors and stay on the trusted source.",
    href: "/download",
  },
  {
    title: "Android + PC Play",
    description:
      "Install on Android in minutes, or follow our PC guide to play with an emulator on Windows.",
    href: "/pc",
  },
];

const quickLinks = [
  {
    title: "Deposit Guide",
    description: "Add PKR balance with JazzCash or Easypaisa.",
    href: "/deposit",
    image: "/gamepk-deposit.webp",
    alt: "GamePK deposit with JazzCash and Easypaisa",
  },
  {
    title: "Withdraw Guide",
    description: "Cash out winnings to your mobile wallet.",
    href: "/withdraw",
    image: "/gamepk-dashboard.webp",
    alt: "GamePK dashboard for withdrawals",
  },
  {
    title: "PC Guide",
    description: "Run GamePK on Windows with an Android emulator.",
    href: "/pc",
    image: "/gamepk-login.webp",
    alt: "GamePK login screen for PC emulator play",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/80 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.18),_transparent_55%)]"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <AnimateIn>
            <Badge variant="accent">Official GamePK · Pakistan 2026</Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              GamePK Download Latest Version For{" "}
              <span className="text-red-400">Android 2026</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Play online hot games &amp; JILI slots with fast JazzCash &amp; Easypaisa
              withdrawals and 24/7 support. Official GamePK APK at{" "}
              <strong className="text-zinc-200">gamepk.net.pk</strong>.
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={DOWNLOAD_URL} external className="btn-shimmer anim-pulse-glow">
                Download GamePK APK
              </ButtonLink>
              <ButtonLink href="/blogs" variant="secondary">
                Read Game Guides
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Free APK · JazzCash &amp; Easypaisa · Android &amp; PC · 18+
            </p>
          </AnimateIn>
        </div>

        <AnimateIn delay={140}>
          <div className="mx-auto w-full max-w-md anim-float">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-2xl shadow-black/40 sm:p-5">
              <div className="overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-950">
                <Image
                  src="/gamepk.webp"
                  alt="GamePK official app icon for Pakistan Android download"
                  width={512}
                  height={512}
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-sm text-zinc-400">
                <span>GamePK APK</span>
                <Link href="/download" className="font-semibold text-red-400 hover:text-red-300">
                  Official download →
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20" aria-labelledby="features-heading">
      <Container>
        <AnimateIn>
          <SectionHeading
            id="features-heading"
            title="Why Pakistani Players Choose GamePK"
            subtitle="Local payments, popular JILI titles, and a trusted download page built for Pakistan."
          />
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 70}>
              <Card href={feature.href} className="h-full">
                <h3 className="text-lg font-semibold text-white group-hover:text-red-400">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function QuickGuidesSection() {
  return (
    <section className="border-y border-zinc-800/80 bg-zinc-950/40 py-20">
      <Container>
        <AnimateIn>
          <SectionHeading
            title="Deposit, Withdraw & PC Setup"
            subtitle="Internal guides that help you get started fast — and help Google discover every important GamePK page."
          />
        </AnimateIn>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quickLinks.map((item, i) => (
            <AnimateIn key={item.href} delay={i * 80}>
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all hover:border-red-600/40"
              >
                <div className="relative aspect-video overflow-hidden bg-zinc-950">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-red-400">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="py-20">
      <Container>
        <AnimateIn>
          <div className="rounded-2xl border border-red-600/20 bg-gradient-to-br from-red-600/10 via-zinc-900/80 to-zinc-950 px-8 py-12 text-center sm:px-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to play on GamePK?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Download the latest GamePK APK, register in minutes, and explore Fortune
              Gems 3, Happy Fishing, Money Coming, and more.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/download" className="btn-shimmer">
                Go to Download Page
              </ButtonLink>
              <ButtonLink href="/about" variant="outline">
                About GamePK
              </ButtonLink>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <QuickGuidesSection />
      <FeaturedBlogs />
      <FaqSection faqs={HOME_FAQS} />
      <CtaSection />
    </>
  );
}
