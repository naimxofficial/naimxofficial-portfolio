"use client";

import { motion } from "motion/react";
import { HiOutlineCode, HiOutlineSparkles, HiOutlineClock, HiOutlineCollection } from "react-icons/hi";

const STATS = [
  { icon: HiOutlineCollection, value: "3+", label: "Projects Shipped" },
  { icon: HiOutlineCode, value: "20+", label: "Technologies Used" },
  { icon: HiOutlineClock, value: "2", label: "Years of Self-Driven Learning" },
  { icon: HiOutlineSparkles, value: "100%", label: "AI-Assisted Workflow Ready" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-accent">
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-gradient">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}