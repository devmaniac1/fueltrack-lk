import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
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
  },
  {
    id: "signs-fuel-log-system",
    title: "5 signs your fleet needs a fuel log system",
    excerpt:
      "Not every fleet needs software from day one. But there are clear signals that your current method is costing you money or time.",
    content: [
      '1. You cannot answer "how much did vehicle X spend on fuel last week" within 2 minutes. If this number is not quickly accessible, you have a reporting gap.',
      "2. Drivers submit fuel receipts inconsistently — some on time, some late, some not at all. This is a process problem, not a people problem.",
      "3. Your weekly review takes more than 30 minutes to compile, mostly because data is scattered across formats.",
      "4. You have caught unexplained fuel consumption differences between similar vehicles and had no data to investigate.",
      "5. You are growing from 3 to 10+ vehicles and your current system is held together by memory and goodwill.",
    ],
    tags: ["fleet management", "fuel log", "growth"],
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
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="py-20 md:py-28 gradient-bg-animated">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Resources
            </h1>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              Practical guides and insights for fleet fuel management. Built
              from real experience with small fleets.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Articles Grid ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <div
                key={article.id}
                className={`reveal delay-${((i % 3) + 1) * 100}`}
              >
                <Link href={`#${article.id}`} className="block h-full">
                  <article className="h-full bg-white rounded-2xl p-8 card-hover border-glow group">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
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
      <section className="py-16 md:py-24 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-4 space-y-20">
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
                    className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                {article.title}
              </h2>
              <div className="space-y-4">
                {article.content.map((para, i) => (
                  <p key={i} className="text-text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-4">
                <Link
                  href="/features"
                  className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  See features →
                </Link>
                <Link
                  href="/free-template"
                  className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Get free template →
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
