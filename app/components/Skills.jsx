"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Cpu,
  Server,
  Database,
  Terminal,
  Workflow,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import GlowCard from "./GlowCard";
import { SKILLS, SKILL_FILTERS } from "../data/portfolio";

const CATEGORY_ICONS = {
  layout: Layout,
  cpu: Cpu,
  server: Server,
  database: Database,
  terminal: Terminal,
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const currentFilterObj =
    SKILL_FILTERS.find((f) => f.id === activeFilter) || SKILL_FILTERS[0];

  return (
    <section
      id="skills"
      className="px-[clamp(20px,6vw,80px)] py-16 sm:py-20 md:py-28 border-t border-white/[0.04]"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            title={
              <>
                Technical <span className="text-sky-400">Stack</span> &amp;
                Architecture
              </>
            }
            subtitle="Filter by production system to see how technologies connect across the stack, or tap any tool for implementation details."
          />

          {/* ── Interactive System Filter Bar ── */}
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 sm:flex-wrap no-scrollbar">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mr-1 flex-shrink-0">
                Filter by System:
              </span>
              {SKILL_FILTERS.map((filter) => {
                const isSelected = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => {
                      setActiveFilter(filter.id);
                      setSelectedSkill(null);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-[12px] font-mono font-medium transition-all duration-200 flex-shrink-0 border ${
                      isSelected
                        ? "bg-sky-400/15 text-sky-300 border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                        : "bg-[#0a0d18] text-slate-400 border-white/[0.07] hover:text-slate-200 hover:border-white/15"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* ── Architecture Dataflow Callout ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex items-start sm:items-center gap-3 px-4 py-3 rounded-xl bg-[#0a0d18]/90 border border-white/[0.07]"
              >
                <Workflow
                  size={16}
                  className="text-sky-400 flex-shrink-0 mt-0.5 sm:mt-0"
                />
                <div className="text-[12px] sm:text-[13px] font-mono text-slate-300 leading-relaxed">
                  <span className="text-sky-400 font-semibold mr-2">
                    [{currentFilterObj.label}]
                  </span>
                  {currentFilterObj.flow}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Responsive Bento Grid (All Skills Visible on Desktop & Mobile) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map((group, groupIdx) => {
              const IconComponent =
                CATEGORY_ICONS[group.iconKey] || Terminal;
              const matchingCount =
                activeFilter === "all"
                  ? group.items.length
                  : group.items.filter((item) =>
                      item.projects.includes(activeFilter),
                    ).length;

              return (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: groupIdx * 0.06 }}
                  className={`${group.span || "lg:col-span-1"} h-full`}
                >
                  <GlowCard
                    tiltLevel="low"
                    glowColor={`${group.color}1f`}
                    className={`h-full p-5 sm:p-6 rounded-2xl bg-[#0a0d18]/95 border transition-all duration-300 ${
                      matchingCount > 0
                        ? "border-white/[0.08] hover:border-white/[0.16]"
                        : "border-white/[0.04] opacity-60"
                    }`}
                  >
                    <div className="flex flex-col h-full justify-between gap-5">
                      <div>
                        {/* Card Header */}
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center border flex-shrink-0"
                              style={{
                                backgroundColor: `${group.color}14`,
                                borderColor: `${group.color}35`,
                                color: group.color,
                              }}
                            >
                              <IconComponent size={18} />
                            </div>
                            <h3 className="font-display text-[17px] sm:text-[18px] font-bold text-slate-100 tracking-tight">
                              {group.category}
                            </h3>
                          </div>

                          <span
                            className="text-[11px] font-mono px-2.5 py-1 rounded-full border flex-shrink-0"
                            style={{
                              color: group.color,
                              borderColor: `${group.color}30`,
                              backgroundColor: `${group.color}0d`,
                            }}
                          >
                            {activeFilter === "all"
                              ? `${group.items.length} tools`
                              : `${matchingCount}/${group.items.length} used`}
                          </span>
                        </div>

                        {/* Category Summary */}
                        <p className="text-[13px] sm:text-[14px] text-slate-300 leading-relaxed mb-4">
                          {group.summary}
                        </p>

                        {/* Skill Chips */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {group.items.map((item) => {
                            const isMatched =
                              activeFilter === "all" ||
                              item.projects.includes(activeFilter);
                            const isExpanded =
                              selectedSkill === `${group.id}-${item.name}`;

                            return (
                              <button
                                key={item.name}
                                type="button"
                                onClick={() =>
                                  setSelectedSkill(
                                    isExpanded
                                      ? null
                                      : `${group.id}-${item.name}`,
                                  )
                                }
                                className={`group/chip text-left p-3 rounded-xl border transition-all duration-200 ${
                                  isMatched
                                    ? "bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-white/[0.18]"
                                    : "bg-white/[0.01] border-white/[0.03] opacity-40"
                                }`}
                                style={
                                  isMatched && activeFilter !== "all"
                                    ? {
                                        borderColor: `${group.color}45`,
                                        backgroundColor: `${group.color}0c`,
                                      }
                                    : undefined
                                }
                              >
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <span className="font-mono text-[12px] sm:text-[13px] font-semibold text-slate-100">
                                    {item.name}
                                  </span>
                                  <span
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover/chip:scale-125"
                                    style={{
                                      backgroundColor: isMatched
                                        ? group.color
                                        : "#475569",
                                    }}
                                  />
                                </div>
                                <p className="text-[11px] sm:text-[12px] text-slate-400 leading-snug">
                                  {item.detail}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
