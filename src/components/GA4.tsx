"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { pageview, GA_ID } from "@/lib/gtag";

function GA4Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (GA_ID) {
      const url =
        pathname +
        (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GA4() {
  return (
    <Suspense fallback={null}>
      <GA4Tracker />
    </Suspense>
  );
}
