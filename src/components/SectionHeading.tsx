interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-3 ${
          light ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-slate-300" : "text-text-muted"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full ${centered ? "mx-auto" : ""} ${
          light ? "bg-accent" : "bg-gradient-to-r from-primary to-primary-light"
        }`}
      />
    </div>
  );
}
