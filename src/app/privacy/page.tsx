import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "GamePK privacy policy for gamepk.net.pk. Learn how we collect, use, and protect your data when you visit our gaming website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container as="article" className="py-16">
      <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-4 text-zinc-500">Last updated: July 31, 2026</p>

      <div className="mt-10 max-w-3xl space-y-8 text-zinc-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white">Introduction</h2>
          <p className="mt-3">
            GamePK (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates gamepk.net.pk. This Privacy
            Policy explains how we collect, use, and safeguard information when you
            visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
          <p className="mt-3">We may collect the following types of information:</p>
          <ul className="mt-3 list-none space-y-2">
            {[
              "Usage data such as pages visited, time spent, and referring URLs",
              "Device information including browser type, operating system, and screen size",
              "Contact information you voluntarily provide via our contact form (name, email, message)",
              "Cookies and similar tracking technologies for analytics and site functionality",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">How We Use Information</h2>
          <p className="mt-3">We use collected information to:</p>
          <ul className="mt-3 list-none space-y-2">
            {[
              "Improve and personalize your experience on GamePK",
              "Analyze website traffic and user behavior",
              "Respond to your inquiries and feedback",
              "Maintain website security and prevent abuse",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Cookies</h2>
          <p className="mt-3">
            GamePK uses cookies to enhance your browsing experience. You can control
            cookie settings through your browser preferences. Disabling cookies may
            affect certain website features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
          <p className="mt-3">
            We may use third-party analytics services (such as Google Analytics) that
            collect anonymous usage data. These services have their own privacy policies
            governing data collection and use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <p className="mt-3">
            For privacy-related questions, contact us at{" "}
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
