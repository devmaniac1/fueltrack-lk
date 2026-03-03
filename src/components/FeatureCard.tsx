interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`card-hover border-glow bg-white rounded-2xl p-8 group ${className}`}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
