import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "GamePK terms of service for gamepk.net.pk. Read the terms and conditions for using Pakistan's premier gaming platform.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container as="article" className="py-16">
      <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mt-4 text-zinc-500">Last updated: July 31, 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-zinc-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white">Acceptance of Terms</h2>
          <p className="mt-3">
            By accessing and using gamepk.net.pk (&quot;GamePK&quot;), you agree to be bound
            by these Terms of Service. If you do not agree, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Use of Content</h2>
          <p className="mt-3">
            All content on GamePK — including articles, guides, reviews, and graphics — is
            protected by copyright. You may share links to our content with proper
            attribution. Reproduction, redistribution, or commercial use without written
            permission is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">User Conduct</h2>
          <p className="mt-3">When using GamePK, you agree not to:</p>
          <ul className="mt-3 list-none space-y-2">
            {[
              "Submit false or misleading information through contact forms",
              "Attempt to gain unauthorized access to our systems",
              "Use automated tools to scrape content without permission",
              "Engage in any activity that disrupts or harms the website",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Disclaimer</h2>
          <p className="mt-3">
            GamePK content is provided for informational purposes. While we strive for
            accuracy, we make no warranties about completeness or reliability. Gaming
            guides reflect conditions at time of publication — always verify in-game
            before making decisions based on our content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
          <p className="mt-3">
            GamePK shall not be liable for any indirect, incidental, or consequential
            damages arising from your use of the website or reliance on its content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Changes to Terms</h2>
          <p className="mt-3">
            We reserve the right to modify these terms at any time. Continued use of
            GamePK after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3">
            Questions about these terms? Email{" "}
            <a href="mailto:hello@gamepk.net.pk" className="text-red-400 hover:text-red-300">
              hello@gamepk.net.pk
            </a>
            .
          </p>
        </section>
      </div>
    </Container>
  );
}
