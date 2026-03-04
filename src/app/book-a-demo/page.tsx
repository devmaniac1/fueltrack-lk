import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a demo of FuelTrack LK. See trip logging, fuel entry, and weekly reporting in action. Built for Sri Lankan fleets with 3–30 vehicles.",
  keywords: [
    "book fleet fuel tracking demo",
    "FuelTrack demo",
    "fleet management demo",
  ],
  alternates: { canonical: "/book-a-demo" },
};

const demoFaq = [
  {
    question: "What happens during the demo?",
    answer:
      "We walk through trip logging, fuel entry, and weekly reporting based on your fleet size. It's a focused session — no long sales pitch.",
  },
  {
    question: "How long does the demo take?",
    answer:
      "About 15–20 minutes. We keep it focused on what matters for your fleet size and use case.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "No. Just know your approximate fleet size and how you currently track trips and fuel. We handle the rest.",
  },
  {
    question: "Is the template really free?",
    answer:
      "Yes. The fuel log template is free with no obligations. Use it as long as you need and switch to FuelTrack LK when ready.",
  },
];

export default function BookDemoPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="py-16 md:py-20 gradient-bg-animated">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Book a demo or get the free template
            </h1>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              Fill the form below. We reply within 24–48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Form Section ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="reveal">
            <div className="bg-white rounded-2xl shadow-xl shadow-primary/5 p-6 md:p-8 border border-border">
              <p className="text-sm text-text-muted mb-6">
                Choose &quot;Demo&quot;, &quot;Template&quot;, or
                &quot;Both&quot; in the form. If the embed doesn&apos;t load,
                use the{" "}
                <a
                  href="https://forms.gle/YOUR_FORM_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  direct link
                </a>
                .
              </p>
              <div className="rounded-xl overflow-hidden border border-border bg-bg-alt">
                <iframe
                  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                  width="100%"
                  height="900"
                  className="w-full"
                  title="FuelTrack LK Demo Request Form"
                >
                  Loading form…
                </iframe>
              </div>
              <p className="mt-4 text-xs text-text-muted text-center">
                If the form does not load,{" "}
                <a
                  href="https://forms.gle/YOUR_FORM_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  open it here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Happens Next ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading title="What happens next" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto reveal delay-200">
            {[
              {
                num: "1",
                title: "We receive your request",
                desc: "Your form is reviewed within 24 hours.",
              },
              {
                num: "2",
                title: "We prepare your demo",
                desc: "We tailor the walkthrough to your fleet size and current tracking method.",
              },
              {
                num: "3",
                title: "You see it in action",
                desc: "Trip logging, fuel entry, and weekly reporting — shown for your specific use case.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="text-center p-8 bg-white rounded-2xl card-hover"
              >
                <div className="w-10 h-10 rounded-full gradient-bg-animated flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-text mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Info ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 text-center reveal">
          <p className="text-text-muted mb-2">Prefer email?</p>
          <a
            href="mailto:hello@fueltracklk.com"
            className="text-primary font-semibold text-lg hover:text-primary-dark transition-colors"
          >
            hello@fueltracklk.com
          </a>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading title="Demo FAQs" />
          </div>
          <div className="reveal delay-200">
            <FAQAccordion items={demoFaq} />
          </div>
        </div>
      </section>

      {/* ─── Internal Links ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center reveal">
          <p className="text-text-muted mb-4">
            Want to learn more before booking?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/features"
              className="px-6 py-2.5 text-sm font-semibold text-primary border-2 border-primary/30 rounded-xl hover:border-primary hover:bg-primary/5 transition-all"
            >
              See Features
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-2.5 text-sm font-semibold text-primary border-2 border-primary/30 rounded-xl hover:border-primary hover:bg-primary/5 transition-all"
            >
              See Pricing
            </Link>
            <Link
              href="/resources"
              className="px-6 py-2.5 text-sm font-semibold text-primary border-2 border-primary/30 rounded-xl hover:border-primary hover:bg-primary/5 transition-all"
            >
              Read Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
