import type { Metadata } from "next";
import { ButtonLink, Container, ImagePlaceholder, SectionHeading } from "@/components/ui";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { createMetadata } from "@/lib/metadata";
import { DOWNLOAD_URL } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "GamePK Deposit — JazzCash & Easypaisa",
  description:
    "How to deposit on GamePK with JazzCash and Easypaisa. Fast, secure PKR top-ups for Pakistani players. Step-by-step GamePK deposit guide.",
  path: "/deposit",
  keywords: [
    "GamePK deposit",
    "GamePK JazzCash",
    "GamePK Easypaisa",
    "deposit GamePK Pakistan",
  ],
});

export default function DepositPage() {
  return (
    <Container as="main" className="py-16">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <AnimateIn>
            <SectionHeading
              title="GamePK Deposit Guide"
              subtitle="Add funds easily with JazzCash or Easypaisa — the fastest way to top up GamePK in Pakistan."
            />
          </AnimateIn>

          <AnimateIn delay={80}>
            <div className="mt-8 space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Looking for a simple <strong className="text-zinc-200">GamePK deposit</strong>{" "}
                method? GamePK supports local wallets so you can fund your account in PKR
                without complex bank transfers.
              </p>

              <h2 className="text-xl font-semibold text-white">How to deposit on GamePK</h2>
              <ol className="list-decimal space-y-3 pl-5">
                <li>Open GamePK and go to the Deposit section.</li>
                <li>
                  Choose <strong className="text-zinc-200">JazzCash</strong> or{" "}
                  <strong className="text-zinc-200">Easypaisa</strong>.
                </li>
                <li>Select a payment channel.</li>
                <li>Enter an amount between Rs 100 and Rs 50,000.</li>
                <li>Confirm and complete payment on your mobile wallet.</li>
              </ol>

              <h2 className="text-xl font-semibold text-white">Why JazzCash &amp; Easypaisa?</h2>
              <p>
                Just like other top gaming apps in Pakistan, GamePK focuses on wallets
                players already use daily. That means faster deposits, clearer records,
                and fewer payment failures.
              </p>

              <div className="pt-4">
                <ButtonLink href={DOWNLOAD_URL} external className="btn-shimmer">
                  Download &amp; Deposit
                </ButtonLink>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={120}>
          <ImagePlaceholder
            src="/gamepk-deposit.webp"
            alt="GamePK deposit JazzCash and Easypaisa payment screen"
            aspectRatio="portrait"
            objectFit="contain"
            className="mx-auto max-w-sm border-zinc-700 bg-zinc-950"
          />
        </AnimateIn>
      </div>
    </Container>
  );
}
