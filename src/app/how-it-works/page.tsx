import type { Metadata } from "next";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A simple workflow: add vehicles, log trips, record fuel refuels, review weekly summaries, export for reporting. Built for small fleets.",
  keywords: [
    "how to track fleet fuel usage",
    "fleet fuel tracking workflow",
    "trip log process",
  ],
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    num: "01",
    title: "Add vehicles and drivers",
    desc: "Set vehicles and driver list so logs stay consistent from day one.",
    icon: (
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Log each trip",
    desc: "Start, end, purpose, distance, driver. Keep it quick and repeatable.",
    icon: (
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
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Record refuels",
    desc: "Litres, cost, station, and optional receipt proof.",
    icon: (
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
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Review weekly summary",
    desc: "Check spend per vehicle and unusual changes early.",
    icon: (
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
    ),
  },
  {
    num: "05",
    title: "Export when needed",
    desc: "Share clean logs with owners or accounting without rebuilding spreadsheets.",
    icon: (
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
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

const howFaq = [
  {
    question: "How long does setup take?",
    answer:
      "Most fleets are set up within 15 minutes. Add your vehicles, invite drivers, and you can start logging the same day.",
  },
  {
    question: "Can drivers use it on mobile?",
    answer:
      "Yes. The interface is built for mobile-first entry. Drivers can log trips and refuels from any smartphone browser.",
  },
  {
    question: "Do we need perfect data to start?",
    answer:
      "No. Start with what you have. Consistent data improves reporting over time, so even basic entries are valuable from week one.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/how-it-works-header.png"
          alt="Fleet supervisor with checklist near parked delivery vans in tropical setting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark/90 via-primary/70 to-bg-dark/85 z-10" />
        <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              How it works
            </h1>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              A simple routine your drivers can follow and your managers can
              review weekly.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Timeline Steps ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative timeline-line space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal relative flex flex-col md:flex-row items-start gap-6 md:gap-12 delay-${(i + 1) * 100} ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"
                }`}
              >
                {/* Number badge */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full gradient-bg-animated flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/30">
                    {step.num}
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 card-hover border-glow">
                  <div
                    className={`flex items-center gap-3 mb-3 ${i % 2 !== 0 ? "md:justify-end" : ""}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── After One Week ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading title="What you get after one week" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto reveal delay-200">
            {[
              {
                icon: "📒",
                title: "Clean trip history",
                desc: "A searchable record per vehicle with consistent formatting.",
              },
              {
                icon: "⛽",
                title: "Fuel records with proof",
                desc: "Receipts attached where needed, reducing missing evidence.",
              },
              {
                icon: "📊",
                title: "Weekly view",
                desc: "A clear summary that makes review fast and actionable.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 bg-white rounded-2xl card-hover"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading title="Common questions" />
          </div>
          <div className="reveal delay-200">
            <FAQAccordion items={howFaq} />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        heading="Ready to build your fleet's reporting routine?"
        description="Book a demo and see how FuelTrack LK fits your fleet's daily workflow."
        primaryLabel="Book a Demo"
        primaryHref="/book-a-demo"
        secondaryLabel="Free Fuel Log Template"
        secondaryHref="/free-template"
      />
    </>
  );
}
