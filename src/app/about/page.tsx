import type { Metadata } from "next";
import { ButtonLink, Container, ImagePlaceholder } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { createMetadata } from "@/lib/metadata";
import { DOWNLOAD_URL } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "About GamePK",
  description:
    "About GamePK (gamepk.net.pk) — Pakistan gaming app for JILI slots, fishing games, JazzCash & Easypaisa, VIP rewards, and safe APK download.",
  path: "/about",
  keywords: ["about GamePK", "GamePK Pakistan", "GamePK app", "gamepk.net.pk"],
});

export default function AboutPage() {
  return (
    <Container as="article" className="py-16">
      <AnimateIn>
        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            About <span className="text-red-400">GamePK</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            GamePK (gamepk.net.pk) is Pakistan&apos;s destination for hot games,
            JILI slots, fishing titles, and local wallet payments. We help players
            download the app, deposit with JazzCash or Easypaisa, and enjoy a smooth
            gaming experience.
          </p>
        </header>
      </AnimateIn>

      <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
        <AnimateIn>
          <ImagePlaceholder
            src="/gamepk.webp"
            alt="GamePK official brand for Pakistan gaming app"
            aspectRatio="square"
            objectFit="contain"
            className="mx-auto max-w-sm border-amber-500/20 bg-zinc-950 lg:mx-0"
          />
        </AnimateIn>
        <AnimateIn delay={120}>
          <ImagePlaceholder
            src="/gamepk-pak.webp"
            alt="GamePK member center for Pakistani players"
            aspectRatio="portrait"
            objectFit="contain"
            className="mx-auto max-w-xs border-zinc-700 bg-zinc-950 lg:mx-0"
          />
        </AnimateIn>
      </div>

      <AnimateIn>
        <div className="prose-gamepk mt-12 max-w-3xl space-y-6 text-zinc-400 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p>
            Pakistani players deserve a gaming platform that understands local
            wallets, language, and popular titles. GamePK was built so you can
            register, deposit, play Fortune Gems 3 or Happy Fishing, and withdraw
            without friction.
          </p>

          <h2 className="text-2xl font-bold text-white">What GamePK Offers</h2>
          <ul className="list-none space-y-2">
            {[
              "Hot games & JILI slots (Fortune Gems 3, Money Coming, Super Ace, and more)",
              "Fishing & arcade titles like Happy Fishing",
              "JazzCash and Easypaisa deposit & withdraw",
              "VIP rewards, sign-in bonuses, and invite tools",
              "Android download + PC browser play",
              "Helpful blogs for Pakistani GamePK players",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-white">Why gamepk.net.pk?</h2>
          <p>
            The GamePK brand and domain represent our focus on Pakistan. Content,
            payments, and game coverage are tailored for local players — not copied
            from unrelated international sites.
          </p>

          <div className="pt-4">
            <ButtonLink href={DOWNLOAD_URL} external className="btn-shimmer">
              Download GamePK
            </ButtonLink>
          </div>
        </div>
      </AnimateIn>
    </Container>
  );
}
