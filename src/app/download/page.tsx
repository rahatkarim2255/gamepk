import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { createMetadata } from "@/lib/metadata";
import { APP_DETAILS, DOWNLOAD_URL } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Download GamePK APK",
  description:
    "Download GamePK APK for Android 2026. Free GamePK download with JazzCash & Easypaisa support. Official safe APK from gamepk.net.pk.",
  path: "/download",
  keywords: [
    "GamePK download",
    "GamePK APK",
    "Download GamePK",
    "GamePK Android",
  ],
});

export default function DownloadPage() {
  return (
    <Container as="main" className="py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <AnimateIn>
            <SectionHeading
              title="Download GamePK APK"
              subtitle="Get the latest GamePK app for Android — hot games, JILI slots, fishing titles, and JazzCash / Easypaisa payments."
            />
          </AnimateIn>

          <AnimateIn delay={80}>
            <div className="mt-8 space-y-5 text-zinc-400 leading-relaxed">
              <p>
                Tap the button below to start your{" "}
                <strong className="text-zinc-200">GamePK download</strong>. Always use
                this official page (
                <strong className="text-zinc-200">gamepk.net.pk/download</strong>) and
                avoid fake APK links.
              </p>

              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Platform: {APP_DETAILS.platform}
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Version: {APP_DETAILS.version}
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Price: {APP_DETAILS.price}
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Payments: {APP_DETAILS.payment}
                </li>
              </ul>

              <div className="pt-2">
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

              <div className="pt-4">
                <h2 className="text-lg font-semibold text-white">Install steps</h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                  <li>Click Download GamePK above.</li>
                  <li>Allow install from unknown sources if asked.</li>
                  <li>Open the APK from Downloads and install.</li>
                  <li>Register / login and start playing.</li>
                </ol>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={120}>
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-2xl shadow-black/50 sm:p-5">
              <div className="overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-950">
                <Image
                  src="/gamepk.webp"
                  alt="GamePK APK download app icon"
                  width={480}
                  height={480}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-sm text-zinc-500">GamePK app icon</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </Container>
  );
}
