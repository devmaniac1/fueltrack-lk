import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { event } from "@/lib/gtag";

export const metadata: Metadata = {
  title: "Free Fuel Log Template",
  description:
    "Download the free fuel log template for small fleets. Includes trip log, fuel entry, and weekly summary sheets. Built for fleets with 3–30 vehicles.",
  keywords: [
    "free fuel log template",
    "fleet fuel log spreadsheet",
    "trip log template Sri Lanka",
  ],
  alternates: { canonical: "/free-template" },
};

const templateFaq = [
  {
    question: "Is it really free?",
    answer:
      "Yes, completely free with no obligations. Use it in your fleet for as long as you need.",
  },
  {
    question: "What format is the template?",
    answer:
      "The template is available as a Google Sheets link and a downloadable Excel (.xlsx) file. You choose whichever works best for your team.",
  },
  {
    question: "Can I customise it?",
    answer: `Absolutely. The template is fully editable. Add columns, rename fields, or adjust it to match your fleet's workflow.`,
  },
  {
    question: "Can I upgrade to FuelTrack LK later?",
    answer:
      "Yes. The template uses the same field structure as FuelTrack LK, so switching is seamless. Your existing data format stays compatible.",
  },
  {
    question: "How many vehicles does the template support?",
    answer:
      "The template works for any fleet size, but it is optimised for 3–30 vehicles. Beyond that, the full FuelTrack LK system handles scale better.",
  },
];

const templateSections = [
  {
    title: "Trip Log Sheet",
    items: [
      "Date & time of trip",
      "Vehicle ID / registration",
      "Driver name",
      "Start & end location",
      "Purpose of trip",
      "Distance (km)",
      "Notes / exceptions",
    ],
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
    color: "primary" as const,
  },
  {
    title: "Fuel Entry Sheet",
    items: [
      "Date of refuel",
      "Vehicle ID",
      "Litres filled",
      "Cost per litre & total cost",
      "Fuel station name",
      "Receipt reference (Y/N)",
      "Odometer reading",
    ],
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
    color: "accent" as const,
  },
  {
    title: "Weekly Summary Sheet",
    items: [
      "Total fuel cost per vehicle",
      "Total distance per vehicle",
      "Average consumption (km/l)",
      "Week-over-week comparison",
      "Flagged anomalies",
      "Notes for review",
    ],
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
    color: "primary" as const,
  },
];

export default function FreeTemplatePage() {
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
              id="tmpGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tmpGrid)" />
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-6">
              100% Free — No signup required
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Free Fuel Log <br className="hidden md:block" />
              <span className="text-primary-light">Template</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
              A ready-to-use spreadsheet for tracking trips, fuel entries, and
              weekly fleet costs. Built for small fleets in Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/YOUR_FORM_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
              >
                Get the Free Template
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
              </a>
              <Link
                href="/book-a-demo"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white border border-white/15 rounded-full hover:bg-white/5 transition-all duration-300"
                onClick={() => {
                  event({
                    action: "click",
                    category: "CTA",
                    label: "Book a Demo",
                  });
                }}
              >
                Or Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What's Inside ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
              3 Sheets included
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight">
              What&apos;s inside the{" "}
              <span className="text-primary">template</span>
            </h2>
            <p className="text-text-muted text-base mt-3 max-w-lg mx-auto">
              Three sheets covering everything a small fleet needs for
              consistent tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templateSections.map((section, i) => (
              <div
                key={section.title}
                className="group reveal relative bg-white rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 h-full"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${section.color === "accent" ? "bg-accent/10 text-accent group-hover:bg-accent" : "bg-primary/8 text-primary group-hover:bg-primary"} flex items-center justify-center mb-6 group-hover:text-white transition-all duration-300 group-hover:scale-110`}
                >
                  {section.icon}
                </div>
                <h3 className="text-lg font-bold text-text mb-5 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-text-muted"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
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
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who Is This For ─── */}
      <section className="py-20 md:py-28 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-4">
          <div className="reveal text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
              Audience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight">
              Who is this <span className="text-primary">for?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto reveal">
            <div className="group bg-white rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                Fleet owners getting started
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                If you&apos;re currently using notebooks, WhatsApp messages, or
                no system at all, this template gives you a structured starting
                point. Build the logging habit first, then consider upgrading.
              </p>
            </div>
            <div className="group bg-white rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-accent/8 transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors">
                Businesses evaluating before committing
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Use the template to see if structured fuel logging works for
                your team. When you&apos;re confident, FuelTrack LK gives you
                the same structure with automation, receipt proof, and weekly
                reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How to Get It ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="reveal text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
              3 Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight">
              How to get the <span className="text-primary">template</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {[
              {
                num: "01",
                title: "Request it",
                desc: "Fill the form or email us at hello@fueltracklk.com",
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
                title: "Get the link",
                desc: "We send the Google Sheets link and Excel file within 24 hours.",
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
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                ),
              },
              {
                num: "03",
                title: "Start logging",
                desc: "Copy the template, add your vehicles, and begin tracking.",
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
            ].map((step, i) => (
              <div
                key={step.num}
                className="group text-center p-8 bg-bg-alt rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary/50 block mb-1">
                  Step {step.num}
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

      {/* ─── FAQ — Two Column ─── */}
      <section className="py-20 md:py-28 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">
            <div className="reveal">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/5 px-4 py-2 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text leading-tight mb-4">
                Template <span className="text-primary">questions</span>
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Everything about the free fuel log template.
              </p>
            </div>
            <div className="reveal">
              <FAQAccordion items={templateFaq} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        heading="Ready for the full system?"
        description="When your fleet outgrows the spreadsheet, FuelTrack LK automates everything with receipt proof, driver logs, and weekly reports."
        primaryLabel="Book a Demo"
        primaryHref="/book-a-demo"
        secondaryLabel="See Features"
        secondaryHref="/features"
      />
    </>
  );
}
