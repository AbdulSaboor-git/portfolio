"use client";

import GlowCard from "./GlowCard";

export default function ProjectCard({ project, onClick }) {
  return (
    <GlowCard
      onClick={onClick}
      glowColor={project.featured ? "rgba(56,189,248,0.14)" : "rgba(56,189,248,0.08)"}
      className={`group flex flex-col gap-4 p-7 rounded-2xl border h-full
        hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        transition-all duration-300
        ${project.featured
          ? "bg-gradient-to-br from-sky-400/[0.05] to-[#0d1526]/95 border-sky-400/18 hover:border-sky-400/35"
          : "bg-[#0d1526]/90 border-white/[0.06] hover:border-white/[0.14]"
        }`}
    >
      {/* Top row */}
      <div className="flex justify-between items-start">
        <span className="text-[11px] font-bold text-slate-600 tracking-[0.08em]">{project.num}</span>
        <span className="text-[15px] text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5
          group-hover:-translate-y-0.5 transition-all duration-200">↗</span>
      </div>

      {/* Name + tagline */}
      <div>
        <h3 className="font-display text-[19px] font-extrabold text-slate-100 group-hover:text-sky-400
          tracking-tight leading-snug mb-1 transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-[12px] text-sky-400/80 font-medium">{project.tagline}</p>
      </div>

      {/* Badge */}
      {project.badge && (
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-sky-400
          bg-sky-400/10 border border-sky-400/25 rounded-md px-2.5 py-1 w-fit tracking-wide">
          ● {project.badge}
        </span>
      )}

      {/* Description snippet */}
      <p className="text-[13px] text-slate-500 leading-[1.75] flex-1 line-clamp-3">
        {project.desc}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="text-[10px] font-semibold text-slate-600
            bg-white/[0.04] border border-white/[0.07] rounded px-2 py-0.5">
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-[10px] font-semibold text-slate-700 px-2 py-0.5">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>
    </GlowCard>
  );
}
