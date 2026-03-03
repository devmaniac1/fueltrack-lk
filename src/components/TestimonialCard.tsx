interface TestimonialCardProps {
  quote: string;
  author?: string;
}

export default function TestimonialCard({
  quote,
  author,
}: TestimonialCardProps) {
  return (
    <div className="card-hover bg-white rounded-2xl p-8 relative overflow-hidden group">
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-6 text-6xl font-serif text-primary/10 select-none group-hover:text-primary/20 transition-colors">
        &ldquo;
      </div>
      <div className="relative">
        <p className="text-text text-sm leading-relaxed italic mb-4">
          &ldquo;{quote}&rdquo;
        </p>
        {author && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              {author}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
