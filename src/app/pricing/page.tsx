import type { Metadata } from "next";
import Image from "next/image";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

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

export default function PricingPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/pricing-header.png"
          alt="Clean desk with calculator, notebook, and laptop showing analytics dashboard"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark/90 via-primary/70 to-bg-dark/85 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Pricing
            </h1>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              Simple plans based on fleet size. No unnecessary add-ons.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center reveal">
          <p className="text-text-muted text-lg leading-relaxed">
            FuelTrack LK pricing is based on fleet size so small businesses
            don&apos;t pay for enterprise complexity. If you are unsure, book a
            demo and we&apos;ll recommend a plan based on your weekly trip
            volume and reporting needs.
          </p>
        </div>
      </section>

      {/* ─── Pricing Cards ─── */}
      <section className="py-12 md:py-16 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <div key={plan.name} className={`reveal delay-${(i + 1) * 100}`}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What's Included ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading
              title="What's included in every plan"
              subtitle="Core features available across all tiers."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 reveal delay-200">
            {[
              { icon: "📋", label: "Clean logs per vehicle" },
              { icon: "✅", label: "Consistent entry format" },
              { icon: "📤", label: "Export option" },
              { icon: "💬", label: "Basic support" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-4 bg-bg-alt rounded-xl"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-text">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading title="Pricing questions" />
          </div>
          <div className="reveal delay-200">
            <FAQAccordion items={pricingFaq} />
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
