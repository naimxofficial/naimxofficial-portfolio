"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";

const PROJECTS = [
  {
    number: "01",
    title: "MediQueue",
    description:
      "A full-stack tutor booking platform where students can discover verified tutors, filter by name or availability, book sessions, and manage everything from a personal dashboard.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Hero UI",
      "MongoDB",
      "Better Auth",
      "Node.js",
      "Express.js",
      "Nodemailer",
    ],
    image: "/projects/mediqueue.png",
    liveLink: "https://mediqueue-puce.vercel.app/",
    githubFrontend: "https://github.com/naimxofficial/MediQueue",
    githubBackend: "https://github.com/naimxofficial/MediQueue-server",
  },
  {
    number: "02",
    title: "RecipeHub",
    description:
      "A full-stack recipe sharing platform where food enthusiasts can publish recipes, browse community recipes, save favorites, purchase premium recipes via Stripe, and unlock unlimited uploads with a premium membership.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Hero UI",
      "MongoDB",
      "Better Auth",
      "Stripe",
      "Node.js",
      "Express.js",
      "Motion",
    ],
    image: "/projects/recipehub.png",
    liveLink: "https://recipehub-lyart.vercel.app/",
    githubFrontend: "https://github.com/naimxofficial/RecipeHub",
    githubBackend: "https://github.com/naimxofficial/RecipeHub-server",
  },
  {
    number: "03",
    title: "Payoo",
    description:
      "A mobile-first digital wallet web app that simulates core banking features — add money from your bank, cash out via agent, transfer funds, pay bills, and track transactions, all from a clean, minimal interface.",
    tech: ["HTML5", "CSS3", "JavaScript", "DaisyUI"],
    image: "/projects/payoo.png",
    liveLink: "https://naimxofficial.github.io/Payoo/",
    githubFrontend: "https://github.com/naimxofficial/Payoo",
    githubBackend: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-16"
      >
        My{" "}
        <span className="px-2 -mx-1 bg-foreground text-background rounded-sm">
          Projects
        </span>
      </motion.h2>

      <div className="space-y-20 lg:space-y-28">
        {PROJECTS.map((project, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                reversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video rounded-md overflow-hidden border border-border group"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: reversed ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <span className="text-5xl font-extrabold text-muted-foreground/30 block mb-2">
                  {project.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                  >
                    Live Site <HiOutlineExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                  >
                    <FaGithub className="w-4 h-4" />
                    {project.githubBackend ? "Frontend Repo" : "GitHub Repo"}
                  </a>

                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                    >
                      <FaGithub className="w-4 h-4" />
                      Backend Repo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}