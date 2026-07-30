"use client";

import { motion } from "motion/react";
import { FaDownload, FaArrowRight } from "react-icons/fa6";
import { User, Code2, Layers, GraduationCap, Users } from "lucide-react";

/* ── Metrics ── */
const METRICS = [
  {
    icon: Code2,
    value: "3+",
    label: "Years Building",
    desc: "Learning + shipping",
  },
  {
    icon: Layers,
    value: "MERN",
    label: "Core Stack",
    desc: "Next.js • Express • MongoDB",
  },
  {
    icon: GraduationCap,
    value: "CST",
    label: "Diploma",
    desc: "Computer Science & Technology",
  },
  {
    icon: Users,
    value: "Mentor",
    label: "Experience",
    desc: "Club guidance & competitions",
  },
];

/* ── Focus areas ── */
const FOCUS = [
  "Modern full-stack apps",
  "Production-ready architecture",
  "Auth & role-based systems",
  "Dashboards & SaaS patterns",
  "Clean, maintainable code",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* Background */}
      <div className="about-bg-orb about-bg-orb--1" />
      <div className="about-bg-orb about-bg-orb--2" />
      <div className="about-bg-grid" />

      <div className="about-container">
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="about-badge mx-auto"
          >
            <User className="w-3.5 h-3.5" />
            ABOUT
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="about-heading"
          >
            Building with intention.
            <br />
            <span className="about-heading-highlight">
              Shipping with precision.
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="about-subtitle mx-auto"
          >
            A developer focused on modern technologies and
            production-ready applications.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="about-divider mx-auto max-w-xs"
          />
        </div>

        {/* ── Main glass card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl p-6 sm:p-8 md:p-10 border border-[var(--border-glass)]"
        >
          {/* Bio */}
          <div className="max-w-3xl mx-auto space-y-5 text-center sm:text-left">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-[0.95rem] leading-relaxed text-[var(--muted-foreground)]"
            >
              I&apos;m{" "}
              <span className="text-[var(--foreground)] font-semibold">
                Md. Naim Uddin
              </span>
              , a MERN-stack developer with a Diploma in Engineering in Computer Science &
              Technology. I started coding out of genuine curiosity about how
              systems work under the hood — and that curiosity turned into a
              focused practice of building complete, modern web applications.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-[0.95rem] leading-relaxed text-[var(--muted-foreground)]"
            >
              I work primarily with the{" "}
              <span className="text-[var(--foreground)] font-medium">MERN</span>{" "}
              stack and current tooling (Next.js, Express, MongoDB, Better Auth)
              to deliver applications that are technically solid and ready for
              real users. My current focus is taking on more demanding,
              production-level projects where architecture, performance and
              long-term maintainability actually matter.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="text-[0.95rem] leading-relaxed text-[var(--muted-foreground)]"
            >
              Along the way I have mentored peers through a computer club and
              participated in skill competitions. Those experiences sharpened
              how I communicate complex ideas and structure problems — habits I
              still rely on every day when shipping software.
            </motion.p>
          </div>

          {/* Metrics grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {METRICS.map(({ icon: Icon, value, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.07 }}
                className="group relative rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-5 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_24px_var(--glow)]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(99,102,241,0.12)] text-[var(--accent)]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-[var(--font-heading)] text-xl font-bold text-[var(--foreground)] tracking-tight">
                  {value}
                </div>
                <div className="mt-0.5 text-sm font-medium text-[var(--foreground)]">
                  {label}
                </div>
                <div className="mt-1 text-xs text-[var(--muted-foreground)] leading-snug">
                  {desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Focus chips */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="mt-8 pt-8 border-t border-[var(--border)]"
          >
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--muted-foreground)] mb-4 text-center sm:text-left">
              Current Focus
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2.5">
              {FOCUS.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 + i * 0.05 }}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm border border-[var(--border)] bg-[rgba(99,102,241,0.06)] text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[rgba(99,102,241,0.12)] transition-colors duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Resume CTA */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={5}
            className="mt-10 flex justify-center sm:justify-start"
          >
            <a href="/resume.pdf" download className="about-resume-btn">
              <FaDownload className="w-4 h-4" />
              Download Resume
              <FaArrowRight className="about-resume-arrow" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}