"use client";

import Link from "next/link";
import { event } from "@/lib/gtag";

export default function TrackedDemoLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      id="demo-cta"
      className={className}
      onClick={() => {
        event({
          action: "click",
          category: "CTA",
          label: "Book a Demo",
        });
      }}
    >
      {children}
    </Link>
  );
}
