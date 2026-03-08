import type { Metadata } from "next";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

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
        strokeWidth="1.8"
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
        strokeWidth="1.8"
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
        strokeWidth="1.8"
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
];

const afterOneWeek = [
  {
    title: "Clean trip history",
    desc: "A searchable record per vehicle with consistent formatting.",
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
    title: "Fuel records with proof",
    desc: "Receipts attached where needed, reducing missing evidence.",
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
    title: "Weekly view",
    desc: "A clear summary that makes review fast and actionable.",
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
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
              id="hiwGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hiwGrid)" />
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-6">
              5-step process
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              How <span className="text-primary-light">FuelTrack LK</span> works
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A simple routine your drivers can follow and your managers can
              review weekly.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Timeline Steps ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal group flex items-start gap-6 p-6 md:p-8 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Number + Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary/50 block mb-1">
                    Step {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-text mb-1 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── After One Week ─── */}
      <section className="py-20 md:py-28 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-4">
          <div className="reveal text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
              Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight">
              What you get after <span className="text-primary">one week</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {afterOneWeek.map((item, i) => (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
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
                Common <span className="text-primary">questions</span>
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Quick answers about getting started with FuelTrack LK.
              </p>
            </div>
            <div className="reveal">
              <FAQAccordion items={howFaq} />
            </div>
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
