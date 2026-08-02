"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { NAV_LINKS, SITE_NAME, SOCIAL_LINKS, type NavLink } from "@/lib/constants";
import { Container } from "@/components/ui";

function isActivePath(pathname: string, href: string, external?: boolean) {
  if (external) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function NavItem({
  link,
  pathname,
  onNavigate,
  mobile = false,
}: {
  link: NavLink;
  pathname: string;
  onNavigate?: () => void;
  mobile?: boolean;
}) {
  const active = isActivePath(pathname, link.href, link.external);

  const className = mobile
    ? `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
        active ? "bg-red-600/10 text-red-500" : "text-zinc-200 hover:bg-zinc-900 hover:text-white"
      }`
    : `relative px-2.5 py-2 text-sm font-medium transition-colors duration-200 ${
        active
          ? "text-red-500"
          : "text-zinc-200 hover:text-white"
      } after:absolute after:left-2.5 after:right-2.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-red-500 after:transition-opacity after:duration-200 ${
        active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-40"
      }`;

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={className}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} onClick={onNavigate} className={className}>
      {link.label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#0a0a0a]/95 backdrop-blur-md">
      <Container>
        <div className="flex h-[4.25rem] items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90">
            <Image
              src="/gamepk.webp"
              alt="GamePK logo"
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
            <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
              {SITE_NAME}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavItem key={link.label} link={link} pathname={pathname} />
            ))}
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="border-t border-zinc-800 py-3 xl:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <NavItem
                  key={link.label}
                  link={link}
                  pathname={pathname}
                  mobile
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/50 hover:text-red-400"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-800 bg-[#0a0a0a]">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/gamepk.webp"
                alt="GamePK logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              GamePK is Pakistan&apos;s gaming platform for hot slots, fishing games,
              JazzCash &amp; Easypaisa payments, and easy APK download. Play Fortune
              Gems 3, Money Coming, Happy Fishing, and more at gamepk.net.pk.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href={SOCIAL_LINKS.facebook} label="GamePK on Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.youtube} label="GamePK on YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a2.995 2.995 0 00-2.11-2.12C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.388.52A2.995 2.995 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.995 2.995 0 002.11 2.12c1.883.52 9.388.52 9.388.52s7.505 0 9.388-.52a2.995 2.995 0 002.11-2.12C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialIcon>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Follow GamePK on{" "}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:underline"
              >
                Facebook
              </a>{" "}
              &amp;{" "}
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:underline"
              >
                YouTube
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 transition-colors hover:text-red-400"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-red-400"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-zinc-400 hover:text-red-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-zinc-400 hover:text-red-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-400 hover:text-red-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {currentYear} GamePK (gamepk.net.pk). All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">Made for Pakistani players 🇵🇰</p>
        </div>
      </Container>
    </footer>
  );
}
