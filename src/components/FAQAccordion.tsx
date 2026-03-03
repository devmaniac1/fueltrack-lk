"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-primary/30 shadow-md shadow-primary/5 bg-white"
                : "border-border bg-white/60 hover:border-primary/20"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
              aria-expanded={isOpen}
            >
              <span
                className={`font-semibold text-sm transition-colors ${
                  isOpen ? "text-primary" : "text-text group-hover:text-primary"
                }`}
              >
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-primary" : "text-text-muted"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 text-sm text-text-muted leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
