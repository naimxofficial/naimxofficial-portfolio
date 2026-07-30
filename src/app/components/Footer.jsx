"use client";

import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  {
    icon: FaGithub,
    href: "https://github.com/naimxofficial",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/naimxofficial",
    label: "X",
  },
  {
    icon: HiOutlineMail,
    href: "mailto:naimxofficial.bd@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-20 pb-10">
      {/* Soft ambient glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 700,
          height: 700,
          background: "var(--glow)",
          filter: "blur(160px)",
          bottom: "-40%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.12,
          zIndex: 0,
        }}
      />

      <div className="relative z-[1] max-w-[76rem] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Top gradient line */}
        <div
          className="h-px w-full mb-14"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--accent), var(--accent-2), var(--accent-3), transparent)",
          }}
        />

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <a
              href="#"
              className="inline-block font-heading text-2xl font-bold mb-4 no-underline tracking-tight"
            >
              <span className="text-gradient">naimxofficial</span>
            </a>

            <p className="text-sm leading-relaxed text-[var(--muted-foreground)] max-w-sm mb-6">
              Full-stack developer building modern, production-ready web
              applications with clean architecture and thoughtful design.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              Let&apos;s work together
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-3"
          >
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)] mb-5">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300 w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="lg:col-span-4"
          >
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-2)] mb-5">
              Connect
            </h4>

            <div className="flex flex-wrap gap-3 mb-6">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--foreground)] hover:shadow-[0_0_20px_var(--glow)]"
                >
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>

            <a
              href="mailto:naimxofficial.bd@gmail.com"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300"
            >
              naimxofficial.bd@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border)]"
        >
          <p className="text-xs text-[var(--muted-foreground)]">
            © {currentYear} Muhammad Naim Uddin. All rights reserved.
          </p>

          <p className="text-xs text-[var(--muted-foreground)] flex items-center gap-1.5">
            Designed & built with
            <span
              className="text-[var(--accent-2)]"
              style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            >
              ♥
            </span>
            using Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
}