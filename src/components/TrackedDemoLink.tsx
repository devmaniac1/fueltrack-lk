"use client";

import Link from "next/link";
import { pushCTAClick } from "@/lib/gtag";

export default function TrackedDemoLink({
  href,
  className,
  children,
  location = "page",
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  location?: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        pushCTAClick("Book a Demo", location);
      }}
    >
      {children}
    </Link>
  );
}
