import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Fleet management insights, fuel tracking guides, and practical tips for small fleets in Sri Lanka. Learn how to reduce costs and improve reporting.",
  keywords: [
    "fleet management tips",
    "fuel tracking guide",
    "Sri Lanka fleet resources",
  ],
  alternates: { canonical: "/resources" },
};

const articles = [
  {
    id: "reduce-fuel-theft",
    title: "How to reduce fuel theft in small fleets",
    excerpt:
      "Fuel theft is one of the most common issues small fleet owners face. Without consistent logging, it is almost impossible to notice small discrepancies until they add up. Here are practical steps any fleet owner can take — even without technology.",
    content: [
      "Start by setting a regular day and time for reviewing fuel records. Consistency in review matters more than advanced tools. If every vehicle logs litres filled, cost paid, and station location each time, you create a baseline to compare against.",
      "Look for vehicles where fuel consumption rises without an increase in trips. Cross-reference trip distance with fuel filled. If one vehicle shows significantly higher consumption per kilometre, investigate before assuming theft — it could be a maintenance issue.",
      "The key behaviour change is making fuel logging part of the routine, not something drivers do occasionally. FuelTrack LK supports this by using one standard format for every entry, making it harder for gaps to go unnoticed.",
    ],
    tags: ["fuel theft", "fleet security", "fuel tracking"],
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
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    id: "consistent-trip-logging",
    title: "Why consistent trip logging improves fleet reporting",
    excerpt:
      "Trip logs that follow different formats across drivers make weekly reviews frustrating. Consistent formatting is the foundation of useful fleet reporting.",
    content: [
      "When each driver records trips differently — some in notebooks, some in WhatsApp messages, some not at all — the person reviewing the data spends more time organising than analysing.",
      "A consistent trip log captures the same five fields every time: start location, end location, purpose, distance, and driver name. This makes it possible to compare across vehicles and spot patterns over weeks.",
      "FuelTrack LK uses a fixed format that every driver follows. This removes the ambiguity and lets supervisors focus on the data, not on chasing the right format from each driver.",
    ],
    tags: ["trip logging", "fleet reporting", "consistency"],
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
    id: "manual-vs-digital",
    title: "Manual vs digital fuel tracking: which is better?",
    excerpt:
      "Many small fleets start with paper or spreadsheets. Both work — but they scale differently. Here is a comparison to help you decide when to switch.",
    content: [
      "Manual tracking (paper logbooks) works well when you have 1–3 vehicles and one person handling everything. The moment a second person starts recording, inconsistency creeps in. Handwriting differences, missed columns, and lost pages become common.",
      "Spreadsheets improve on paper — they're searchable and sortable. But they still depend on someone entering data correctly, and shared spreadsheets often get overwritten or out of sync across devices.",
      "Digital tools like FuelTrack LK add structure: fixed fields, automatic timestamps, and receipt attachments. The tradeoff is onboarding time, but for fleets above 3 vehicles the time saved in weekly reviews more than compensates.",
    ],
    tags: ["manual tracking", "digital tracking", "comparison"],
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
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    id: "signs-fuel-log-system",
    title: "5 signs your fleet needs a fuel log system",
    excerpt:
      "Not every fleet needs software from day one. But there are clear signals that your current method is costing you money or time.",
    content: [
      '"How much did vehicle X spend on fuel last week?" — if you cannot answer this within 2 minutes, you have a reporting gap.',
      "Drivers submit fuel receipts inconsistently — some on time, some late, some not at all. This is a process problem, not a people problem.",
      "Your weekly review takes more than 30 minutes to compile, mostly because data is scattered across formats.",
      "You have caught unexplained fuel consumption differences between similar vehicles and had no data to investigate.",
      "You are growing from 3 to 10+ vehicles and your current system is held together by memory and goodwill.",
    ],
    tags: ["fleet management", "fuel log", "growth"],
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
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "cut-fuel-costs",
    title: "How Sri Lankan fleets can cut fuel costs",
    excerpt:
      "Fuel is typically the highest operating cost for small fleets. Reducing waste does not require expensive tools — it requires visibility.",
    content: [
      "The first step is knowing exactly how much each vehicle spends. Without per-vehicle fuel tracking, cost reduction is guesswork. Start by logging every refuel with litres, cost, and mileage at the time of refuel.",
      "Next, compare weekly fuel spend against trip distance. Vehicles with similar routes should have similar consumption. Large deviations suggest maintenance needs, route inefficiency, or driving behaviour issues.",
      "Finally, set simple targets. If Vehicle A averaged 8 km/l last month, aim to maintain or improve it. Share these numbers with drivers — visibility alone often improves behaviour without any punitive measures. FuelTrack LK's weekly summaries automate this comparison.",
    ],
    tags: ["fuel costs", "Sri Lanka", "cost reduction"],
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
];

export default function ResourcesPage() {
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
              id="resGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#resGrid)" />
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-6">
              Learn & grow
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Fleet management <br className="hidden md:block" />
              <span className="text-primary-light">resources</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Practical guides and insights for fleet fuel management. Built
              from real experience with small fleets.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Articles Grid ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <div
                key={article.id}
                className="reveal"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <Link href={`#${article.id}`} className="block h-full">
                  <article className="group h-full bg-white rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-500">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      {article.icon}
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-full bg-primary/5 text-primary/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      Read more
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Full Article Content ─── */}
      <section className="py-20 md:py-28 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-4 space-y-24">
          {articles.map((article) => (
            <article
              key={article.id}
              id={article.id}
              className="reveal scroll-mt-24"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-full bg-primary/5 text-primary/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-text mb-6 leading-tight">
                {article.title}
              </h2>
              <div className="space-y-4">
                {article.content.map((para, i) => (
                  <p key={i} className="text-text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-4">
                <Link
                  href="/features"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  See features
                </Link>
                <Link
                  href="/free-template"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Get free template
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        heading="Ready to put these ideas into practice?"
        description="Book a demo or start with the free fuel log template."
        primaryLabel="Book a Demo"
        primaryHref="/book-a-demo"
        secondaryLabel="Free Fuel Log Template"
        secondaryHref="/free-template"
      />
    </>
  );
}
