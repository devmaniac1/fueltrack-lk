"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const selector = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    // Observe all current reveal elements
    const observe = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        // Reset the revealed state so the animation replays on new pages
        el.classList.remove("revealed");
        observer.observe(el);
      });
    };

    // Small delay to let the new page DOM render before querying
    const timer = setTimeout(observe, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
