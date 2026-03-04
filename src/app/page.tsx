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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-bg-dark">
        {/* ── SVG Background Pattern ── */}
        <svg
          className="absolute inset-0 w-full h-full z-0 opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="heroGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#heroGrid)"
            className="text-white"
          />
        </svg>

        {/* ── Fuel-Themed SVG Decorations ── */}

        {/* Animated Fuel Gauge — top left */}
        <svg
          className="absolute top-8 left-8 w-36 h-36 z-1 opacity-15 hidden md:block"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gauge arc */}
          <path
            d="M20 90 A50 50 0 0 1 100 90"
            stroke="var(--primary-light)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Tick marks */}
          <line
            x1="22"
            y1="82"
            x2="30"
            y2="78"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="35"
            y1="52"
            x2="42"
            y2="55"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="60"
            y1="40"
            x2="60"
            y2="48"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="85"
            y1="52"
            x2="78"
            y2="55"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="98"
            y1="82"
            x2="90"
            y2="78"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* E and F labels */}
          <text
            x="18"
            y="100"
            fill="var(--accent)"
            fontSize="10"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            E
          </text>
          <text
            x="96"
            y="100"
            fill="var(--accent)"
            fontSize="10"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            F
          </text>
          {/* Animated needle */}
          <line
            x1="60"
            y1="88"
            x2="60"
            y2="52"
            stroke="var(--accent-light)"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              transformOrigin: "60px 88px",
              animation: "gaugeNeedle 6s ease-in-out infinite",
            }}
          />
          <circle cx="60" cy="88" r="4" fill="var(--accent)" />
        </svg>

        {/* Self-Drawing Route Path — bottom left */}
        <svg
          className="absolute bottom-16 left-4 w-56 h-44 z-1 opacity-[0.12] hidden md:block"
          viewBox="0 0 240 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Route line that draws itself */}
          <path
            d="M20 160 C20 120, 60 100, 80 80 S120 20, 160 40 S200 80, 220 30"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="600"
            style={{ animation: "drawRoute 4s ease-in-out infinite" }}
            fill="none"
          />
          {/* Location pin at start */}
          <circle
            cx="20"
            cy="160"
            r="5"
            fill="var(--accent)"
            fillOpacity="0.6"
          />
          <circle cx="20" cy="160" r="2" fill="white" fillOpacity="0.8" />
          {/* Location pin at end */}
          <circle
            cx="220"
            cy="30"
            r="5"
            fill="var(--primary-light)"
            fillOpacity="0.6"
          />
          <circle cx="220" cy="30" r="2" fill="white" fillOpacity="0.8" />
          {/* Waypoints */}
          <circle
            cx="80"
            cy="80"
            r="3"
            fill="var(--accent-light)"
            fillOpacity="0.4"
          />
          <circle
            cx="160"
            cy="40"
            r="3"
            fill="var(--accent-light)"
            fillOpacity="0.4"
          />
        </svg>

        {/* Fuel Drop with Fill Animation — top right area */}
        <svg
          className="absolute top-16 right-[40%] w-14 h-20 z-1 opacity-20 hidden lg:block"
          viewBox="0 0 50 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Drop outline */}
          <path
            d="M25 5 C25 5, 5 30, 5 45 A20 20 0 0 0 45 45 C45 30, 25 5, 25 5Z"
            stroke="var(--accent)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Filling liquid */}
          <path
            d="M25 5 C25 5, 5 30, 5 45 A20 20 0 0 0 45 45 C45 30, 25 5, 25 5Z"
            fill="var(--accent)"
            fillOpacity="0.3"
            style={{ animation: "fuelFill 4s ease-in-out infinite" }}
          />
        </svg>

        {/* Dripping drops below fuel drop */}
        <div
          className="absolute top-36 right-[41%] z-1 opacity-15 hidden lg:block"
          style={{ animation: "fuelDripFall 2.5s ease-in infinite" }}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 0 C4 0, 0 5, 0 7.5 A4 4 0 0 0 8 7.5 C8 5, 4 0, 4 0Z"
              fill="var(--accent)"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <div
          className="absolute top-36 right-[41.5%] z-1 opacity-10 hidden lg:block"
          style={{ animation: "fuelDripFall 2.5s ease-in 1.2s infinite" }}
        >
          <svg
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 0 C3 0, 0 3.8, 0 5.6 A3 3 0 0 0 6 5.6 C6 3.8, 3 0, 3 0Z"
              fill="var(--accent)"
              fillOpacity="0.4"
            />
          </svg>
        </div>

        {/* Speedometer Arc — center right area */}
        <svg
          className="absolute top-1/3 right-[36%] w-20 h-20 z-1 opacity-[0.12] hidden lg:block"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 65 A35 35 0 0 1 70 65"
            stroke="var(--primary-light)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="220"
            style={{ animation: "speedPulse 3s ease-in-out infinite" }}
          />
          <circle cx="40" cy="65" r="2" fill="var(--accent)" />
        </svg>

        {/* Road Line with Truck — bottom area */}
        <div className="absolute bottom-28 left-[10%] right-[10%] z-1 opacity-[0.08] hidden lg:block overflow-hidden">
          <svg
            width="100%"
            height="30"
            viewBox="0 0 800 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Road */}
            <line
              x1="0"
              y1="22"
              x2="800"
              y2="22"
              stroke="var(--primary-light)"
              strokeWidth="2"
            />
            {/* Dashed center line */}
            <line
              x1="0"
              y1="18"
              x2="800"
              y2="18"
              stroke="var(--accent)"
              strokeWidth="1"
              strokeDasharray="20 15"
            />
          </svg>
          {/* Animated truck */}
          <svg
            className="absolute top-0 w-8 h-6"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: "vehicleDrive 8s linear infinite" }}
          >
            <rect
              x="0"
              y="6"
              width="20"
              height="12"
              rx="2"
              fill="var(--primary-light)"
              fillOpacity="0.6"
            />
            <rect
              x="20"
              y="9"
              width="10"
              height="9"
              rx="1"
              fill="var(--accent)"
              fillOpacity="0.5"
            />
            <circle
              cx="7"
              cy="20"
              r="3"
              fill="var(--accent)"
              fillOpacity="0.7"
            />
            <circle
              cx="25"
              cy="20"
              r="3"
              fill="var(--accent)"
              fillOpacity="0.7"
            />
          </svg>
        </div>

        {/* Fuel Pump Nozzle Silhouette — right side */}
        <svg
          className="absolute bottom-20 right-8 w-24 h-28 z-1 opacity-[0.06] hidden md:block"
          viewBox="0 0 80 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="30"
            width="35"
            height="60"
            rx="4"
            stroke="var(--primary-light)"
            strokeWidth="1.5"
          />
          <rect
            x="18"
            y="40"
            width="19"
            height="12"
            rx="2"
            stroke="var(--accent)"
            strokeWidth="1"
          />
          <path
            d="M45 45 L55 35 L55 15 L65 15"
            stroke="var(--primary-light)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle
            cx="65"
            cy="15"
            r="4"
            stroke="var(--accent)"
            strokeWidth="1"
            fill="none"
          />
          <rect
            x="10"
            y="85"
            width="35"
            height="5"
            rx="2"
            fill="var(--primary-light)"
            fillOpacity="0.3"
          />
        </svg>

        {/* ── Gradient Orbs ── */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-light/10 blur-[120px] z-1" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] z-1" />

        {/* ── Main Content Grid ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left — Text Content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-orange-200 text-xs font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                Built for Sri Lankan fleets
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Fuel<span className="text-accent">Track</span>{" "}
                <span className="text-primary-light">LK</span>
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 font-medium mb-3">
                Fleet fuel and trip logging for Sri Lankan fleets (3–30
                vehicles)
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
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-dark bg-white rounded-xl btn-shimmer hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/20"
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

              {/* Mini stats row */}
              <div className="flex gap-8 mt-10">
                {[
                  { val: "3–30", label: "Vehicles" },
                  { val: "<1 min", label: "Per Entry" },
                  { val: "Weekly", label: "Reports" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-extrabold text-accent">
                      {s.val}
                    </div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Split Image with Gap */}
            <div
              className="relative hidden lg:block animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div
                className="relative w-full max-w-lg mx-auto"
                style={{ height: "520px" }}
              >
                {/* Top-right image panel — shows top half of image */}
                <div className="absolute top-0 right-0 w-[58%] h-[46%] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 z-10">
                  <div
                    className="absolute inset-0"
                    style={{ height: "217%", top: "0" }}
                  >
                    <Image
                      src="/images/hero-fleet.png"
                      alt="Fleet vehicles — top half"
                      fill
                      className="object-cover"
                      priority
                      quality={90}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-dark/20 z-10" />
                </div>

                {/* Bottom-left image panel — shows bottom half of same image */}
                <div className="absolute bottom-0 left-0 w-[58%] h-[46%] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 z-10">
                  <div
                    className="absolute inset-0"
                    style={{ height: "217%", bottom: "0", top: "auto" }}
                  >
                    <Image
                      src="/images/hero-fleet.png"
                      alt="Fleet vehicles — bottom half"
                      fill
                      className="object-cover object-bottom"
                      priority
                      quality={90}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-bg-dark/20 z-10" />
                </div>

                {/* ── Decorative elements in the gap ── */}

                {/* Accent half-circle */}
                <div className="absolute top-[42%] right-[2%] w-16 h-16 rounded-full border-2 border-accent/40 z-20" />

                {/* X marks */}
                <svg
                  className="absolute top-[18%] left-[38%] w-5 h-5 z-20 opacity-50"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="3"
                    y1="3"
                    x2="17"
                    y2="17"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="17"
                    y1="3"
                    x2="3"
                    y2="17"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  className="absolute bottom-[22%] right-[36%] w-4 h-4 z-20 opacity-40"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="3"
                    y1="3"
                    x2="17"
                    y2="17"
                    stroke="var(--primary-light)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="17"
                    y1="3"
                    x2="3"
                    y2="17"
                    stroke="var(--primary-light)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Corner bracket — top left of top image */}
                <svg
                  className="absolute -top-2 right-[40%] w-10 h-10 z-20 opacity-50"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 14V4a2 2 0 012-2h10"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Corner bracket — bottom right of bottom image */}
                <svg
                  className="absolute bottom-0 left-[40%] w-10 h-10 z-20 opacity-50"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 26v10a2 2 0 01-2 2H26"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Accent dots in gap */}
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
                </div>
                <div className="absolute top-[35%] left-[30%] z-20">
                  <div className="w-2 h-2 rounded-full bg-primary-light/50" />
                </div>
                <div className="absolute bottom-[32%] right-[28%] z-20">
                  <div className="w-2 h-2 rounded-full bg-accent/40" />
                </div>

                {/* Dashed diagonal line through the gap */}
                <svg
                  className="absolute inset-0 w-full h-full z-[5] opacity-[0.15]"
                  viewBox="0 0 500 520"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="420"
                    y1="220"
                    x2="80"
                    y2="300"
                    stroke="var(--accent)"
                    strokeWidth="1"
                    strokeDasharray="8 6"
                  />
                </svg>

                {/* Background accent shape — large half-circle */}
                <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-accent/10 z-0" />
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-2 border-primary-light/15 z-0" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Wave Divider ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40C240 80 480 90 720 70C960 50 1200 20 1440 40V100H0V40Z"
              fill="white"
            />
          </svg>
        </div>
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
