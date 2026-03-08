import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple plans based on fleet size. Built for fleets with 3–30 vehicles. Book a demo to choose the right plan for your weekly trip volume.",
  keywords: [
    "fleet management pricing Sri Lanka",
    "small fleet pricing",
    "fuel tracking cost",
  ],
  alternates: { canonical: "/pricing" },
};

const plans = [
  {
    name: "Starter",
    vehicleRange: "3–5 vehicles",
    features: [
      "Trip logs per vehicle",
      "Fuel entries",
      "Weekly summary",
      "Basic export (CSV)",
      "Email support",
    ],
  },
  {
    name: "Standard",
    vehicleRange: "6–15 vehicles",
    features: [
      "Everything in Starter",
      "Receipt proof tracking",
      "Driver activity logs",
      "Vehicle-level weekly analysis",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    vehicleRange: "16–30 vehicles",
    features: [
      "Everything in Standard",
      "Fleet-wide dashboard view",
      "Monthly exports & reports",
      "Onboarding support",
      "Dedicated account manager",
    ],
  },
];

const pricingFaq = [
  {
    question: "Do you show pricing on the site?",
    answer:
      "Pricing can vary based on fleet size and reporting needs. The demo includes a clear plan suggestion tailored to your specific requirements.",
  },
  {
    question: "Is this GPS tracking?",
    answer:
      "No. FuelTrack LK is for logging and reporting. It doesn't track live vehicle locations.",
  },
  {
    question: "Can we start small and upgrade?",
    answer:
      "Yes. Start with the Starter plan and move up as your fleet grows. Upgrading is seamless without losing any data.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We offer a free fuel log template to get started. Book a demo and we can discuss trial options for your fleet size.",
  },
];

const includedFeatures = [
  {
    label: "Clean logs per vehicle",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    label: "Consistent entry format",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    label: "Export option",
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
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    label: "Basic support",
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
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: "#111111" }}
      >
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div
            className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
              background: "rgba(10, 106, 182, 0.08)",
              filter: "blur(120px)",
            }}
          />
          <div
            className="absolute bottom-[-20%] right-[-5%] w-[400px] h-[400px] rounded-full"
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
              id="prGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#prGrid)" />
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-6">
              Plans & pricing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Simple plans for <br className="hidden md:block" />
              <span className="text-primary-light">every fleet size</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              FuelTrack LK pricing is based on fleet size so small businesses
              don&apos;t pay for enterprise complexity.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Pricing Cards ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className="reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-muted mt-10 reveal">
            Not sure which plan? Book a demo and we&apos;ll recommend based on
            your weekly trip volume.
          </p>
        </div>
      </section>

      {/* ─── What's Included ─── */}
      <section className="py-20 md:py-28 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-4">
          <div className="reveal text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
              Every plan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight">
              What&apos;s <span className="text-primary">included</span> in
              every plan
            </h2>
            <p className="text-text-muted text-base mt-3 max-w-lg mx-auto">
              Core features available across all tiers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 reveal">
            {includedFeatures.map((item) => (
              <div
                key={item.label}
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ — Two Column ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
            <div className="reveal">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight mb-4">
                Pricing <span className="text-primary">questions</span>
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Common questions about plans and pricing.
              </p>
            </div>
            <div className="reveal">
              <FAQAccordion items={pricingFaq} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        heading="Not sure which plan fits?"
        description="Book a demo and we'll recommend a plan based on your fleet size and reporting needs."
        primaryLabel="Book a Demo"
        primaryHref="/book-a-demo"
      />
    </>
  );
}
