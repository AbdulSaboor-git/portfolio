"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeader from "./SectionHeader";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  const [modal, setModal] = useState(null);

  return (
    <section id="projects" className="px-[clamp(20px,6vw,80px)] py-24 border-t border-white/[0.05]">
      <div className="max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            tag="Projects"
            title={
              <>
                Work I&apos;m <span className="text-sky-400">proud of</span>
              </>
            }
            subtitle="From AI-powered SaaS platforms to polished client sites — each project is built with intent, care, and an eye for production quality."
          />
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="h-full"
            >
              <ProjectCard project={project} onClick={() => setModal(project)} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AbdulSaboor-git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-slate-400
              hover:text-sky-400 border border-white/10 hover:border-sky-400/50
              rounded-xl px-7 py-3 transition-all duration-250"
          >
            See all repositories on GitHub ↗
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </section>
  );
}
