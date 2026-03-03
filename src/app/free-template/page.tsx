import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

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
    icon: "🚗",
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
  },
  {
    icon: "⛽",
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
  },
  {
    icon: "📊",
    title: "Weekly Summary Sheet",
    items: [
      "Total fuel cost per vehicle",
      "Total distance per vehicle",
      "Average consumption (km/l)",
      "Week-over-week comparison",
      "Flagged anomalies",
      "Notes for review",
    ],
  },
];

export default function FreeTemplatePage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="py-20 md:py-28 gradient-bg-animated">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-teal-200 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              100% Free — No signup required
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Free Fuel Log Template
            </h1>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-8">
              A ready-to-use spreadsheet for tracking trips, fuel entries, and
              weekly fleet costs. Built for small fleets in Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/YOUR_FORM_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-dark bg-white rounded-xl btn-shimmer hover:bg-teal-50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get the Free Template
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
              <Link
                href="/book-a-demo"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300"
              >
                Or Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What's Inside ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading
              title="What's inside the template"
              subtitle="Three sheets covering everything a small fleet needs for consistent tracking and weekly review."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templateSections.map((section, i) => (
              <div
                key={section.title}
                className={`reveal delay-${(i + 1) * 100}`}
              >
                <div className="bg-white rounded-2xl p-8 card-hover border-glow h-full">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="text-lg font-bold text-text mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-text-muted"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who Is This For ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading title="Who is this for?" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto reveal delay-200">
            <div className="bg-white rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text mb-2">
                Fleet owners getting started
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                If you&apos;re currently using notebooks, WhatsApp messages, or
                no system at all, this template gives you a structured starting
                point. Build the logging habit first, then consider upgrading.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text mb-2">
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
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading title="How to get the template" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto reveal delay-200">
            {[
              {
                num: "1",
                title: "Request it",
                desc: "Fill the form or email us at hello@fueltracklk.com",
              },
              {
                num: "2",
                title: "Get the link",
                desc: "We send the Google Sheets link and Excel file within 24 hours.",
              },
              {
                num: "3",
                title: "Start logging",
                desc: "Copy the template, add your vehicles, and begin tracking.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="text-center p-8 bg-bg-alt rounded-2xl card-hover"
              >
                <div className="w-10 h-10 rounded-full gradient-bg-animated flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-text mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="reveal">
            <SectionHeading title="Template FAQs" />
          </div>
          <div className="reveal delay-200">
            <FAQAccordion items={templateFaq} />
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
