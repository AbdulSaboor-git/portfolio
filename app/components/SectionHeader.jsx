export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[14px] font-bold text-sky-400 tracking-[0.14em] uppercase">
          {tag}
        </span>
        <div className="w-12 h-px bg-white/8" />
      </div>
      <h2 className="font-display text-[clamp(32px,3.5vw,54px)] font-extrabold tracking-tight text-slate-100 leading-[1.1] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[15px] text-slate-500 leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
