"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";

export default function NotFound() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-5 mt-25">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--glow)] blur-[160px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--glow-2)] blur-[120px] opacity-20 pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Big 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-[var(--font-heading)] text-[clamp(6rem,20vw,9rem)] font-extrabold leading-none tracking-tighter mb-2"
        >
          <span className="text-gradient">404</span>
        </motion.h1>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-5"
        >
          Page not found
        </motion.p>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-[var(--muted-foreground)] text-base leading-relaxed mb-10 max-w-sm mx-auto"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] shadow-[0_0_24px_var(--glow)] hover:shadow-[0_0_32px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaHouse className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[var(--foreground)] border border-[var(--border)] bg-transparent hover:border-[var(--accent)] hover:bg-[rgba(99,102,241,0.06)] transition-all duration-300"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
            Go Back
          </button>
        </motion.div>

        {/* Small footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-14 text-xs text-[var(--muted-foreground)] font-mono"
        >
          naimxofficial
        </motion.p>
      </div>
    </section>
  );
}