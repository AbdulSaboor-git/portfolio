"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  if (!images || images.length === 0) return null;

  const go = (d) => {
    setDir(d);
    setIdx((i) => (i + d + images.length) % images.length);
  };

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
    exit: (d) => ({
      x: d > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.28 },
    }),
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#0a0e1a] aspect-video mb-5">
      <AnimatePresence custom={dir} initial={false}>
        <motion.img
          key={idx}
          src={images[idx]}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full object-cover"
          alt={`Screenshot ${idx + 1}`}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg
              bg-[#070b14]/80 border border-white/10 text-slate-300 hover:text-white
              flex items-center justify-center z-10 transition-all hover:bg-[#070b14]"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg
              bg-[#070b14]/80 border border-white/10 text-slate-300 hover:text-white
              flex items-center justify-center z-10 transition-all hover:bg-[#070b14]"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                className={`h-1.5 rounded-full transition-all duration-300
                  ${i === idx ? "w-5 bg-sky-400" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
