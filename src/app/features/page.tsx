import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Trip logs, fuel entries with receipt proof, basic expense tracking, and weekly summaries by vehicle. Built for small fleets that need clean reporting.",
  keywords: [
    "fuel tracking app for small fleets",
    "trip log features",
    "fleet fuel features",
  ],
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/features-header.png"
          alt="Laptop and phone showing fleet trip log and fuel dashboard interface"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark/90 via-primary/70 to-bg-dark/85 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Features
            </h1>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
              Everything you need to track trips, fuel, and weekly fleet costs
              without messy spreadsheets.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center reveal">
            <p className="text-text-muted text-lg leading-relaxed">
              FuelTrack LK is built for small fleets that need consistency.
              Drivers can log trips and refuels quickly, while owners and
              supervisors can review weekly spend per vehicle without chasing
              paper.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3 Highlight Cards ─── */}
      <section className="py-12 md:py-16 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                }
                title="Trip logs (fast + consistent)"
                description="One format for every driver, so records are comparable and easy to review weekly."
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
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
                title="Fuel entries (with receipt proof)"
                description="Litres, cost, station, and optional receipt capture to keep records transparent."
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
                title="Weekly summary (clear view)"
                description="Spot unusual changes early, before they become a habit, with vehicle-level weekly reports."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Detailed Features (Alternating) ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 space-y-20">
          {/* Feature 1: Trip logs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Core Feature
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">
                Trip logs per vehicle
              </h3>
              <p className="text-text-muted leading-relaxed">
                Trips often get recorded differently by different drivers.
                FuelTrack LK uses one consistent format so each trip includes
                start, end, purpose, distance, and driver. That keeps reporting
                fair and searchable.
              </p>
            </div>
            <div className="reveal-right">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10">
                <Image
                  src="/images/trip-log-driver.png"
                  alt="Driver entering trip log data on a smartphone inside a vehicle"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Fuel tracking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 reveal-left">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10">
                <Image
                  src="/images/fuel-receipt.png"
                  alt="Driver at fuel station capturing receipt with phone camera"
                  width={600}
                  height={338}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 reveal-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Accountability
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">
                Fuel tracking with receipt proof
              </h3>
              <p className="text-text-muted leading-relaxed">
                Fuel entries work best when they follow the same routine. Record
                litres, cost, station, date, and attach proof when needed. This
                reduces missing receipts without creating a blame culture.
              </p>
            </div>
          </div>

          {/* Feature 3: Weekly summaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Reporting
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">
                Weekly summaries you can use
              </h3>
              <p className="text-text-muted leading-relaxed">
                At the end of the week you should be able to answer simple
                questions: which vehicle spent the most, what changed, and what
                looks unusual. FuelTrack LK gives a weekly view so you
                don&apos;t rebuild spreadsheets repeatedly.
              </p>
            </div>
            <div className="reveal-right">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10">
                <Image
                  src="/images/weekly-summary.png"
                  alt="Fleet owner reviewing weekly fuel summary on laptop with charts"
                  width={600}
                  height={338}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Also Includes ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading
              title="Also included"
              subtitle="Extra features that keep your fleet operations running smoothly."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 reveal delay-200">
            {[
              {
                icon: "💰",
                label: "Basic expenses",
                desc: "Tolls, parking, repairs",
              },
              {
                icon: "👤",
                label: "Driver assignment",
                desc: "Per vehicle tracking",
              },
              { icon: "📊", label: "Exportable logs", desc: "For accounting" },
              { icon: "📝", label: "Simple notes", desc: "For exceptions" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-xl bg-white card-hover"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-text text-sm mb-1">
                  {item.label}
                </h4>
                <p className="text-xs text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        heading="Ready to see it in action?"
        description="Book a demo and we'll show you how trip logging, fuel tracking, and reporting work for your fleet size."
        primaryLabel="Book a Demo"
        primaryHref="/book-a-demo"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
