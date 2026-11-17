"use client";

import { motion } from "framer-motion";
import { Layers, Server, Cpu, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import GlowCard from "./GlowCard";
import { ABOUT_INFO } from "../data/portfolio";

const ARCHITECTURE_LAYERS = [
  {
    step: "01",
    title: "Client & State Architecture",
    icon: Layers,
    color: "#38bdf8",
    tech: "Next.js 15 · React 19 · TypeScript · Redux Toolkit · Tailwind CSS",
    desc: "Responsive, accessible interfaces with normalized client state and predictable server/client component boundaries.",
  },
  {
    step: "02",
    title: "Polyglot API & Service Layer",
    icon: Server,
    color: "#a78bfa",
    tech: "Node.js · Express.js · FastAPI · Zod · JWT RBAC",
    desc: "Transactional REST APIs in Node.js paired with async Python FastAPI microservices for compute-heavy workloads.",
  },
  {
    step: "03",
    title: "Applied AI & Relational Data",
    icon: Cpu,
    color: "#34d399",
    tech: "SpaCy NLP · LangGraph · Sentence Transformers · Prisma · PostgreSQL",
    desc: "Explainable NLP parsing, semantic vector matching, and multi-tenant PostgreSQL schemas with automated migrations.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-[clamp(20px,6vw,80px)] py-16 sm:py-20 md:py-28 border-t border-white/[0.04]"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            title={
              <>
                Engineering <span className="text-sky-400">Approach</span>
              </>
            }
            subtitle="How I structure full-stack web applications and Python AI services from schema design to deployment."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: System Architecture Blueprint Card (Replaces fake 4-line terminal) */}
            <div className="lg:col-span-6">
              <GlowCard
                tiltLevel="low"
                glowColor="rgba(56,189,248,0.10)"
                className="bg-[#0a0d18] border border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-semibold">
                    System Blueprint
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Lahore, PK · UTC+5
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {ARCHITECTURE_LAYERS.map((layer) => {
                    const Icon = layer.icon;
                    return (
                      <div
                        key={layer.step}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-1.5">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center border flex-shrink-0"
                            style={{
                              color: layer.color,
                              borderColor: `${layer.color}35`,
                              backgroundColor: `${layer.color}12`,
                            }}
                          >
                            <Icon size={15} />
                          </div>
                          <span className="text-[11px] font-mono text-slate-400">
                            {layer.step}
                          </span>
                          <h3 className="font-display text-[15px] font-bold text-slate-100">
                            {layer.title}
                          </h3>
                        </div>
                        <p className="text-[12px] sm:text-[13px] text-slate-300 leading-relaxed mb-2">
                          {layer.desc}
                        </p>
                        <p
                          className="text-[11px] font-mono leading-snug"
                          style={{ color: layer.color }}
                        >
                          {layer.tech}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </GlowCard>
            </div>

            {/* Right: De-slopped Bio + Quick Profile Facts */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-[15px] sm:text-[16px] text-slate-200 leading-[1.8] font-medium">
                  I&apos;m Abdul Saboor, a BSCS (Hons.) graduate and full-stack
                  developer based in Lahore. I build web applications that pair
                  responsive React and Next.js interfaces with reliable backend
                  and AI infrastructure.
                </p>
                <p className="text-[14px] sm:text-[15px] text-slate-300 leading-[1.85]">
                  Instead of keeping AI features as isolated scripts, I
                  integrate them into real product workflows. On{" "}
                  <strong className="text-slate-100 font-semibold">
                    ResumeAI
                  </strong>
                  , that meant separating the Next.js and Express web tier from
                  an asynchronous FastAPI worker running SpaCy entity extraction,
                  Sentence Transformer embeddings, and LangGraph agent workflows.
                </p>
                <p className="text-[14px] sm:text-[15px] text-slate-300 leading-[1.85]">
                  Across multi-tenant systems like{" "}
                  <strong className="text-slate-100 font-semibold">
                    Invenzo
                  </strong>{" "}
                  and my 330+ commit e-commerce marketplace for{" "}
                  <strong className="text-slate-100 font-semibold">
                    Royal Aseel Farms
                  </strong>
                  , I focus on strict schema validation (Zod + Prisma),
                  role-based access control, and clean UI state that stays fast
                  on both desktop and mobile devices.
                </p>
              </div>

              {/* Structured Profile Metadata */}
              <div className="mt-8 pt-6 border-t border-white/[0.07] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ABOUT_INFO.map((item) => (
                  <div
                    key={item.key}
                    className="px-4 py-3 rounded-xl bg-[#0a0d18] border border-white/[0.06]"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                      {item.key}
                    </div>
                    <div
                      className={`text-[13px] font-medium ${
                        item.green ? "text-emerald-400" : "text-slate-100"
                      }`}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/AbdulSaboor-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-200 hover:text-white
                    bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-sky-400/40
                    px-4 py-2.5 rounded-xl transition-all duration-200"
                >
                  GitHub Profile <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/abdulsaboor-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-200 hover:text-white
                    bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-sky-400/40
                    px-4 py-2.5 rounded-xl transition-all duration-200"
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
