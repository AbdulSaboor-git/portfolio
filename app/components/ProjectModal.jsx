"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-5
          bg-black/80 backdrop-blur-xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[640px] max-h-[88vh] overflow-y-auto
            bg-[#0d1526] border border-white/10 rounded-[20px]"
        >
          {/* Sticky close button */}
          <div className="sticky top-0 z-10 flex justify-end px-6 pt-5 bg-[#0d1526]">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10
                text-slate-400 hover:text-slate-100 hover:bg-white/10 flex items-center justify-center
                transition-all duration-200 cursor-pointer"
            >
              <X size={15} />
            </button>
          </div>

          <div className="px-8 pb-8 pt-1">
            {/* Image Carousel (if images exist) */}
            {project.images?.length > 0 && (
              <ImageCarousel images={project.images} />
            )}

            {/* Header */}
            <p className="text-[11px] font-bold text-slate-600 tracking-[0.1em] mb-2">
              {project.num}
            </p>
            <h3
              className={`font-display text-[30px] font-extrabold tracking-tight mb-1.5 leading-tight
              ${project.featured ? "text-sky-400" : "text-slate-100"}`}
            >
              {project.name}
            </h3>
            <p className="text-[13px] text-slate-500 mb-4">{project.tagline}</p>

            {project.badge && (
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-400
                bg-sky-400/10 border border-sky-400/25 rounded-md px-2.5 py-1 tracking-wide mb-5"
              >
                ● {project.badge}
              </span>
            )}

            <div className="h-px bg-white/[0.06] my-5" />

            {/* Overview */}
            <p className="text-[11px] font-bold text-sky-400 tracking-[0.1em] uppercase mb-3">
              Overview
            </p>
            <p className="text-[14px] text-slate-400 leading-[1.85]">
              {project.desc}
            </p>

            <div className="h-px bg-white/[0.06] my-5" />

            {/* Key Features */}
            <p className="text-[11px] font-bold text-sky-400 tracking-[0.1em] uppercase mb-3">
              Key Features
            </p>
            <ul className="flex flex-col gap-2.5">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[13px] text-slate-400 leading-[1.7]"
                >
                  <span className="text-sky-400 shrink-0 mt-0.5">▸</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="h-px bg-white/[0.06] my-5" />

            {/* Tech Stack */}
            <p className="text-[11px] font-bold text-sky-400 tracking-[0.1em] uppercase mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-semibold text-slate-100
                  bg-white/[0.06] border border-white/10 rounded-md px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mt-6">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-sky-400 hover:bg-sky-300 text-[#070b14]
                    text-[13px] font-bold px-5 py-2.5 rounded-lg transition-colors"
                >
                  View Live ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400
                    text-[13px] font-semibold px-5 py-2.5 rounded-lg border border-white/10
                    hover:border-sky-400/50 transition-all"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
