"use client";

import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const MARQUEE_ITEMS = [
  "Next.js",
  "·",
  "React.js",
  "·",
  "TypeScript",
  "·",
  "Node.js & Express",
  "·",
  "FastAPI",
  "·",
  "PostgreSQL",
  "·",
  "Prisma ORM",
  "·",
  "Python",
  "·",
  "LangGraph",
  "·",
  "SpaCy NLP",
  "·",
  "Sentence Transformers",
  "·",
  "Redux Toolkit",
  "·",
  "Tailwind CSS",
  "·",
  "Docker",
  "·",
];

const HERO_METRICS = [
  { value: "6", label: "Shipped Systems" },
  { value: "90%+", label: "NLP Resume Parse Accuracy" },
  { value: "330+", label: "Marketplace Commits" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center text-center
        overflow-hidden px-[clamp(20px,6vw,80px)]
        pt-[96px] sm:pt-[128px] md:pt-[148px] pb-0"
    >
      {/* Radial bloom */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(56,189,248,0.08)_0%,transparent_70%)]"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px]
        bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />

      <div className="flex-1 flex items-center justify-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-[860px] w-full"
        >
          {/* ── Eyebrow ─────────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="mb-5 sm:mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono font-medium uppercase text-[11px] sm:text-[12px] tracking-[0.14em] text-sky-300">
                Abdul Saboor · Full-Stack &amp; AI Engineer
              </span>
            </div>
          </motion.div>

          {/* ── Main heading ─────────────────────────────── */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold tracking-[-0.03em] text-slate-100
              text-[clamp(30px,7.5vw,80px)]
              leading-[0.96] sm:leading-[0.98]
              mb-5 sm:mb-6"
          >
            Full-Stack Web &amp;{" "}
            <span className="relative inline-block">
              <span className="text-sky-400">AI Systems</span>
              <span
                className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-[2px]
                bg-gradient-to-r from-sky-400 to-transparent opacity-45"
              />
            </span>
            <br />
            <span className="text-slate-400">Engineered for Production.</span>
          </motion.h1>

          {/* ── Subtitle ─────────────────────────────────── */}
          <motion.p
            variants={itemVariants}
            className="text-slate-300 leading-[1.75] sm:leading-[1.85] max-w-[650px] mx-auto
              text-[14px] sm:text-[16px] mb-7 sm:mb-9"
          >
            Software engineer based in Lahore specializing in{" "}
            <span className="text-slate-100 font-medium">Next.js 15</span>,{" "}
            <span className="text-slate-100 font-medium">Node.js</span>,{" "}
            <span className="text-slate-100 font-medium">FastAPI</span>, and{" "}
            <span className="text-slate-100 font-medium">PostgreSQL</span>. I
            architect multi-tenant web platforms and Python NLP microservices
            with clean data models and explainable AI workflows.
          </motion.p>

          {/* ── CTAs ─────────────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-10 sm:mb-12"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300
                text-[#06080f] font-bold rounded-full transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(56,189,248,0.3)]
                text-[13px] px-6 py-3 sm:text-[14px] sm:px-7 sm:py-3.5"
            >
              Explore Projects
            </button>

            <button
              onClick={() => scrollTo("skills")}
              className="inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08]
                text-slate-200 font-medium rounded-full border border-white/10 hover:border-white/25
                transition-all duration-200 text-[13px] px-5 py-3 sm:text-[14px] sm:px-6 sm:py-3.5"
            >
              View Architecture Stack
            </button>

            <a
              href="https://linkedin.com/in/abdulsaboor-in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-300 hover:text-white rounded-full border border-white/10
                hover:border-white/35 bg-white/[0.02] transition-all duration-200 p-3 sm:p-3.5"
            >
              <BsLinkedin size={17} />
            </a>
            <a
              href="https://github.com/AbdulSaboor-git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-300 hover:text-white rounded-full border border-white/10
                hover:border-white/35 bg-white/[0.02] transition-all duration-200 p-3 sm:p-3.5"
            >
              <BsGithub size={17} />
            </a>
          </motion.div>

          {/* ── Key Proof Bar ────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-[600px] mx-auto mb-10 sm:mb-14"
          >
            {HERO_METRICS.map((m) => (
              <div
                key={m.label}
                className="px-3 py-3 sm:px-4 sm:py-3.5 rounded-2xl bg-[#0a0d18]/80 border border-white/[0.07]"
              >
                <div className="font-display text-[18px] sm:text-[22px] font-bold text-sky-400 leading-tight">
                  {m.value}
                </div>
                <div className="text-[11px] sm:text-[12px] text-slate-300 font-mono mt-0.5 leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Tech marquee ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 w-full overflow-hidden select-none
          border-t border-white/[0.06] py-3.5 sm:py-4
          [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-5 sm:gap-6">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className={`text-[11px] sm:text-[12px] font-mono whitespace-nowrap flex-shrink-0 ${
                item === "·"
                  ? "text-sky-400/30"
                  : "text-slate-400 hover:text-slate-200 transition-colors cursor-default"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
