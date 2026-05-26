"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlowCard from "./GlowCard";
import SectionHeader from "./SectionHeader";
import { CONTACT_LINKS } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const sub = encodeURIComponent(form.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Hi Abdul,\n\n${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.open(
      `mailto:abdulsaboorcontact@gmail.com?subject=${sub}&body=${body}`,
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputCls =
    "bg-[#0d1526]/90 border border-white/[0.07] rounded-xl px-4 py-3 text-[14px] text-slate-100 " +
    "placeholder:text-slate-700 w-full outline-none focus:border-sky-400/60 transition-colors duration-200 font-body";

  return (
    <section
      id="contact"
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
            tag="Contact"
            title={
              <>
                Let&apos;s work <span className="text-sky-400">together</span>
              </>
            }
            subtitle="Have a project in mind, a role to fill, or just want to say hello? I'm always open to great conversations and new opportunities."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Your Name",
                    key: "name",
                    placeholder: "Abdul Saboor",
                  },
                  {
                    label: "Your Email",
                    key: "email",
                    placeholder: "hello@email.com",
                  },
                ].map((f) => (
                  <div key={f.key} className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-slate-600 tracking-wide">
                      {f.label}
                    </label>
                    <input
                      className={inputCls}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) =>
                        setForm({ ...form, [f.key]: e.target.value })
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-slate-600 tracking-wide">
                  Subject
                </label>
                <input
                  className={inputCls}
                  placeholder="Project inquiry"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-slate-600 tracking-wide">
                  Message
                </label>
                <textarea
                  className={`${inputCls} resize-y min-h-[120px]`}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <button
                onClick={handleSubmit}
                className={`w-full py-3.5 rounded-xl text-[14px] font-bold text-[#070b14] transition-all duration-300
                  ${sent ? "bg-emerald-400" : "bg-sky-400 hover:bg-sky-300 hover:-translate-y-px"}`}
              >
                {sent ? "Opening email client ✓" : "Send Message →"}
              </button>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((c) => (
                <GlowCard
                  key={c.label}
                  glowColor="rgba(56,189,248,0.08)"
                  className="group bg-[#0d1526]/90 border border-white/[0.07] rounded-2xl
                    hover:border-sky-400/25 hover:translate-x-1 transition-all duration-250"
                >
                  <a
                    href={c.href}
                    target={
                      c.href.startsWith("mailto") || c.href.startsWith("tel")
                        ? undefined
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="flex justify-between items-center px-5 py-4 no-underline"
                  >
                    <div>
                      <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-[0.07em] mb-1">
                        {c.label}
                      </div>
                      <div className="text-[14px] font-semibold text-slate-100">
                        {c.value}
                      </div>
                    </div>
                    <span
                      className="text-[18px] text-slate-600 group-hover:text-sky-400
                      group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    >
                      →
                    </span>
                  </a>
                </GlowCard>
              ))}

              {/* Quick response note */}
              <div className="mt-1 p-5 bg-sky-400/[0.04] border border-sky-400/15 rounded-2xl">
                <p className="text-[12px] font-semibold text-sky-400 mb-1.5">
                  ⚡ Quick response
                </p>
                <p className="text-[13px] text-slate-600 leading-[1.7]">
                  I typically reply within 24 hours. For urgent projects, Email
                  is the fastest way to reach me.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
