"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";

const GITHUB_USERNAME = "naimxofficial";

export default function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // ghchart.rshah.org renders a GitHub-style contribution graph as an SVG image
  // for any public username — no API key/token required.
  const chartColor = mounted && resolvedTheme === "dark" ? "6366f1" : "4f46e5";
  const chartUrl = `https://ghchart.rshah.org/${chartColor}/${GITHUB_USERNAME}`;

  // github-readme-stats: renders a stats card (repos, stars, commits) as an SVG image
  const statsTheme = mounted && resolvedTheme === "dark" ? "dark" : "default";
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&include_all_commits=true&count_private=true&theme=${statsTheme}&hide_border=true&bg_color=00000000&title_color=6366f1&icon_color=22d3ee&text_color=9498a8`;

  return (
    <section
      id="github"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
      >
        GitHub{" "}
        <span className="text-gradient">Activity</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-12"
      >
        A real, live snapshot of what I&apos;ve been building and
        committing — straight from GitHub.
      </motion.p>

      <div className="space-y-8">
        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-border bg-card/60 backdrop-blur-md p-4 sm:p-6 overflow-x-auto glow"
        >
          {mounted && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={chartUrl}
              alt={`${GITHUB_USERNAME} GitHub contribution graph`}
              className="min-w-[640px] w-full"
            />
          )}
        </motion.div>

        {/* Stats card + profile link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-6"
        >
          {mounted && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={statsUrl}
              alt={`${GITHUB_USERNAME} GitHub stats`}
              className="w-full max-w-xl"
            />
          )}

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <FaGithub className="w-4 h-4" />
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}