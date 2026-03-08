import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

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

const steps = [
  {
    num: "01",
    title: "We receive your request",
    desc: "Your form is reviewed within 24 hours.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We prepare your demo",
    desc: "We tailor the walkthrough to your fleet size and current tracking method.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "You see it in action",
    desc: "Trip logging, fuel entry, and weekly reporting — shown for your specific use case.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function BookDemoPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: "#111111" }}
      >
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div
            className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
              background: "rgba(10, 106, 182, 0.08)",
              filter: "blur(120px)",
            }}
          />
          <div
            className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full"
            style={{
              background: "rgba(245, 158, 11, 0.05)",
              filter: "blur(100px)",
            }}
          />
        </div>
        <svg
          className="absolute inset-0 w-full h-full z-0 opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="demoGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#demoGrid)" />
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-6">
              Get started
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Book a demo or get <br className="hidden md:block" />
              <span className="text-primary-light">the free template</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Fill the form below. We reply within 24–48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Form Section ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="reveal">
            <div className="bg-white rounded-2xl shadow-xl shadow-primary/5 p-6 md:p-10 border border-border">
              <p className="text-sm text-text-muted mb-6">
                Choose &quot;Demo&quot;, &quot;Template&quot;, or
                &quot;Both&quot; in the form. If the embed doesn&apos;t load,
                use the{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe1d5RBx2oYQsszrrdbj2-I5GGzwclTuXaC6Nkb86X305TZLw/viewform"
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
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe1d5RBx2oYQsszrrdbj2-I5GGzwclTuXaC6Nkb86X305TZLw/viewform?embedded=true"
                  width="100%"
                  height="1486"
                  className="w-full"
                  title="FuelTrack LK Demo Request Form"
                >
                  Loading form…
                </iframe>
              </div>
              <p className="mt-4 text-xs text-text-muted text-center">
                If the form does not load,{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe1d5RBx2oYQsszrrdbj2-I5GGzwclTuXaC6Nkb86X305TZLw/viewform"
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

      {/* ─── What Happens Next — Timeline ─── */}
      <section className="py-20 md:py-28 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4">
          <div className="reveal text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight">
              What happens <span className="text-primary">next</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="group relative bg-white rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-primary/50 tracking-widest mb-1 block">
                  STEP {step.num}
                </span>
                <h3 className="font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Info ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center reveal">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-bg-alt">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-text-muted">Prefer email?</p>
              <a
                href="mailto:hello@fueltracklk.com"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                hello@fueltracklk.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ — Two Column ─── */}
      <section className="py-20 md:py-28 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
            <div className="reveal">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight mb-4">
                Demo <span className="text-primary">questions</span>
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Everything you need to know before booking a demo.
              </p>
            </div>
            <div className="reveal">
              <FAQAccordion items={demoFaq} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Internal Links ─── */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center reveal">
          <p className="text-text-muted mb-5 text-sm">
            Want to learn more before booking?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/features", label: "See Features" },
              { href: "/pricing", label: "See Pricing" },
              { href: "/resources", label: "Read Resources" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary border border-primary/20 rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
