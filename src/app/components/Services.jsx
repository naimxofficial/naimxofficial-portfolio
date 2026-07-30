"use client";

import { motion } from "motion/react";
import {
  Code2,
  LayoutDashboard,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    icon: LayoutDashboard,
    title: "Full-Stack Web Apps",
    description:
      "End-to-end development of modern web applications — from database design to polished UI — using the MERN stack and Next.js.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Robust REST APIs, authentication systems, role-based access, and scalable server-side architecture with Node.js & Express.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Clean, responsive, and performant interfaces built with React and Next.js, focused on usability and modern design patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Auth & Security",
    description:
      "Secure authentication flows, protected routes, and proper access control using modern solutions like Better Auth.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Interfaces that feel native across devices, with careful attention to mobile experience and accessibility.",
  },
  {
    icon: Sparkles,
    title: "UI Polish & Optimization",
    description:
      "Performance tuning, smooth animations, and thoughtful micro-interactions that make products feel refined.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[var(--glow)] blur-[140px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--glow-2)] blur-[120px] opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.08)] text-[var(--accent)] text-xs font-mono font-semibold tracking-widest uppercase mb-5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Services
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4"
          >
            What I can help you{" "}
            <span className="text-gradient">build</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="text-[var(--muted-foreground)] max-w-xl mx-auto text-base leading-relaxed"
          >
            Focused on delivering complete, production-ready solutions — not just
            interfaces.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_30px_var(--glow)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(99,102,241,0.1)] text-[var(--accent)] mb-5 transition-colors duration-300 group-hover:bg-[rgba(99,102,241,0.18)]">
                <Icon className="w-5 h-5" />
              </div>

              <h3 className="font-[var(--font-heading)] text-lg font-semibold text-[var(--foreground)] mb-2.5">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}