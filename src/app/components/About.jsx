"use client";

import { motion } from "motion/react";

const paragraphs = [
  "I'm Muhammad Naim Uddin, a self-taught MERN Stack Developer based in Feni, Bangladesh. I specialize in building full-stack web applications with React, Next.js, Node.js, Express, and MongoDB — with a strong focus on clean code, responsive UI, and smooth, accessible user experiences.",
  "My path into development wasn't a straight line. Before writing my first line of code, I spent 2 years working as a teacher. That experience shaped how I approach problems today — breaking complex ideas into simple steps, staying patient through trial and error, and communicating clearly, whether I'm explaining a concept or documenting code.",
  "I later transitioned fully into web development, diving deep into modern tools and workflows — from authentication and payments (Better Auth, Stripe) to deployment (Vercel, Netlify) and AI-assisted coding to build and ship faster. I'm currently focused on sharpening my MERN stack skills and building real, production-ready projects.",
  "When I'm not coding, you can usually find me exploring new web technologies, reading documentation, or experimenting with small side projects to learn by building. You can follow my work on GitHub or reach out — I'm always open to new opportunities and collaborations.",
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
    >
      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-sm mx-auto lg:mx-0 aspect-square border border-border rounded-md p-8 bg-card flex items-center justify-center order-1 lg:order-0"
      >
        <AboutIllustration />
      </motion.div>

      {/* Text */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          About{" "}
          <span className="px-2 -mx-1 bg-foreground text-background rounded-sm">
            Me
          </span>
        </motion.h2>

        <div className="space-y-5">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Simple flat illustration: person with arms crossed, confident pose */
function AboutIllustration() {
  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto text-foreground"
    >
      {/* Head */}
      <circle cx="180" cy="110" r="44" fill="currentColor" />

      {/* Hair */}
      <path
        d="M138 102c0-28 18-48 42-48s42 20 42 48c0-8-4-12-9-13-4-13-17-20-33-20s-29 7-33 20c-5 1-9 5-9 13z"
        fill="currentColor"
      />

      {/* Face cutout (background color) - simple eyes/smile suggestion */}
      <circle cx="165" cy="108" r="3.5" className="fill-background" />
      <circle cx="195" cy="108" r="3.5" className="fill-background" />
      <path
        d="M168 124c6 5 18 5 24 0"
        stroke="currentColor"
        strokeWidth="0"
        className="stroke-background"
        strokeLinecap="round"
      />

      {/* Neck */}
      <rect x="166" y="148" width="28" height="20" fill="currentColor" />

      {/* Body / torso with crossed arms */}
      <path
        d="M90 320c0-70 25-130 90-130s90 60 90 130z"
        fill="currentColor"
      />

      {/* Collar */}
      <path d="M152 198h56l10 22h-76z" className="fill-background" />

      {/* Crossed arms shape */}
      <path
        d="M120 250c20 18 40 22 60 22s40-4 60-22l6 26c-22 20-44 26-66 26s-44-6-66-26z"
        className="fill-background"
        opacity="0.9"
      />
      <path
        d="M120 250c20 18 40 22 60 22s40-4 60-22"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />

      {/* Decorative dots */}
      <circle cx="60" cy="80" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="300" cy="70" r="6" fill="currentColor" opacity="0.3" />
      <circle cx="290" cy="300" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="55" cy="290" r="4" fill="currentColor" opacity="0.3" />
    </svg>
  );
}