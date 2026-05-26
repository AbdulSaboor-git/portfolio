"use client";

import { motion } from "framer-motion";
import GlowCard from "./GlowCard";
import SectionHeader from "./SectionHeader";
import { SKILLS } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-[clamp(20px,6vw,80px)] py-24 border-t border-white/[0.05]"
    >
      <div className="max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            tag="Skills"
            title={
              <>
                The tools I <span className="text-sky-400">master</span>
              </>
            }
            subtitle="A broad but deep skill set spanning modern frontend, scalable backend, production databases, and AI/ML integration."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((sk, i) => (
            <motion.div
              key={sk.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <GlowCard
                glowColor={`${sk.color}18`}
                className="group bg-[#0d1526]/90 border border-white/[0.06] rounded-2xl p-6 h-full
                  hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card top accent line */}
                <div
                  className="absolute -top-6 -left-6 right-0 h-[2px] rounded-t-2xl opacity-0
                    group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${sk.color}, transparent)`,
                  }}
                />

                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-[15px]" style={{ color: sk.color }}>
                    {sk.icon}
                  </span>
                  <span className="font-display text-[13px] font-bold text-slate-100 tracking-tight">
                    {sk.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {sk.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-medium text-slate-400 bg-white/[0.04]
                        border border-white/[0.07] rounded-md px-2.5 py-1
                        group-hover:border-white/[0.12] group-hover:text-slate-300 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
