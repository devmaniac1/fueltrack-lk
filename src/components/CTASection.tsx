import Link from "next/link";

interface CTASectionProps {
  heading: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTASection({
  heading,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={`py-16 md:py-20 ${
        dark ? "gradient-bg-animated text-white" : "bg-bg-alt"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 ${
            dark ? "text-white" : "text-text"
          }`}
        >
          {heading}
        </h2>
        {description && (
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              dark ? "text-teal-100" : "text-text-muted"
            }`}
          >
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className={`inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-xl btn-shimmer transition-all duration-300 hover:scale-105 ${
              dark
                ? "bg-white text-primary-dark hover:bg-teal-50 shadow-lg"
                : "gradient-bg-animated text-white hover:shadow-lg hover:shadow-primary/20"
            }`}
          >
            {primaryLabel}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                dark
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-primary/30 text-primary hover:border-primary hover:bg-primary/5"
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
