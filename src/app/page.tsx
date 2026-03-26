import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import AnimatedStats from "@/components/AnimatedStats";
import TrackedDemoLink from "@/components/TrackedDemoLink";

export const metadata: Metadata = {
  title: "FuelTrack LK – Fleet Fuel Log System for Small Fleets",
  description:
    "FuelTrack LK is a fleet fuel log system for small fleets. Track trips, fuel refuels, and weekly fleet costs in one place. Built for Sri Lankan fleets with 3–30 vehicles.",
  keywords: [
    "fleet fuel log system",
    "fuel tracking app for fleets",
    "trip log system",
    "fleet expense tracker",
    "small fleet management Sri Lanka",
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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-linear-to-br from-white via-bg-alt to-primary/5">
        {/* ── Subtle Background Pattern ── */}
        <svg
          className="absolute inset-0 w-full h-full z-0 opacity-[0.04]"
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
            className="text-primary"
          />
        </svg>

        {/* ── Soft Gradient Orbs ── */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] z-0" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] z-0" />

        {/* ── Main Content Grid ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            {/* Left — Text Content */}
            <div className="animate-fade-in-up text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg border border-primary/20 text-primary text-xs font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                Built for Sri Lankan fleets
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text leading-tight mb-4">
                Fleet Fuel Log System{" "}
                <span className="text-primary">for Small</span>{" "}
                <span className="text-accent">Fleets</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-text-muted font-medium mb-3">
                Track trips, fuel, and fleet expenses for Sri Lankan fleets
                (3–30 vehicles)
              </p>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                FuelTrack LK is a fleet fuel log system designed for small and
                growing fleets. This fuel tracking app for fleets allows
                businesses to record trips, monitor fuel expenses, and generate
                weekly fleet reports in one place. Explore all platform
                capabilities on the{" "}
                <Link
                  href="/features"
                  className="text-primary font-semibold hover:text-primary-dark underline underline-offset-2 transition-colors"
                >
                  Features page
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <TrackedDemoLink
                  href="/book-a-demo"
                  location="hero_section"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-xl btn-shimmer hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20"
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
                </TrackedDemoLink>
                <Link
                  href="/free-template"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary border-2 border-primary/30 rounded-xl hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                >
                  Free Fuel Log Template
                </Link>
              </div>

              {/* Mini stats row */}
              <div className="flex gap-8 mt-10 justify-center lg:justify-start">
                {[
                  { val: "3–30", label: "Vehicles" },
                  { val: "<1 min", label: "Per Entry" },
                  { val: "Weekly", label: "Reports" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-extrabold text-primary">
                      {s.val}
                    </div>
                    <div className="text-[11px] text-text-muted uppercase tracking-wider font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image with Accent Blob */}
            <div
              className="relative animate-fade-in order-1 lg:order-2"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto h-[320px] sm:h-[380px] md:h-[460px] lg:h-[640px]">
                {/* Soft background blob */}
                <div className="absolute top-[15%] left-[10%] w-[80%] h-[80%] rounded-full bg-primary/6 blur-[60px] z-0" />

                {/* Dashboard — large, center-left */}
                <div
                  className="absolute z-10"
                  style={{ top: "5%", right: "0%", width: "100%" }}
                >
                  <Image
                    src="/assets/Dahboard.png"
                    alt="FuelTrack LK dashboard on laptop"
                    width={700}
                    height={500}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Chart — top right */}
                <div
                  className="absolute z-20"
                  style={{ top: "0%", right: "0%", width: "40%" }}
                >
                  <Image
                    src="/assets/Chart.png"
                    alt="Fuel analytics chart"
                    width={300}
                    height={220}
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>

                {/* Blue Drop — top center */}
                <div
                  className="absolute z-30"
                  style={{ top: "10%", left: "42%", width: "12%" }}
                >
                  <Image
                    src="/assets/Blue Drop.png"
                    alt="Fuel drop icon"
                    width={120}
                    height={160}
                    className="w-full h-auto drop-shadow-lg"
                  />
                </div>

                {/* Amber Drop — mid left */}
                <div
                  className="absolute z-30"
                  style={{ top: "25%", left: "0%", width: "10%" }}
                >
                  <Image
                    src="/assets/Amber Drop.png"
                    alt="Amber fuel drop"
                    width={100}
                    height={140}
                    className="w-full h-auto drop-shadow-lg"
                  />
                </div>

                {/* Van — bottom center, overlapping dashboard */}
                <div
                  className="absolute z-20"
                  style={{ bottom: "-5%", left: "0%", width: "60%" }}
                >
                  <Image
                    src="/assets/Van.png"
                    alt="Delivery fleet van"
                    width={500}
                    height={320}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>

                {/* Receipt — bottom right */}
                <div
                  className="absolute z-10"
                  style={{ bottom: "5%", right: "0%", width: "40%" }}
                >
                  <Image
                    src="/assets/Reciept.png"
                    alt="Fuel receipt"
                    width={280}
                    height={340}
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll Down Indicator ── */}
        <a
          href="#problems"
          className="scroll-indicator"
          aria-label="Scroll down"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-medium text-text-muted tracking-widest uppercase">
              Scroll
            </span>
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </a>

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
              fill="#111111"
            />
          </svg>
        </div>
      </section>

      {/* ─── Problem Section ─── */}
      <section
        id="problems"
        className="py-20 md:py-32"
        style={{ background: "#111111" }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="reveal mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              The real problems in{" "}
              <span className="text-accent">small fleets</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 reveal">
            When trip records and fuel records don&apos;t match, the owner only
            notices after the money is already spent.
          </p>

          {/* Tilted Cards */}
          <div className="problem-cards-wrapper reveal">
            {/* Card 1 */}
            <div className="problem-card">
              <div className="problem-card-icon">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Mismatched Records
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trip logs say one thing, fuel receipts say another. Owners only
                discover the gap after money is already lost.
              </p>
            </div>

            {/* Card 2 */}
            <div className="problem-card">
              <div className="problem-card-icon">
                <svg
                  className="w-7 h-7"
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
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Inconsistent Formats
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every driver uses a different format — WhatsApp messages, paper
                notes, photos. Weekly review becomes a puzzle.
              </p>
            </div>

            {/* Card 3 */}
            <div className="problem-card">
              <div className="problem-card-icon">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Lost Receipts
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fuel receipts vanish in pockets and dashboards. Without proof,
                there&apos;s no way to verify what was actually spent.
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm md:text-base mt-12 max-w-xl mx-auto reveal">
            FuelTrack LK gives your fleet one consistent way to log trips and
            fuel.{" "}
            <Link
              href="/how-it-works"
              className="text-accent font-semibold hover:text-accent-light underline underline-offset-2 transition-colors"
            >
              See how it works
            </Link>{" "}
            or check our{" "}
            <Link
              href="/pricing"
              className="text-accent font-semibold hover:text-accent-light underline underline-offset-2 transition-colors"
            >
              pricing
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─── Why Choose FuelTrack LK ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text leading-tight mb-3">
              Track Trips and Fuel Usage{" "}
              <span className="text-primary">Easily</span>
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
              This trip log system helps fleet operators record vehicle trips,
              log fuel entries, and maintain accurate records for reporting.
            </p>
          </div>

          <div className="why-choose-layout reveal">
            {/* Left Features */}
            <div className="why-choose-features why-choose-features-left">
              <div className="why-choose-feature">
                <div className="why-choose-feature-icon">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <h3 className="text-lg font-bold text-text">
                  Trip Logs in Under a Minute
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Record start, end, purpose, distance, and driver. Keep a
                  searchable history per vehicle.
                </p>
              </div>
              <div className="why-choose-feature">
                <div className="why-choose-feature-icon">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text">
                  Consistent Format
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Every driver logs the same way. No more deciphering WhatsApp
                  messages or paper notes.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="why-choose-center-image">
              <Image
                src="/images/why-choose-center.png"
                alt="FuelTrack LK dashboard showing fleet analytics"
                width={640}
                height={840}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Features */}
            <div className="why-choose-features why-choose-features-right">
              <div className="why-choose-feature">
                <div className="why-choose-feature-icon">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <h3 className="text-lg font-bold text-text">
                  Fuel Entries with Proof
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Log litres, cost, station, and optional receipt proof to
                  reduce missing evidence.
                </p>
              </div>
              <div className="why-choose-feature">
                <div className="why-choose-feature-icon">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <h3 className="text-lg font-bold text-text">
                  Simple Fleet Expense Tracking
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  FuelTrack LK also works as a fleet expense tracker, helping
                  you monitor fuel costs and improve fuel usage visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              href="/features"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-xl btn-shimmer hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20"
            >
              Explore All Features
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
          </div>
        </div>
      </section>

      {/* ─── Social Proof ─── */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="reveal text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
              Trusted by fleet operators
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text leading-tight">
              Built for small teams,{" "}
              <span className="text-primary">used like a routine</span>
            </h2>
          </div>

          {/* Testimonials — Large Quote Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {[
              {
                quote:
                  "We stopped arguing about missing receipts because everything is logged the same way.",
                author: "Fleet Supervisor",
                initials: "FS",
              },
              {
                quote:
                  "Weekly reporting is faster. We can check vehicle spend without digging through chats.",
                author: "Fleet Owner",
                initials: "FO",
              },
            ].map((t) => (
              <div
                key={t.author}
                className="reveal relative rounded-2xl p-8 md:p-10 border border-border bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
              >
                {/* Large decorative quote */}
                <svg
                  className="absolute top-6 right-6 w-12 h-12 text-primary/8 group-hover:text-primary/15 transition-colors duration-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                </svg>

                <p className="text-text text-base md:text-lg leading-relaxed font-medium mb-8 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-text">
                      {t.author}
                    </span>
                    <span className="block text-xs text-text-muted">
                      FuelTrack LK User
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Stats Strip */}
          <AnimatedStats />
        </div>
      </section>

      {/* ─── Mini FAQ ─── */}
      <section className="py-20 md:py-28 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
            {/* Left — Heading */}
            <div className="reveal">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight mb-4">
                Quick <span className="text-primary">answers</span>
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Got questions? Here are the ones we hear most from fleet
                operators exploring FuelTrack LK.
              </p>
            </div>

            {/* Right — FAQ Items */}
            <div className="reveal delay-200">
              <FAQAccordion items={homeFaq} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <CTASection
        heading="See the Fleet Fuel Log System in Action"
        description="Book a demo and we'll walk through trip logging, fuel tracking, and weekly reporting for your fleet."
        primaryLabel="Book a Demo"
        primaryHref="/book-a-demo"
        secondaryLabel="Free Fuel Log Template"
        secondaryHref="/free-template"
      />
    </>
  );
}
