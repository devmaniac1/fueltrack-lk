"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    numericValue: 30,
    prefix: "3–",
    label: "Vehicles supported",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11v6a1 1 0 001 1h1m16-7v6a1 1 0 01-1 1h-1M3 11h18M7 18a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>
    ),
  },
  {
    numericValue: 1,
    prefix: "<",
    suffix: " min",
    label: "Per trip log entry",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    numericValue: 100,
    suffix: "%",
    label: "Consistent format",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    numericValue: 7,
    suffix: "-day",
    label: "Clear reporting",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

function useCountUp(end: number, duration: number, startTrigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, startTrigger]);

  return count;
}

function StatCard({
  stat,
  inView,
  index,
}: {
  stat: StatItem;
  inView: boolean;
  index: number;
}) {
  const count = useCountUp(stat.numericValue, 1800, inView);

  return (
    <div
      className={`relative text-center py-10 px-6 group transition-all duration-500 ${
        index < 3 ? "md:border-r md:border-white/[0.06]" : ""
      } ${index < 2 ? "border-b md:border-b-0 border-white/[0.06]" : index === 2 ? "border-b md:border-b-0 border-white/[0.06]" : ""}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center text-accent mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
        {stat.icon}
      </div>

      {/* Animated Number */}
      <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tabular-nums">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>

      {/* Label */}
      <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">
        {stat.label}
      </div>

      {/* Subtle bottom accent on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent group-hover:w-12 transition-all duration-300 rounded-full" />
    </div>
  );
}

export default function AnimatedStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
      style={{
        background: "#1a1a1a",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {stats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} inView={inView} index={i} />
      ))}
    </div>
  );
}
