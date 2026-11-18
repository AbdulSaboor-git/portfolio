"use client";

import GlowCard from "./GlowCard";

export default function ProjectCard({ project, onClick }) {
  return (
    <GlowCard
      onClick={onClick}
      glowColor={
        project.featured ? "rgba(56,189,248,0.14)" : "rgba(56,189,248,0.08)"
      }
      className={`group p-7 rounded-2xl border h-full
       hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        transition-all duration-300
        ${
          project.featured
            ? "bg-gradient-to-br from-sky-400/[0.08] to-[#0a0f1e] border-sky-400/30 hover:border-sky-400/60"
            : "bg-[#0a0f1e] border-white/12 hover:border-white/25"
        }
        `}
    >
      <div className="flex flex-col gap-3 h-full">
        {/* Top row */}
        <div className="flex justify-between items-start">
          <span className="text-[11px] font-mono font-bold text-slate-400 tracking-[0.08em]">
            {project.num}
          </span>
          <span
            className="text-[15px] text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5
          group-hover:-translate-y-0.5 transition-all duration-300"
          >
            ↗
          </span>
        </div>

        {/* Name + tagline */}
        <div>
          <h3
            className="font-display text-[19px] font-bold text-slate-100 
          tracking-tight leading-snug mb-1 transition-colors duration-300"
          >
            {project.name}
          </h3>
          <p className="text-[12px] text-sky-400 group-hover:text-sky-300 transition-all duration-300 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Badge */}
        {project.badge && (
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-sky-400
          bg-sky-400/15 border border-sky-400/35 rounded-lg px-2.5 py-1 w-fit tracking-wide"
          >
            ● {project.badge}
          </span>
        )}

        {/* Description snippet */}
        <p className="text-[13px] text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-[1.75] flex-1 line-clamp-3">
          {project.desc}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono text-slate-200 group-hover:text-white transition-colors duration-300
            bg-white/[0.06] border border-white/12 rounded-lg px-2.5 py-0.5"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors duration-300 px-2 py-0.5">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
