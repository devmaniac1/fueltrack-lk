import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { event } from "@/lib/gtag";

export const metadata: Metadata = {
  title: "Features – Fuel Tracking App for Small Fleets | FuelTrack LK",
  description:
    "FuelTrack LK is a fleet fuel management system with vehicle fuel tracking, trip logging, fuel entries with receipt proof, and weekly fleet reporting. Built for small fleets.",
  keywords: [
    "fuel tracking app for small fleets",
    "fleet fuel management system",
    "vehicle fuel tracking",
    "weekly fleet reporting",
    "trip logging system",
    "receipt proof",
  ],
  alternates: { canonical: "/features" },
};

const highlights = [
  {
    title: "Trip Logs",
    subtitle: "Fast & consistent",
    description:
      "One format for every driver, so records are comparable and easy to review weekly.",
    icon: (
      <svg
        className="w-6 h-6"
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
    title: "Fuel Entries",
    subtitle: "With receipt proof",
    description:
      "Litres, cost, station, and optional receipt capture to keep records transparent.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
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
    ),
  },
  {
    title: "Weekly Summary",
    subtitle: "Clear view",
    description:
      "Spot unusual changes early, before they become a habit, with vehicle-level weekly reports.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const alsoIncludes = [
  {
    label: "Basic expenses",
    desc: "Tolls, parking, repairs — all in one place",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    label: "Driver assignment",
    desc: "Per vehicle tracking with accountability",
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    label: "Exportable logs",
    desc: "Download for accounting and audits",
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
    label: "Simple notes",
    desc: "Exceptions and special trip notes",
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
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: "#111111" }}
      >
        {/* Decorative elements */}
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

        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full z-0 opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="featGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#featGrid)" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-6">
              What&apos;s included
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Fuel Tracking App <br className="hidden md:block" />
              <span className="text-primary-light">for Small Fleets</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
              FuelTrack LK is a fleet fuel management system designed for small
              and growing fleets. It helps businesses record fuel entries, track
              vehicle trips, and generate weekly fleet reporting — all in one
              consistent platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-a-demo"
                className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
                onClick={() => {
                  event({
                    action: "click",
                    category: "CTA",
                    label: "Book a Demo",
                  });
                }}
              >
                Book a Demo
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white border border-white/15 rounded-full hover:bg-white/5 transition-all duration-300"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3 Highlight Cards ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="reveal group relative rounded-2xl p-8 border border-border bg-white hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/8 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {h.icon}
                </div>
                {/* Subtitle tag */}
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary/60 mb-2 block">
                  {h.subtitle}
                </span>
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
                  {h.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {h.description}
                </p>
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/3 rounded-full group-hover:bg-primary/6 transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Detailed Features (Alternating) ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4 space-y-24">
          {/* Feature 1: Trip logs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Core Feature
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-text mb-5 leading-tight">
                Trip logging system per vehicle
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                A reliable trip logging system ensures every driver records
                trips the same way. FuelTrack LK uses one consistent format so
                each trip includes start, end, purpose, distance, and driver —
                keeping reporting fair and searchable across your fleet.
              </p>
              <ul className="space-y-3">
                {[
                  "Start & end location",
                  "Purpose & distance",
                  "Driver assignment",
                  "Searchable history",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-text-muted"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 reveal-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
                <Image
                  src="/images/fuel-receipt.png"
                  alt="Driver at fuel station capturing receipt with phone camera"
                  width={600}
                  height={338}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Accountability
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-text mb-5 leading-tight">
                Vehicle fuel tracking with receipt proof
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                Accurate vehicle fuel tracking depends on consistent fuel
                entries. Record litres, cost, station, date, and attach receipt
                proof when needed. This approach reduces missing receipts and
                keeps fuel records transparent without creating a blame culture.
              </p>
              <ul className="space-y-3">
                {[
                  "Litres & cost tracking",
                  "Station & date records",
                  "Receipt photo capture",
                  "Transparent reporting",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-text-muted"
                  >
                    <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3: Weekly summaries */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Reporting
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-text mb-5 leading-tight">
                Weekly fleet reporting you can use
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                At the end of the week you should be able to answer simple
                questions: which vehicle spent the most, what changed, and what
                looks unusual. FuelTrack LK provides weekly fleet reporting so
                you don&apos;t rebuild spreadsheets repeatedly. Learn more about
                how the{" "}
                <Link
                  href="/"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  fleet fuel log system works on the homepage
                </Link>
                .
              </p>
              <ul className="space-y-3">
                {[
                  "Vehicle-level breakdown",
                  "Spend comparisons",
                  "Anomaly detection",
                  "No Excel needed",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-text-muted"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="reveal text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
              And more
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight">
              Also <span className="text-primary">included</span>
            </h2>
            <p className="text-text-muted text-base mt-3 max-w-lg mx-auto">
              Extra features that keep your fleet operations running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 reveal">
            {alsoIncludes.map((item) => (
              <div
                key={item.label}
                className="group relative p-6 rounded-2xl border border-border bg-white hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="font-bold text-text text-sm mb-1.5 group-hover:text-primary transition-colors">
                  {item.label}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
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
