"use client";

import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/[0.04] pt-16 pb-8
      px-[clamp(20px,6vw,80px)]"
    >
      {/* Giant bleed name — pure typographic statement */}
      <div
        className="hidden md:block pointer-events-none select-none absolute bottom-4 left-[clamp(16px,5vw,60px)]
        font-display text-[clamp(56px,12vw,140px)] font-bold text-white/[0.025] leading-none
        tracking-[-0.04em] whitespace-nowrap"
      >
        Abdul Saboor
      </div>

      {/* Top row */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
        <div>
          <span className="font-display text-[16px] font-bold text-slate-100">
            Abdul<span className="text-sky-400"> Saboor</span>
          </span>
          <p className="text-[12px] font-mono text-slate-600 mt-1">
            Full-Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/AbdulSaboor-git"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-white/[0.07] text-slate-600
              hover:text-slate-100 hover:border-white/20 transition-all duration-200"
          >
            <BsGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/abdulsaboor-in"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-white/[0.07] text-slate-600
              hover:text-slate-100 hover:border-white/20 transition-all duration-200"
          >
            <BsLinkedin size={16} />
          </a>
          <a
            href="mailto:abdulsaboorcontact@gmail.com"
            className="text-[12px] font-mono text-slate-600 hover:text-slate-300
              border border-white/[0.07] hover:border-white/20 px-4 py-2.5 rounded-lg
              transition-all duration-200"
          >
            abdulsaboorcontact@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 flex justify-center sm:justify-between items-center text-center sm:text-left pt-5 border-t border-white/[0.04]">
        <span className="text-[11px] font-mono text-slate-700">
          © 2026 Abdul Saboor. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
