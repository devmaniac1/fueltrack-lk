import Link from "next/link";

interface PricingCardProps {
  name: string;
  vehicleRange: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  vehicleRange,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 group ${
        highlighted
          ? "bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl shadow-primary/20 scale-105 border-2 border-primary-light/30"
          : "bg-white card-hover border-glow"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-xs font-bold rounded-full text-white uppercase tracking-wider animate-bounce-subtle">
          Most Popular
        </div>
      )}
      <h3
        className={`text-xl font-bold mb-1 ${
          highlighted ? "text-white" : "text-text"
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-sm mb-6 ${
          highlighted ? "text-teal-100" : "text-text-muted"
        }`}
      >
        {vehicleRange}
      </p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <svg
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                highlighted ? "text-accent-light" : "text-primary"
              }`}
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
            <span className={highlighted ? "text-teal-50" : "text-text-muted"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="/book-a-demo"
        className={`block w-full text-center py-3 rounded-xl font-semibold text-sm btn-shimmer transition-all duration-300 hover:scale-105 ${
          highlighted
            ? "bg-white text-primary-dark hover:bg-teal-50"
            : "gradient-bg-animated text-white hover:shadow-lg hover:shadow-primary/20"
        }`}
      >
        Book a Demo
      </Link>
    </div>
  );
}
