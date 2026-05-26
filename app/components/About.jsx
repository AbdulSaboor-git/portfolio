"use client";

import { motion } from "framer-motion";
import GlowCard from "./GlowCard";
import SectionHeader from "./SectionHeader";
import { ABOUT_INFO } from "../data/portfolio";

const HIGHLIGHT_TAGS = ["React.js", "Next.js", "Node.js", "PostgreSQL", "Python", "FastAPI"];

export default function About() {
  return (
    <section id="about" className="px-[clamp(20px,6vw,80px)] py-24 border-t border-white/[0.05]">
      <div className="max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            tag="About"
            title={
              <>
                Turning ideas into{" "}
                <span className="text-sky-400">real products</span>
              </>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
            {/* Text */}
            <div>
              {[
                "I'm a full-stack developer based in Lahore, Pakistan — a BSCS (Hons.) graduate who's spent the last several years obsessing over building products that feel as good as they perform.",
                "My work spans the full stack: pixel-perfect React frontends, robust Node.js APIs, PostgreSQL data models, and Python-powered AI microservices. I've shipped everything from multi-seller e-commerce platforms to NLP-driven SaaS tools with real users.",
                "What drives me isn't just writing code — it's understanding the business problem first, then engineering the cleanest, most scalable path to a solution. I'm currently open to full-time roles and ambitious freelance projects.",
              ].map((text, i) => (
                <p key={i} className="text-[15px] text-slate-400 leading-[1.9] mb-5">
                  {text}
                </p>
              ))}

              {/* Tag chips */}
              <div className="flex flex-wrap gap-2.5 mt-6">
                {HIGHLIGHT_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold text-sky-400 bg-sky-400/8
                      border border-sky-400/20 rounded-md px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Info card */}
            <GlowCard
              glowColor="rgba(56,189,248,0.09)"
              className="bg-[#0d1526]/90 border border-white/[0.07] rounded-2xl overflow-hidden"
            >
              {ABOUT_INFO.map((row, i) => (
                <div
                  key={i}
                  className={`px-5 py-3.5 flex justify-between items-center
                    ${i < ABOUT_INFO.length - 1 ? "border-b border-white/[0.05]" : ""}`}
                >
                  <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-[0.07em]">
                    {row.key}
                  </span>
                  {row.link ? (
                    <a
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      {row.value} ↗
                    </a>
                  ) : (
                    <span
                      className={`text-[13px] font-semibold
                        ${row.green ? "text-emerald-400" : "text-slate-100"}`}
                    >
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </GlowCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
