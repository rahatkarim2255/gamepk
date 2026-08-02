import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { CONTACT_EMAIL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact GamePK",
  description:
    "Get in touch with the GamePK team at gamepk.net.pk. Send us your questions, feedback, partnership inquiries, or content suggestions.",
  path: "/contact",
  keywords: ["contact GamePK", "GamePK support", "gamepk.net.pk contact"],
});

export default function ContactPage() {
  return (
    <Container as="article" className="py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Contact <span className="text-red-400">GamePK</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Have a question, partnership proposal, or content suggestion? We&apos;d
          love to hear from you. Reach out to the GamePK team and we&apos;ll get
          back to you as soon as possible.
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-lg font-semibold text-white">Email Us</h2>
            <p className="mt-2 text-zinc-400">
              For general inquiries, feedback, and partnerships:
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-red-400 hover:text-red-300"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-lg font-semibold text-white">Content Submissions</h2>
            <p className="mt-2 text-zinc-400 leading-relaxed">
              Are you a Pakistani gaming content creator or esports organizer?
              GamePK welcomes collaboration opportunities. Email us with your
              proposal and portfolio.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-lg font-semibold text-white">Website</h2>
            <p className="mt-2 text-zinc-400">
              Visit us at{" "}
              <a
                href="https://gamepk.net.pk"
                className="text-red-400 hover:text-red-300"
              >
                gamepk.net.pk
              </a>
            </p>
          </div>
        </div>

        <form
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8"
          action={`mailto:${CONTACT_EMAIL}`}
          method="POST"
          encType="text/plain"
        >
          <h2 className="text-lg font-semibold text-white">Send a Message</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
