import { AnimateIn } from "@/components/ui/AnimateIn";
import { Container, SectionHeading } from "@/components/ui";

type Faq = { question: string; answer: string };

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Quick answers for Pakistani GamePK players.",
}: {
  faqs: Faq[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="border-t border-zinc-800/80 py-16" aria-labelledby="faq-heading">
      <Container>
        <AnimateIn>
          <SectionHeading id="faq-heading" title={title} subtitle={subtitle} />
        </AnimateIn>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <AnimateIn key={faq.question} delay={i * 40}>
              <details className="group rounded-xl border border-zinc-800 bg-zinc-900/40 open:border-red-600/30 open:bg-zinc-900/70">
                <summary className="cursor-pointer list-none px-5 py-4 text-left text-base font-semibold text-white marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-zinc-500 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-zinc-800 px-5 py-4 text-sm leading-relaxed text-zinc-400">
                  {faq.answer}
                </p>
              </details>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
