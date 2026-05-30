// Clean editorial header — no numbers, no AI "tag + rule" pattern
// Left accent bar + title is the differentiator
export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-16">
      <div className="flex items-start gap-5">
        {/* Vertical accent bar */}
        <div className="w-[3px] self-stretch bg-gradient-to-b from-[--accent] to-transparent
          rounded-full flex-shrink-0 min-h-[48px]" />

        <div>
          <h2 className="font-display text-[clamp(28px,3.2vw,46px)] font-bold tracking-tight
            text-slate-100 leading-[1.1] mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14px] text-slate-500 leading-relaxed max-w-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
