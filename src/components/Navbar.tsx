"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { event } from "@/lib/gtag";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/Logo.png"
            alt="FuelTrack LK"
            width={84}
            height={84}
            className="rounded-lg"
          />
          <span className="text-lg font-bold text-primary-dark group-hover:text-primary transition-colors">
            FuelTrack <span className="text-accent font-extrabold">LK</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-light rounded-full transition-all duration-300 group-hover:w-3/4" />
            </Link>
          ))}
          <Link
            href="/book-a-demo"
            id="demo-cta"
            className="ml-4 px-5 py-2.5 text-sm font-semibold text-white rounded-lg gradient-bg-animated btn-shimmer hover:shadow-lg hover:shadow-primary/20 transition-shadow"
            onClick={() => {
              event({
                action: "click",
                category: "CTA",
                label: "Book a Demo",
              });
            }}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-muted hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 border-t border-border" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-white/90 backdrop-blur-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-text-muted hover:text-primary hover:bg-bg-alt rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-a-demo"
            id="demo-cta"
            className="block mt-2 px-5 py-2.5 text-sm font-semibold text-center text-white rounded-lg gradient-bg-animated"
            onClick={() => {
              event({
                action: "click",
                category: "CTA",
                label: "Book a Demo",
              });
              setMobileOpen(false);
            }}
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
