import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/how-it-works", label: "How It Works" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources", label: "Articles" },
      { href: "/free-template", label: "Free Fuel Log Template" },
      { href: "/book-a-demo", label: "Book a Demo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-light">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary-light/20 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-light"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold">
                FuelTrack <span className="text-accent font-extrabold">LK</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-xs leading-relaxed">
              Fleet fuel and trip logging for Sri Lankan fleets with 3–30
              vehicles. Keep clean records, reduce waste, and simplify
              reporting.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              📧 hello@fueltracklk.com
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-primary-light transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} FuelTrack LK. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built for small fleets in Sri Lanka 🇱🇰
          </p>
        </div>
      </div>
    </footer>
  );
}
