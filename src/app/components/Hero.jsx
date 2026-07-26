"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { FaCode, FaPaperPlane } from "react-icons/fa6";
import ParticleField from "./ParticleField";

const TYPING_WORDS = [
  "Problem Solving",
  "Web Development",
  "React & Next.js",
  "MongoDB & Node.js",
  "UI/UX Design",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.13, ease: "easeOut" },
  }),
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => setMounted(true), []);

  // Typing animation
  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 45);
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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Interactive WebGL particle backdrop */}
      {mounted && <ParticleField />}

      {/* Vignette overlay */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 lg:py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Left Column: Text Content ── */}
          <div className="flex-1 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Available badge */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0}
              className="hero-badge"
            >
              <span className="hero-badge-dot" />
              Available for work
            </motion.div>

            {/* Name */}
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="hero-heading"
            >
              Hi, I&apos;m
              <br />
              <span className="hero-name-gradient">Md. Naim Uddin</span>
            </motion.h1>

            {/* Typing effect */}
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
              className="hero-typing-line"
            >
              I specialize in{" "}
              <span className="hero-typing-word">
                {displayText}
                <span className="hero-cursor-blink">|</span>
              </span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="hero-description"
            >
              I engineer scalable, high-performance web applications using
              modern technologies such as Next.js, Node.js, MongoDB and
              React — delivering responsive, user-focused digital
              experiences with precision and consistency.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={4}
              className="hero-cta-group"
            >
              <a href="#projects" className="hero-btn-primary">
                <FaCode className="w-4 h-4" />
                View Projects
              </a>
              <a href="#contact" className="hero-btn-secondary">
                <FaPaperPlane className="w-3.5 h-3.5" />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* ── Right Column: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 order-1 lg:order-2"
          >
            <div className="hero-image-wrapper">
              {/* Glow backdrop */}
              <div className="hero-image-glow" />

              {/* Image container */}
              <div className="hero-image-container">
                <Image
                  src="/naim.png"
                  alt="Md. Naim Uddin — MERN Stack Developer"
                  width={380}
                  height={450}
                  priority
                  className="hero-profile-img"
                />
              </div>

              {/* Floating badge: Top Rated Dev */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="hero-float-badge hero-float-badge--top"
              >
                <span className="hero-float-badge-icon">⭐</span>
                Top Rated Dev
              </motion.div>

              {/* Floating badge: Open to work */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="hero-float-badge hero-float-badge--bottom"
              >
                <span className="hero-open-dot" />
                Open to work
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
          <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
            scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}