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
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Card Container */}
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 md:py-20"
          style={{
            background:
              "linear-gradient(135deg, #0a6ab6 0%, #064a80 60%, #042f52 100%)",
          }}
        >
          {/* Decorative concentric arcs — right side */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] pointer-events-none">
            <div className="relative w-[500px] h-[500px]">
              {[450, 360, 270, 180].map((size, i) => (
                <div
                  key={size}
                  className="absolute rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${(500 - size) / 2}px`,
                    left: `${(500 - size) / 2}px`,
                    background: `rgba(255, 255, 255, ${0.03 + i * 0.02})`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Subtle glow */}
          <div
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
            style={{
              background: "rgba(245, 158, 11, 0.08)",
              filter: "blur(80px)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              {heading}
            </h2>

            {description && (
              <p className="text-blue-100/70 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                {description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button — pill with circle accent */}
              <Link
                href={primaryHref}
                className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
              >
                {primaryLabel}
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
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>

              {/* Secondary Button — dark pill with circle accent */}
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold text-sm md:text-base px-7 py-3.5 rounded-full border border-white/15 transition-all duration-300 hover:scale-105"
                >
                  {secondaryLabel}
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
