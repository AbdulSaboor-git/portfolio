"use client";

import { Images, ArrowUpRight } from "lucide-react";
import GlowCard from "./GlowCard";

export default function ProjectCard({ project, onClick }) {
  const hasImages = project.images && project.images.length > 0;

  return (
    <GlowCard
      onClick={onClick}
      glowColor={
        project.featured ? "rgba(56,189,248,0.14)" : "rgba(56,189,248,0.08)"
      }
      className={`group p-6 sm:p-7 rounded-2xl border h-full
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        transition-all duration-300
        ${
          project.featured
            ? "bg-gradient-to-br from-sky-400/[0.06] to-[#0d1526]/95 border-sky-400/20 hover:border-sky-400/40"
            : "bg-[#0d1526]/90 border-white/[0.08] hover:border-white/[0.18]"
        }`}
    >
      <div className="flex flex-col gap-3.5 h-full">
        {/* Thumbnail Preview (when screenshots exist) */}
        {hasImages && (
          <div className="relative w-full h-36 rounded-xl overflow-hidden bg-[#06080f] border border-white/[0.07] mb-1">
            <img
              src={project.images[0]}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
              loading="lazy"
            />
            {project.images.length > 1 && (
              <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-200 bg-[#06080f]/85 border border-white/10 backdrop-blur-sm">
                <Images size={11} className="text-sky-400" />
                {project.images.length} screens
              </span>
            )}
          </div>
        )}

        {/* Top row: number + badge + expand icon */}
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-semibold text-slate-400 tracking-[0.08em]">
              {project.num}
            </span>
            {project.badge && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-sky-300 bg-sky-400/10 border border-sky-400/25 rounded-md px-2 py-0.5 tracking-wide">
                ● {project.badge}
              </span>
            )}
          </div>
          <span
            className="text-[15px] text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5
            group-hover:-translate-y-0.5 transition-all duration-300"
          >
            ↗
          </span>
        </div>

        {/* Name + tagline */}
        <div>
          <h3 className="font-display text-[19px] sm:text-[20px] font-bold text-slate-100 tracking-tight leading-snug mb-1 group-hover:text-sky-300 transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-sky-400/90 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Description snippet */}
        <p className="text-[13px] sm:text-[14px] text-slate-300 leading-[1.7] flex-1 line-clamp-3">
          {project.desc}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono font-medium text-slate-300
                bg-white/[0.04] border border-white/[0.09] rounded-md px-2 py-0.5"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-[11px] font-mono text-slate-400 px-1.5 py-0.5">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Quick Links Row */}
        <div className="pt-3 mt-1 border-t border-white/[0.06] flex items-center justify-between text-[12px] font-mono">
          <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
            Case study &amp; details →
          </span>
          <div
            className="flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-sky-400 hover:text-sky-300 font-semibold"
              >
                Live <ArrowUpRight size={13} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-slate-300 hover:text-white"
              >
                Code <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </GlowCard>
  );
}
