import Link from "next/link";
import Image from "next/image";

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
    <footer
      className="text-text-light relative overflow-hidden"
      style={{ background: "#111111" }}
    >
      {/* Subtle gradient accent at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Decorative glow */}
      <div
        className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "rgba(10, 106, 182, 0.06)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8 md:pt-20 md:pb-10 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Column — wider */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group mb-5"
            >
              <Image
                src="/Logo.png"
                alt="FuelTrack LK"
                width={44}
                height={44}
                className="rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl font-bold tracking-tight">
                Fuel<span className="text-primary-light">Track</span>{" "}
                <span className="text-accent font-extrabold">LK</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
              Fleet fuel and trip logging for Sri Lankan fleets with 3–30
              vehicles. Keep clean records, reduce waste, and simplify
              reporting.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@fueltracklk.com"
                className="inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-primary-light transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg
                    className="w-4 h-4"
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
                </span>
                hello@fueltracklk.com
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-accent group-hover:shadow-[0_0_6px_rgba(245,158,11,0.5)] transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} FuelTrack LK. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <span>Built for small fleets in Sri Lanka</span>
              <span className="text-base">🇱🇰</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
