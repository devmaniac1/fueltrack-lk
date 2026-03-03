import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "FuelTrack LK | Fleet Fuel & Trip Log for Small Fleets",
  description:
    "Track trips, fuel refuels, and weekly fleet costs in one place. Built for Sri Lankan fleets with 3–30 vehicles. Get the free fuel log template or book a demo.",
  keywords: [
    "fleet fuel log system Sri Lanka",
    "fuel tracking",
    "trip logging",
    "small fleet management",
  ],
  alternates: { canonical: "/" },
};

const homeFaq = [
  {
    question: "Is this GPS tracking?",
    answer:
      "No. FuelTrack LK focuses on logging and reporting, not live tracking. You record trips, fuel entries, and expenses — then review weekly summaries.",
  },
  {
    question: "Do drivers need technical skills?",
    answer:
      "No. It's built for quick entry. Drivers can log a trip in under a minute with a consistent format that works the same way every time.",
  },
  {
    question: "Can we start with a template?",
    answer:
      "Yes. Get the free fuel log template and use it to build your logging habit. Move to the full system when your fleet is ready.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-fleet.png"
          alt="Small delivery fleet vehicles parked in a yard at sunrise, tropical Sri Lanka setting"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark/90 via-primary/70 to-bg-dark/90 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-teal-200 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              Built for Sri Lankan fleets
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Fuel<span className="text-accent">Track</span>{" "}
              <span className="text-primary-light">LK</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 font-medium mb-3">
              Fleet fuel and trip logging for Sri Lankan fleets (3–30 vehicles)
            </p>
            <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
              Most small fleets lose money because fuel logs are inconsistent,
              receipts go missing, and weekly reporting turns into a messy
              spreadsheet job. FuelTrack LK keeps{" "}
              <Link
                href="/features"
                className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
              >
                trip logs
              </Link>
              , fuel entries, and basic expenses in one place so you can spot
              mismatches early and keep clean reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-a-demo"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-dark bg-white rounded-xl btn-shimmer hover:bg-teal-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/20"
              >
                Book a Demo
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/free-template"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300"
              >
                Free Fuel Log Template
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative floating shapes */}
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float z-10 hidden lg:block" />
        <div
          className="absolute top-20 right-40 w-24 h-24 rounded-full bg-primary-light/10 blur-2xl animate-float z-10 hidden lg:block"
          style={{ animationDelay: "2s" }}
        />
      </section>

      {/* ─── Problem Section ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <SectionHeading
                title="The real problems in small fleets"
                centered={false}
              />
              <p className="text-text-muted leading-relaxed mb-6 max-w-lg">
                When trip records and fuel records don&apos;t match, the owner
                only notices after the money is already spent. Drivers also end
                up using different formats, which makes weekly review hard.
              </p>
              <p className="text-text-muted leading-relaxed max-w-lg">
                FuelTrack LK is built around one consistent way of logging trips
                and fuel so the business can stay in control. See{" "}
                <Link
                  href="/how-it-works"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  how it works
                </Link>{" "}
                or check our{" "}
                <Link
                  href="/pricing"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  pricing
                </Link>
                .
              </p>
            </div>
            <div className="reveal-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/images/problem-receipts.png"
                  alt="Fleet manager reviewing messy fuel receipts and handwritten trip logs at a desk"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits Grid ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading
              title="Why fleets choose FuelTrack LK"
              subtitle="Simple tools that make daily logging easy and weekly reporting clear."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal delay-100">
              <FeatureCard
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
                title="Trip logs in under a minute"
                description="Record start, end, purpose, distance, and driver. Keep a searchable history per vehicle."
              />
            </div>
            <div className="reveal delay-200">
              <FeatureCard
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                }
                title="Fuel entries with proof"
                description="Log litres, cost, station, and optional receipt proof to reduce missing evidence."
              />
            </div>
            <div className="reveal delay-300">
              <FeatureCard
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                }
                title="Weekly reporting without Excel pain"
                description="See fuel spend by vehicle and unusual patterns without rebuilding reports every week."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Social Proof ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading
              title="Built for small teams, used like a routine"
              subtitle="FuelTrack LK is designed for fleets that want structure without enterprise complexity. Drivers can log quickly, and managers can review weekly in a clear format."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="reveal delay-100">
              <TestimonialCard
                quote="We stopped arguing about missing receipts because everything is logged the same way."
                author="Fleet Supervisor"
              />
            </div>
            <div className="reveal delay-200">
              <TestimonialCard
                quote="Weekly reporting is faster. We can check vehicle spend without digging through chats."
                author="Fleet Owner"
              />
            </div>
          </div>
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
            {[
              { num: "3–30", label: "Vehicles supported" },
              { num: "<1 min", label: "Per trip log entry" },
              { num: "100%", label: "Consistent format" },
              { num: "Weekly", label: "Clear reporting" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-bg-alt"
              >
                <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">
                  {stat.num}
                </div>
                <div className="text-xs text-text-muted font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mini FAQ ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading title="Quick answers" />
          </div>
          <div className="reveal delay-200">
            <FAQAccordion items={homeFaq} />
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <CTASection
        heading="Want to see how it fits your fleet size?"
        description="Book a demo and we'll walk through trip logging, fuel tracking, and weekly reporting for your fleet."
        primaryLabel="Book a Demo"
        primaryHref="/book-a-demo"
        secondaryLabel="Free Fuel Log Template"
        secondaryHref="/free-template"
      />
    </>
  );
}
