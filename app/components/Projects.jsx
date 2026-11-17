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
    <section
      id="projects"
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
<<<<<<< HEAD
                Work I&apos;m <span className="text-sky-400">proud of</span>
              </>
            }
            subtitle="From AI-powered SaaS to polished client sites — built with intent, care, and an eye for production quality."
=======
                Selected <span className="text-sky-400">Engineering</span> Work
              </>
            }
            subtitle="Full-stack web platforms, multi-seller marketplaces, and Python AI microservices. Click any project to inspect screenshots and architecture highlights."
>>>>>>> 55e6d52267296b44005b7be089f8fee0a985db1c
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="h-full"
            >
              <ProjectCard
                project={project}
                onClick={() => setModal(project)}
              />
            </motion.div>
          ))}
        </div>

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
<<<<<<< HEAD
            className="inline-flex items-center gap-2 text-[13px] font-mono text-slate-600
              hover:text-slate-300 border border-white/[0.07] hover:border-white/30
=======
            className="inline-flex items-center gap-2 text-[13px] font-mono text-slate-300
              hover:text-white border border-white/10 hover:border-sky-400/40 bg-white/[0.02]
>>>>>>> 55e6d52267296b44005b7be089f8fee0a985db1c
              rounded-full px-6 py-2.5 transition-all duration-250"
          >
            ↗ View all repositories on GitHub
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {modal && (
          <ProjectModal project={modal} onClose={() => setModal(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
