import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container, ImagePlaceholder } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { DOWNLOAD_URL } from "@/lib/constants";

const prose = "max-w-3xl space-y-4 text-zinc-400 leading-relaxed";
const h2 = "text-3xl font-bold text-white sm:text-4xl";
const h3 = "text-xl font-semibold text-white";
const card =
  "rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/30";

export function Hero() {
  const metaCards = [
    { label: "PLATFORM", value: "Android" },
    { label: "PRICE", value: "Free APK" },
    { label: "REGION", value: "Pakistan" },
    { label: "PAYMENTS", value: "JazzCash / Easypaisa" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-zinc-800 bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(249,115,22,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_90%_20%,rgba(168,85,247,0.1),transparent_50%)]" />

      <Container className="relative pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Left: copy + CTA */}
          <div className="anim-fade-up">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.35rem]">
              <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
                GamePK
              </span>
              <span className="mt-1 block text-white">
                Features guide &amp; APK download
              </span>
            </h1>

            <p className="anim-fade-up-delay-1 mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              <strong className="font-semibold text-white">GamePK</strong> (also
              searched as <strong className="font-semibold text-white">Game PK</strong>)
              is an Android gaming app with hot games, JILI slots, fishing titles,
              VIP rewards, and JazzCash / Easypaisa payments for Pakistani players.
              Use this page for features, deposit &amp; withdraw tips, and a safe{" "}
              <strong className="font-semibold text-white">GamePK APK download</strong>.
            </p>

            <div className="anim-fade-up-delay-2 mt-8">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full max-w-md items-center gap-3 rounded-full border border-zinc-600/80 bg-zinc-900/90 px-2 py-2 pr-5 text-white shadow-lg shadow-black/40 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-800 sm:w-auto"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </svg>
                </span>
                <span className="flex-1 text-sm font-semibold sm:text-base">
                  Download GamePK
                </span>
                <svg
                  className="h-4 w-4 text-zinc-300 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <p className="mt-4 max-w-md text-xs leading-relaxed text-zinc-500 sm:text-sm">
                Android only • Free APK download • In-app purchases or real-money
                play may apply • 18+
              </p>
            </div>
          </div>

          {/* Right: app icon card */}
          <div className="anim-fade-up-delay-2 mx-auto w-full max-w-sm lg:ml-auto">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-2xl shadow-black/50 sm:p-5">
              <div className="anim-float relative overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-950">
                <Image
                  src="/gamepk.webp"
                  alt="GamePK app icon"
                  width={480}
                  height={480}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="mt-3 text-center text-sm text-zinc-500">
                GamePK app icon
              </p>
            </div>
          </div>
        </div>

        {/* Bottom meta cards */}
        <div className="anim-fade-up-delay-3 mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {metaCards.map((card) => (
            <div
              key={card.label}
              className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-4 sm:px-5 sm:py-5"
            >
              <p className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
                {card.label}
              </p>
              <p className="mt-1.5 text-base font-semibold text-white sm:text-lg">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AppDetailsTable() {
  const rows = [
    { label: "App Name", value: "GamePK" },
    { label: "Website", value: "gamepk.net.pk" },
    { label: "Category", value: "Games, Slots, Fishing" },
    { label: "Platform", value: "Android 5.0+ / PC Browser" },
    { label: "Last Update", value: "2026" },
    { label: "Language", value: "English / Urdu" },
    { label: "Payments", value: "JazzCash, Easypaisa" },
    { label: "Price", value: "Free to Download" },
  ];

  return (
    <section id="apk-details" className="border-t border-zinc-800 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>GamePK APK Details</h2>
        </AnimateIn>
        <AnimateIn delay={80} className="mt-8 overflow-hidden rounded-xl border border-zinc-800">
          <table className="w-full text-left text-sm">
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-zinc-900/60" : "bg-zinc-950"}>
                  <th className="w-1/3 px-4 py-3 font-semibold text-zinc-200 sm:px-6">
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-zinc-400 sm:px-6">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function IntroSection() {
  return (
    <section className="border-t border-zinc-800 bg-zinc-900/30 py-16">
      <Container>
        <AnimateIn className={prose}>
          <p>
            <strong className="text-zinc-200">GamePK</strong> is a popular online
            gaming app that offers multiple opportunities to play hot games and enjoy
            real-money entertainment. This app is designed for casino enthusiasts and
            provides a smooth, easy-to-use interface that enhances the gaming
            experience. You can join different live lobbies and compete with real
            players from various regions, creating a realistic and enjoyable
            game-playing experience from home.
          </p>
          <p>
            This app includes daily challenges, VIP rewards, bonuses, and social
            features that make your gameplay more fun and competitive. GamePK is an
            entertaining, interactive platform that offers classic casino-style play
            with modern advanced features. Whether you play just for fun or for
            competition, this app gives you a best-in-class gaming experience — just
            like a real casino.
          </p>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function TableOfContents() {
  const items = [
    { href: "#what-is-gamepk", label: "What is the GamePK APK?" },
    { href: "#reasons", label: "Reasons to Choose GamePK in Pakistan" },
    { href: "#special-offers", label: "Special Offers for New Users" },
    { href: "#bonuses", label: "Exclusive Bonuses & Promotions" },
    { href: "#features", label: "Key Features of GamePK APK" },
    { href: "#download-install", label: "Download & Install GamePK" },
    { href: "#requirements", label: "Android System Requirements" },
    { href: "#register-login", label: "Register & Login" },
    { href: "#play-earn", label: "How to Play & Earn" },
    { href: "#payments", label: "Supported Payment Methods" },
    { href: "#support", label: "Customer Support" },
    { href: "#popular-games", label: "Popular Games" },
    { href: "#security", label: "Security & Fair Play" },
    { href: "#strategies", label: "Best Strategies" },
    { href: "#pros-cons", label: "Pros & Cons" },
    { href: "#faq", label: "FAQs" },
  ];

  return (
    <section className="border-t border-zinc-800 py-12">
      <Container>
        <AnimateIn>
          <h2 className="text-2xl font-bold text-white">Table of Contents</h2>
          <ul className="mt-6 columns-1 gap-x-10 sm:columns-2 space-y-2">
            {items.map((item) => (
              <li key={item.href} className="break-inside-avoid">
                <a
                  href={item.href}
                  className="text-sm text-red-400 transition-colors hover:text-red-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function WhatIsGamePK() {
  return (
    <section id="what-is-gamepk" className="border-t border-zinc-800 bg-zinc-900/30 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>What is the GamePK APK?</h2>
        </AnimateIn>
        <AnimateIn delay={80} className={`mt-6 ${prose}`}>
          <p>
            The <strong className="text-zinc-200">GamePK APK</strong> is a popular
            gaming app that lets you play various games — including Fortune Gems 3,
            Money Coming, Happy Fishing, Genie&apos;s 3 Wishes, Super Ace, Fortune
            Coins, and more — to enjoy real-cash gameplay. You can play a wide variety
            of games in one app without switching to others, for a more engaging
            gaming experience. The most prominent feature of this app is that it keeps
            your deposits and withdrawals safe and secure with JazzCash and Easypaisa
            so you can play without worry.
          </p>
          <p>
            The latest version offers smooth gameplay, attractive graphics, and easy
            navigation with no confusion. The combination of entertainment, security,
            and convenience makes the GamePK APK a popular choice among online gamers
            in Pakistan.
          </p>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function ReasonsToChoose() {
  const reasons = [
    {
      title: "Traditional & Familiar Games",
      body: "GamePK brings popular slots and fishing games to your mobile with modern graphics. Beginners and experienced players both feel comfortable from the first login.",
    },
    {
      title: "Easy to Use",
      body: "A simple, intuitive interface makes menus, games, and deposits easy — no technical skills required. Accessible for players across age groups in Pakistan.",
    },
    {
      title: "Play With Real Players",
      body: "Connect with real players in live lobbies. Compete against real users rather than offline simulations for more excitement and unpredictability.",
    },
    {
      title: "Live Multiplayer Experience",
      body: "Live game rooms and real-time action create a thrilling experience similar to playing in a real casino from home.",
    },
    {
      title: "Daily Rewards & Bonuses",
      body: "Daily login bonuses, VIP rewards, and special offers help you keep playing and stay motivated to open GamePK every day.",
    },
    {
      title: "Social Features",
      body: "Invite friends, share referral links, and enjoy a more social gaming experience with rewards for active invites.",
    },
  ];

  return (
    <section id="reasons" className="border-t border-zinc-800 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Reasons to Choose the GamePK App in Pakistan</h2>
          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            Below are key reasons why you should choose the GamePK app in Pakistan.
          </p>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <AnimateIn key={r.title} delay={i * 50}>
              <article className={`h-full ${card}`}>
                <h3 className={h3}>{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{r.body}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SpecialOffers() {
  const offers = [
    {
      n: "01",
      title: "Recharge Rebate",
      body: "GamePK offers recharge rebate bonuses for users. The rebate depends on your deposit amount and VIP level — more recharge can mean better returns.",
    },
    {
      n: "02",
      title: "VIP Promo",
      body: "Exclusive VIP promotions reward active players with higher benefits, upgrade bonuses, and special member-center perks.",
    },
    {
      n: "03",
      title: "Big Rebate",
      body: "Active users can enjoy bigger recharge rebates based on VIP level. Climb VIP for stronger rebate rates on GamePK.",
    },
    {
      n: "04",
      title: "Double / Invite Bonus",
      body: "Invite friends with your referral link. The more friends join and stay active, the more bonuses you can earn.",
    },
    {
      n: "05",
      title: "Weekly Agent Bonus",
      body: "Top agents can earn weekly rewards based on performance and active users — a strong earning path for promoters.",
    },
  ];

  return (
    <section id="special-offers" className="border-t border-zinc-800 bg-zinc-900/30 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Special Offers for New Users by GamePK</h2>
        </AnimateIn>
        <div className="mt-10 space-y-6">
          {offers.map((o, i) => (
            <AnimateIn key={o.title} delay={i * 60}>
              <div className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6">
                <span className="text-2xl font-black text-red-600">{o.n}</span>
                <div>
                  <h3 className={h3}>{o.title}</h3>
                  <p className="mt-2 text-zinc-400 leading-relaxed">{o.body}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ExclusiveBonuses() {
  const bonuses = [
    {
      title: "Welcome Bonus",
      body: "New players can receive a welcome bonus when they register. Perfect for beginners who want to start without spending their own money first.",
    },
    {
      title: "Daily Login Bonus",
      body: "Earn rewards simply by logging into GamePK daily. Free chips and sign-in rewards keep your resources flowing.",
    },
    {
      title: "Referral Bonus",
      body: "Invite friends with your referral link. When they join and play, you earn rewards — an easy way to grow balance.",
    },
    {
      title: "Special Event Rewards",
      body: "Limited-time events and promotions offer extra chips and exclusive rewards for active GamePK players.",
    },
    {
      title: "Rebate Bonus",
      body: "Rebate bonuses can return a percentage of losses as chips, helping reduce risk and encouraging longer sessions.",
    },
    {
      title: "Cashback Bonus",
      body: "Cashback-style rewards on certain deposits or activities can return a small percentage to your GamePK wallet.",
    },
  ];

  return (
    <section id="bonuses" className="border-t border-zinc-800 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Exclusive Bonuses &amp; Promotions of GamePK</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((b, i) => (
            <AnimateIn key={b.title} delay={i * 50}>
              <article className={`h-full ${card}`}>
                <h3 className="text-lg font-semibold text-red-400">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{b.body}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function KeyFeatures() {
  const features = [
    {
      title: "Regular Updates",
      body: "GamePK frequently improves games, events, and performance so your experience stays fresh and smooth.",
    },
    {
      title: "Low Data Usage",
      body: "Designed for mobile users in Pakistan — runs well even on moderate 3G/4G connections without heavy data drain.",
    },
    {
      title: "Fun & Entertainment",
      body: "Slots, fishing, and hot games keep you engaged — casual play or competitive sessions, both work.",
    },
    {
      title: "Member Center Tools",
      body: "Track balance, VIP, deposit/withdraw records, security, and invites from one clear member center.",
    },
    {
      title: "Cross Platform Compatibility",
      body: "Play on Android phones and also on PC via browser or emulator without complex setup.",
    },
    {
      title: "Flexible Bet Levels",
      body: "Choose amounts that match your budget. Start small as a beginner, then move up when confident.",
    },
    {
      title: "Skill + Smart Play",
      body: "Slots involve luck, but bankroll control, table selection, and patience decide long-term results.",
    },
    {
      title: "Regular Content Updates",
      body: "New themes, events, and popular titles like Fortune Gems 3 keep the lobby exciting.",
    },
  ];

  return (
    <section id="features" className="border-t border-zinc-800 bg-zinc-900/30 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Key Features of GamePK APK</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <AnimateIn key={f.title} delay={i * 40}>
              <article className={`h-full ${card}`}>
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function DownloadInstall() {
  const steps = [
    {
      title: "Visit the Official Website",
      body: "Open your browser and go to gamepk.net.pk — always use the trusted GamePK website and avoid fake links.",
    },
    {
      title: "Download APK File",
      body: "Click Download GamePK to start downloading. Keep a stable internet connection during the process.",
    },
    {
      title: "Enable Unknown Sources",
      body: "Allow install permission if asked (Settings → Security → Install unknown apps), because APK installs need approval.",
    },
    {
      title: "Install the App",
      body: "Open File Manager → Downloads, tap the GamePK APK, and wait for installation to finish.",
    },
    {
      title: "Open App & Play",
      body: "Tap the GamePK icon, create an account or login, then start playing hot games and slots.",
    },
  ];

  return (
    <section id="download-install" className="border-t border-zinc-800 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Download &amp; Install GamePK APK for Android Devices</h2>
          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            To download &amp; install GamePK APK for an Android device, follow these steps:
          </p>
        </AnimateIn>
        <ol className="mt-8 max-w-3xl space-y-4">
          {steps.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 60}>
              <li className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{s.body}</p>
                </div>
              </li>
            </AnimateIn>
          ))}
        </ol>
        <AnimateIn delay={300} className="mt-8">
          <ButtonLink href={DOWNLOAD_URL} external className="btn-shimmer">
            Download GamePK Now
          </ButtonLink>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function SystemRequirements() {
  const rows = [
    { system: "Operating System", min: "Android 5.0", max: "Android 14+" },
    { system: "RAM", min: "2GB", max: "4GB+" },
    { system: "Storage", min: "300MB", max: "500MB+" },
    { system: "Processor", min: "Quad-core", max: "Octa-core" },
    { system: "Internet", min: "Stable 3G", max: "Strong 4G / Wi-Fi" },
  ];

  return (
    <section id="requirements" className="border-t border-zinc-800 bg-zinc-900/30 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Android System Requirements to Play GamePK</h2>
        </AnimateIn>
        <AnimateIn delay={80} className="mt-8 overflow-x-auto rounded-xl border border-zinc-800">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-zinc-900">
              <tr>
                <th className="px-4 py-3 font-semibold text-zinc-200 sm:px-6">System</th>
                <th className="px-4 py-3 font-semibold text-zinc-200 sm:px-6">Minimum</th>
                <th className="px-4 py-3 font-semibold text-zinc-200 sm:px-6">Recommended</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.system} className={i % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900/50"}>
                  <td className="px-4 py-3 text-zinc-300 sm:px-6">{r.system}</td>
                  <td className="px-4 py-3 text-zinc-400 sm:px-6">{r.min}</td>
                  <td className="px-4 py-3 text-zinc-400 sm:px-6">{r.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function RegisterLogin() {
  return (
    <section id="register-login" className="border-t border-zinc-800 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Steps to Register &amp; Log in on GamePK</h2>
        </AnimateIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <AnimateIn>
            <h3 className={`${h3} text-red-400`}>01: Register Account</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-zinc-400 leading-relaxed">
              <li>Open GamePK and tap Register / Sign Up on the home screen.</li>
              <li>Enter your active mobile number carefully for verification.</li>
              <li>Complete captcha / OTP if shown to confirm you are not a robot.</li>
              <li>Create a strong password with letters, numbers, and symbols.</li>
              <li>Submit — your GamePK account will be created quickly.</li>
            </ol>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h3 className={`${h3} text-red-400`}>02: Login Account</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-zinc-400 leading-relaxed">
              <li>Launch GamePK and tap Login.</li>
              <li>Enter the same mobile number used during registration.</li>
              <li>Type your password carefully to avoid login errors.</li>
              <li>Tap Login and enter the lobby to start playing games.</li>
            </ol>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}

export function PlayAndEarn() {
  const steps = [
    "Open GamePK and log in with your registered account, then select a game from the lobby.",
    "Start with welcome or daily login bonuses first to learn without high risk.",
    "Choose low bet amounts at the start to reduce losses and play longer.",
    "Play smart — avoid over-betting and protect your balance with patience.",
    "When you win, withdraw using JazzCash or Easypaisa safely.",
  ];

  return (
    <section id="play-earn" className="border-t border-zinc-800 bg-zinc-900/30 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>How to Play &amp; Earn Money on GamePK?</h2>
          <p className="mt-3 max-w-2xl text-lg text-zinc-400">
            If you want to play &amp; earn on GamePK, follow these steps:
          </p>
        </AnimateIn>
        <ol className="mt-8 max-w-3xl space-y-4">
          {steps.map((s, i) => (
            <AnimateIn key={s} delay={i * 50}>
              <li className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/20 text-sm font-bold text-red-400">
                  {i + 1}
                </span>
                <p className="pt-1 text-zinc-300 leading-relaxed">{s}</p>
              </li>
            </AnimateIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function PaymentsSection() {
  return (
    <section id="payments" className="border-t border-zinc-800 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Supported Payment Methods of the GamePK App</h2>
        </AnimateIn>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <AnimateIn>
            <article className={card}>
              <h3 className={h3}>JazzCash</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                JazzCash is a simple, widely used payment method in Pakistan. On
                GamePK it makes deposits and withdrawals fast and secure for mobile
                wallet users.
              </p>
            </article>
          </AnimateIn>
          <AnimateIn delay={80}>
            <article className={card}>
              <h3 className={h3}>Easypaisa</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">
                Easypaisa is another trusted method on GamePK. Add balance or withdraw
                winnings directly from your Easypaisa account with ease.
              </p>
            </article>
          </AnimateIn>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <AnimateIn>
            <h3 className={`${h3} text-red-400`}>01: Money Deposit Method</h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-400 leading-relaxed">
              <li>Open GamePK and register/login.</li>
              <li>Tap Deposit on the main screen.</li>
              <li>Choose JazzCash or Easypaisa.</li>
              <li>Enter the amount you want to deposit.</li>
              <li>Double-check details and follow on-screen steps.</li>
              <li>Submit and wait a few seconds.</li>
              <li>Your GamePK wallet balance updates quickly.</li>
            </ol>
            <Link href="/deposit" className="mt-4 inline-block text-sm font-semibold text-red-400 hover:text-red-300">
              Full deposit guide →
            </Link>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h3 className={`${h3} text-red-400`}>02: Rewards Withdrawal Method</h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-400 leading-relaxed">
              <li>Launch GamePK and log in.</li>
              <li>Open Withdrawal in Member Center.</li>
              <li>Choose JazzCash or Easypaisa.</li>
              <li>Enter the amount to withdraw.</li>
              <li>Double-check wallet details.</li>
              <li>Submit and wait for processing.</li>
              <li>Funds transfer to your selected method.</li>
            </ol>
            <Link href="/withdraw" className="mt-4 inline-block text-sm font-semibold text-red-400 hover:text-red-300">
              Full withdraw guide →
            </Link>
          </AnimateIn>
        </div>

        <AnimateIn delay={120} className="mt-10">
          <ImagePlaceholder
            src="/gamepk-deposit.webp"
            alt="GamePK JazzCash and Easypaisa deposit methods"
            aspectRatio="portrait"
            objectFit="contain"
            className="mx-auto max-w-xs border-zinc-700 bg-zinc-950"
          />
        </AnimateIn>
      </Container>
    </section>
  );
}

export function SupportSection() {
  return (
    <section id="support" className="border-t border-zinc-800 bg-zinc-900/30 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Contact the Customer Support Team of GamePK</h2>
        </AnimateIn>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Live Chat",
              body: "Use in-app live chat for the fastest help with deposits, withdrawals, and login issues.",
            },
            {
              title: "Email / Contact",
              body: "Write clearly with account details via our Contact page. Support responds as soon as possible.",
            },
            {
              title: "FAQs",
              body: "Check FAQs below for registration, deposits, withdrawals, and bonuses before contacting support.",
            },
          ].map((item, i) => (
            <AnimateIn key={item.title} delay={i * 60}>
              <article className={`h-full ${card}`}>
                <h3 className={h3}>{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{item.body}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={200} className="mt-8">
          <ButtonLink href="/contact" variant="outline">
            Contact GamePK
          </ButtonLink>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function PopularGamesSection() {
  const games = [
    { title: "Slot Games", body: "Fortune Gems 3, Money Coming, Genie's 3 Wishes, Fortune Coins, Super Ace — spinning reels with fast rewards." },
    { title: "Fishing Games", body: "Happy Fishing and arcade fishing titles for aim-and-shoot fun with exciting targets." },
    { title: "Hot Games", body: "FlyX Cash Turbo and trending lobby picks for high-energy short sessions." },
    { title: "Popular Lobby", body: "All top GamePK titles in one place — switch games without leaving the app." },
  ];

  return (
    <section id="popular-games" className="border-t border-zinc-800 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Popular Game Section of GamePK App</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((g, i) => (
            <AnimateIn key={g.title} delay={i * 50}>
              <article className={`h-full ${card}`}>
                <h3 className="text-lg font-semibold text-red-400">{g.title}</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{g.body}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={200} className="mt-8">
          <Link href="/blogs" className="text-sm font-semibold text-red-400 hover:text-red-300">
            Read game blogs →
          </Link>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function SecuritySection() {
  const items = [
    { title: "Secure Account Protection", body: "Strong login protection helps keep your mobile number and wallet details safe from unauthorized access." },
    { title: "Safe Payment System", body: "JazzCash and Easypaisa transactions are handled carefully so you can deposit and withdraw with confidence." },
    { title: "Fair Game Play", body: "Games run on fair systems so rounds and spins remain random — equal chance without manipulation." },
    { title: "Transparency & Reporting", body: "Track rewards, bonuses, and balances in Member Center. Report issues to support for quick help." },
  ];

  return (
    <section id="security" className="border-t border-zinc-800 bg-zinc-900/30 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Security &amp; Fair Play System of GamePK</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 50}>
              <article className={`h-full ${card}`}>
                <h3 className={h3}>{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{item.body}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function StrategiesSection() {
  const tips = [
    "Use free chips & bonuses first to practice without high risk.",
    "Start with low bet amounts, then move higher when confident.",
    "Learn each game’s rules and paytable before raising stakes.",
    "Bet smart — avoid chasing losses and protect your balance.",
    "Join events and promotions for extra rewards.",
    "Use the referral program to earn bonus chips.",
    "Withdraw winnings wisely once your balance is good.",
  ];

  return (
    <section id="strategies" className="border-t border-zinc-800 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Best Strategies to Earn Maximum on GamePK</h2>
        </AnimateIn>
        <ul className="mt-8 max-w-3xl space-y-3">
          {tips.map((t, i) => (
            <AnimateIn key={t} delay={i * 40}>
              <li className="flex gap-3 text-zinc-300 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                {t}
              </li>
            </AnimateIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ProsCons() {
  const pros = [
    "Wide variety of games",
    "Secure & fair gameplay focus",
    "Bonuses & VIP rewards",
    "Easy JazzCash / Easypaisa payments",
    "User-friendly interface",
    "Regular updates",
    "Android + PC access",
  ];
  const cons = [
    "Risk of losing money",
    "Stable internet required",
    "Addictive gameplay potential",
    "Not a Play Store app (APK install)",
    "High bets can be risky",
    "Third-party download needed",
    "Play responsibly required",
  ];

  return (
    <section id="pros-cons" className="border-t border-zinc-800 bg-zinc-900/30 py-16">
      <Container>
        <AnimateIn>
          <h2 className={h2}>Pros &amp; Cons</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <AnimateIn>
            <h3 className="text-lg font-semibold text-red-400">Pros</h3>
            <ul className="mt-4 space-y-2">
              {pros.map((p) => (
                <li key={p} className="flex gap-2 text-zinc-300">
                  <span className="text-red-600">+</span> {p}
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h3 className="text-lg font-semibold text-rose-400">Cons</h3>
            <ul className="mt-4 space-y-2">
              {cons.map((c) => (
                <li key={c} className="flex gap-2 text-zinc-300">
                  <span className="text-rose-400">−</span> {c}
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}

export function FinalThoughts() {
  return (
    <section className="border-t border-zinc-800 py-16">
      <Container>
        <AnimateIn className={prose}>
          <h2 className={h2}>Final Thoughts</h2>
          <p className="mt-6">
            <strong className="text-zinc-200">GamePK</strong> is one of the best and
            most popular real-money gaming apps in Pakistan, offering a wide variety of
            hot games, JILI slots, and fishing titles. The platform focuses on secure
            play, multiple bonuses &amp; rewards, and a beginner-friendly experience for
            regular players. Its user-friendly interface, JazzCash/Easypaisa
            transactions, and regular updates make gameplay smoother and more enjoyable.
          </p>
          <p>
            Always download from the official website{" "}
            <strong className="text-zinc-200">gamepk.net.pk</strong> and avoid fake or
            unknown websites that can harm your device. Overall, GamePK is a trusted
            choice for entertainment and rewards — mixing fun gameplay with opportunities
            to play for real money.
          </p>
          <div className="pt-4">
            <ButtonLink href={DOWNLOAD_URL} external className="btn-shimmer">
              Download GamePK
            </ButtonLink>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
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

  return (
    <section id="faq" className="border-t border-zinc-800 py-20">
      <Container>
        <AnimateIn>
          <h2 className="text-center text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </AnimateIn>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-zinc-800">
          {faqs.map((faq, i) => (
            <AnimateIn key={faq.question} delay={i * 40}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-white">
                  {faq.question}
                  <span className="ml-4 text-red-400 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-zinc-400 leading-relaxed">{faq.answer}</p>
              </details>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20">
      <Container>
        <AnimateIn>
          <div className="relative overflow-hidden rounded-2xl border border-red-600/20 bg-gradient-to-r from-red-950/50 to-zinc-900 p-8 sm:p-12">
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-white">
                  Ready to Download GamePK?
                </h2>
                <p className="mt-4 text-lg text-zinc-400">
                  Get the latest GamePK APK for Android 2026 — hot games, JazzCash
                  deposits, Easypaisa withdrawals, and 24/7 support.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink href={DOWNLOAD_URL} external className="btn-shimmer">
                    Download GamePK
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    Contact Us
                  </ButtonLink>
                </div>
              </div>
              <div className="hidden anim-float lg:block">
                <Image
                  src="/gamepk.webp"
                  alt="GamePK APK download"
                  width={160}
                  height={160}
                  className="rounded-2xl border border-amber-500/20 shadow-lg shadow-amber-500/10"
                />
              </div>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}

export function PlatformPreview() {
  const screens = [
    {
      src: "/gamepk-login.webp",
      alt: "GamePK hot games lobby",
      title: "Hot Games Lobby",
      description: "Fortune Gems 3, Money Coming & VIP offers.",
    },
    {
      src: "/gamepk-dashboard.webp",
      alt: "GamePK rewards",
      title: "Rewards Dashboard",
      description: "Bonuses, sign-in rewards, invites.",
    },
    {
      src: "/gamepk-deposit.webp",
      alt: "GamePK deposit",
      title: "Easy Deposits",
      description: "JazzCash & Easypaisa in PKR.",
    },
    {
      src: "/gamepk-pak.webp",
      alt: "GamePK member center",
      title: "Member Center",
      description: "Withdraw, records & security.",
    },
  ];

  return (
    <section className="border-t border-zinc-800 bg-zinc-900/30 py-20">
      <Container>
        <AnimateIn>
          <div className="text-center">
            <h2 className={h2}>
              The <span className="text-red-400">GamePK</span> Experience
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
              From lobby to deposit — screenshots of the GamePK app for Pakistani players.
            </p>
          </div>
        </AnimateIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {screens.map((screen, i) => (
            <AnimateIn key={screen.src} delay={i * 80}>
              <figure className="group">
                <ImagePlaceholder
                  src={screen.src}
                  alt={screen.alt}
                  aspectRatio="portrait"
                  objectFit="contain"
                  className="border-zinc-700 bg-zinc-950 transition-transform duration-500 group-hover:-translate-y-2"
                />
                <figcaption className="mt-4 text-center">
                  <h3 className="text-base font-semibold text-white">{screen.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{screen.description}</p>
                </figcaption>
              </figure>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
