// Clean editorial header with left accent bar and WCAG-compliant subtitle contrast
export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12 sm:mb-14">
      <div className="flex items-start gap-4 sm:gap-5">
        {/* Vertical accent bar */}
<<<<<<< HEAD
        <div className="w-[3px] self-stretch bg-gradient-to-b from-sky-400 to-transparent
          rounded-full flex-shrink-0 min-h-[48px]" />
=======
        <div
          className="w-[3px] self-stretch bg-gradient-to-b from-sky-400 to-transparent
          rounded-full flex-shrink-0 min-h-[48px]"
        />
>>>>>>> 55e6d52267296b44005b7be089f8fee0a985db1c

        <div>
          <h2
            className="font-display text-[clamp(26px,3.2vw,44px)] font-bold tracking-tight
            text-slate-100 leading-[1.1] mb-2.5"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
