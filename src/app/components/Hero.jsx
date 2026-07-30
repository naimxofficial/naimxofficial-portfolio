"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { FaCode, FaPaperPlane, FaArrowDown } from "react-icons/fa6";
import ParticleField from "./ParticleField";

const TYPING_WORDS = [
  "Full-Stack Development",
  "React & Next.js",
  "Modern Web Apps",
  "Scalable Systems",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 75);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Particle backdrop — unchanged */}
      {mounted && <ParticleField />}

      {/* Soft vignette — unchanged */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-20 sm:pt-32 lg:py-24">
        
        {/* ── Top status bar ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10 sm:mb-14"
        >
          <div className="hero-badge !mb-0">
            <span className="hero-badge-dot" />
            Available for work
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-3)] animate-pulse" />
            Based in Bangladesh
          </div>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left content — spans more space */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            
            {/* Small label */}
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0}
              className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4"
            >
              MERN-Stack Web Developer
            </motion.p>

            {/* Big name */}
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="font-[var(--font-heading)] text-[clamp(2.6rem,6vw,4.75rem)] font-extrabold leading-[1.05] tracking-tight text-foreground mb-6"
            >
              Md. Naim
              <br />
              <span className="hero-name-gradient">Uddin</span>
            </motion.h1>

            {/* Typing line — now as a status chip */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)] mb-7"
            >
              <span className="text-sm text-muted-foreground">Building</span>
              <span className="font-mono text-sm font-medium text-foreground border-b-2 border-[var(--accent)] pb-0.5">
                {displayText}
                <span className="hero-cursor-blink">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="text-[0.95rem] sm:text-base leading-relaxed text-muted-foreground max-w-lg mb-9"
            >
              A Developer focused on bridging the gap between complex backend systems and clean, user-centric frontends. I craft performant, full-stack applications with modern JavaScript frameworks from database design to deployment.
            </motion.p>

            {/* CTAs + secondary link */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="hero-btn-primary">
                <FaCode className="w-4 h-4" />
                View Projects
              </a>
              <a href="#contact" className="hero-btn-secondary">
                <FaPaperPlane className="w-3.5 h-3.5" />
                Let&apos;s talk
              </a>
            </motion.div>

            {/* Bottom meta row
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={5}
              className="mt-12 pt-8 border-t border-[var(--border)] flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
            >
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider mb-1 opacity-60">
                  Stack
                </span>
                <span className="text-foreground font-medium">MERN + Next.js</span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider mb-1 opacity-60">
                  Focus
                </span>
                <span className="text-foreground font-medium">Production Apps</span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider mb-1 opacity-60">
                  Experience
                </span>
                <span className="text-foreground font-medium">3+ Years</span>
              </div>
            </motion.div> */}
          </div>

          {/* Right — Image (same treatment) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-glow" />

              <div className="hero-image-container">
                <Image
                  src="/naim.png"
                  alt="Md. Naim Uddin — Full Stack Developer"
                  width={380}
                  height={450}
                  priority
                  className="hero-profile-img"
                />
              </div>

              {/* Same corner accents */}
              <div className="hero-corner hero-corner--tl" />
              <div className="hero-corner hero-corner--br" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="hero-float-badge hero-float-badge--bottom"
              >
                <span className="hero-open-dot" />
                <span className="text-white">Open to work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-muted-foreground tracking-[0.2em] uppercase">
            scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-7 bg-gradient-to-b from-[var(--accent)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}