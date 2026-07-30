"use client";

import { motion } from "motion/react";
import { ArrowUpRight, BookOpen } from "lucide-react";

const POSTS = [
  {
    title: "Why I switched to Next.js for full-stack apps",
    excerpt:
      "A practical look at how the App Router, server components, and modern data patterns changed the way I build.",
    date: "Jul 2026",
    tag: "Next.js",
    href: "#", // replace with real link later
  },
  {
    title: "Building secure auth with Better Auth",
    excerpt:
      "Lessons from implementing role-based access, sessions, and protected routes in a real project.",
    date: "Jun 2026",
    tag: "Auth",
    href: "#",
  },
  {
    title: "How Websites Talk: Understanding APIs over Dinner",
    excerpt:
      "Ever wondered how your favorite travel app instantly compares flight prices from dozens of airlines? Or how a weather app knows it’s about to rain in your specific zip code?",
    date: "May 2026",
    tag: "API",
    href: "https://drive.google.com/file/d/1ARo0ZSorcgE1EZElnK_-dmcK_W7cObfL/view?usp=drive_link",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-[420px] h-[420px] rounded-full bg-[var(--glow-3)] blur-[130px] opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-14">
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(99,102,241,0.25)] bg-[rgba(99,102,241,0.08)] text-[var(--accent)] text-xs font-mono font-semibold tracking-widest uppercase mb-5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Blog
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="font-[var(--font-heading)] text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)]"
            >
              Notes &{" "}
              <span className="text-gradient">insights</span>
            </motion.h2>
          </div>

          <motion.a
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            href="#" // link to full blog later
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            View all posts
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.href}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_28px_var(--glow)]"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono font-medium tracking-wider uppercase text-[var(--accent)] bg-[rgba(99,102,241,0.1)] px-2.5 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">
                  {post.date}
                </span>
              </div>

              <h3 className="font-[var(--font-heading)] text-lg font-semibold text-[var(--foreground)] mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h3>

              <p className="text-sm leading-relaxed text-[var(--muted-foreground)] flex-1 mb-5">
                {post.excerpt}
              </p>

              <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] opacity-70 group-hover:opacity-100 transition-opacity">
                Read more
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}