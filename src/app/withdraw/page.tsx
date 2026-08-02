import type { Metadata } from "next";
import { ButtonLink, Container, ImagePlaceholder, SectionHeading } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { createMetadata } from "@/lib/metadata";
import { DOWNLOAD_URL } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "GamePK Withdraw — JazzCash & Easypaisa",
  description:
    "How to withdraw from GamePK to JazzCash or Easypaisa. Fast GamePK withdrawal guide for Pakistani players with Member Center steps.",
  path: "/withdraw",
  keywords: [
    "GamePK withdraw",
    "GamePK withdrawal",
    "GamePK JazzCash withdraw",
    "GamePK Easypaisa withdrawal",
  ],
});

export default function WithdrawPage() {
  return (
    <Container as="main" className="py-16">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <AnimateIn>
            <SectionHeading
              title="GamePK Withdraw Guide"
              subtitle="Cash out your GamePK balance securely to JazzCash or Easypaisa."
            />
          </AnimateIn>

          <AnimateIn delay={80}>
            <div className="mt-8 space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Want a smooth <strong className="text-zinc-200">GamePK withdraw</strong>?
                Use the Member Center to send winnings to your JazzCash or Easypaisa
                wallet after verification.
              </p>

              <h2 className="text-xl font-semibold text-white">How to withdraw</h2>
              <ol className="list-decimal space-y-3 pl-5">
                <li>Open GamePK → Member Center → Withdrawal.</li>
                <li>Add or select your JazzCash / Easypaisa account under My Cards.</li>
                <li>Enter the amount you want to withdraw.</li>
                <li>Confirm the request and wait for processing.</li>
                <li>Check your wallet after verification completes.</li>
              </ol>

              <h2 className="text-xl font-semibold text-white">Tips for faster payouts</h2>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Match wallet details carefully before submitting
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Keep your GamePK account verified
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Avoid peak-hour retries that create duplicate requests
                </li>
              </ul>

              <div className="pt-4">
                <ButtonLink href={DOWNLOAD_URL} external className="btn-shimmer">
                  Download &amp; Withdraw
                </ButtonLink>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={120}>
          <ImagePlaceholder
            src="/gamepk-pak.webp"
            alt="GamePK member center withdrawal options Pakistan"
            aspectRatio="portrait"
            objectFit="contain"
            className="mx-auto max-w-sm border-zinc-700 bg-zinc-950"
          />
        </AnimateIn>
      </div>
    </Container>
  );
}
