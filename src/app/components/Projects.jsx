"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import {
    SiMongodb,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiDaisyui,
    SiStripe,
    SiFramer,
    SiVite,
} from "react-icons/si";
import {
    HiOutlineColorSwatch,
    HiOutlineShieldCheck,
    HiOutlineCode,
} from "react-icons/hi";

/* ── Icon map for tech badges ── */
const ICON_MAP = {
    "Next.js": SiNextdotjs,
    "React": SiReact,
    "Tailwind CSS": SiTailwindcss,
    "DaisyUI": SiDaisyui,
    "Hero UI": HiOutlineColorSwatch,
    "MongoDB": SiMongodb,
    "Better Auth": HiOutlineShieldCheck,
    "Stripe": SiStripe,
    "Motion": SiFramer,
    "Vite": SiVite,
};

const PROJECTS = [
    {
        title: "MediQueue — Tutor Booking Platform",
        description:
            "A full-stack tutor booking platform where students discover verified tutors, filter by name or availability, book sessions, and manage everything from a personal dashboard.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "DaisyUI",
            "Hero UI",
            "MongoDB",
            "Better Auth",
        ],
        image: "/projects/mediqueue.png",
        accentColor: "#6366f1",
        icon: SiNextdotjs,
        liveLink: "https://mediqueue-puce.vercel.app/",
        clientRepo: "https://github.com/naimxofficial/MediQueue",
        serverRepo: "https://github.com/naimxofficial/MediQueue-server",
    },
    {
        title: "RecipeHub — Recipe Sharing Platform",
        description:
            "A full-stack recipe sharing platform with community recipes, favorites, Stripe-powered premium membership, admin dashboard, and category-based browsing with pagination.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Hero UI",
            "MongoDB",
            "Better Auth",
            "Stripe",
            "Motion",
        ],
        image: "/projects/recipehub.png",
        accentColor: "#ec4899",
        icon: SiMongodb,
        liveLink: "https://recipehub-lyart.vercel.app/",
        clientRepo: "https://github.com/naimxofficial/RecipeHub",
        serverRepo: "https://github.com/naimxofficial/RecipeHub-server",
    },
    {
        title: "DigiTools — Digital Tools Platform",
        description:
            "A modern React-based platform for exploring digital tools and products, managing a shopping cart, viewing pricing plans, and subscribing — built with a sleek purple gradient theme.",
        tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
        ],
        image: "/projects/digitools.png",
        accentColor: "#14b8a6",
        icon: SiReact,
        liveLink: "https://digitools-platform-naimxofficial.netlify.app/",
        clientRepo: "https://github.com/naimxofficial/DigiTools-Platform",
        serverRepo: null,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
    }),
};

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            {/* Background orbs */}
            <div className="projects-bg-orb projects-bg-orb--1" />
            <div className="projects-bg-orb projects-bg-orb--2" />

            <div className="projects-container">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="projects-header"
                >
                    <h2 className="projects-heading-main">FEATURED PROJECTS</h2>
                    <p className="projects-heading-sub">Some of my recent work</p>
                </motion.div>

                {/* Cards grid */}
                <div className="projects-grid">
                    {PROJECTS.map((project, i) => {
                        const ProjectIcon = project.icon;
                        return (
                            <motion.div
                                key={project.title}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={i}
                                variants={fadeUp}
                                className="project-card"
                            >
                                {/* Image */}
                                <div className="project-card-image-wrapper">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card-image-link"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="project-card-img"
                                        />
                                    </a>

                                    {/* Icon badge */}
                                    <div
                                        className="project-card-icon-badge"
                                        style={{
                                            background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}dd)`,
                                            boxShadow: `0 4px 20px ${project.accentColor}55`,
                                        }}
                                    >
                                        <ProjectIcon className="project-card-icon" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="project-card-content">
                                    <h3 className="project-card-title">{project.title}</h3>
                                    <p className="project-card-desc">{project.description}</p>

                                    {/* Tech tags */}
                                    <div className="project-card-tags">
                                        {project.tech.map((t) => (
                                            <span key={t} className="project-card-tag">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="project-card-actions">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-btn project-btn--live"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.clientRepo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-btn project-btn--outline"
                                        >
                                            Client
                                        </a>
                                        {project.serverRepo ? (
                                            <a
                                                href={project.serverRepo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-btn project-btn--outline"
                                            >
                                                Server
                                            </a>
                                        ) : (
                                            <a
                                                href={project.clientRepo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-btn project-btn--outline"
                                            >
                                                Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View all button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="projects-view-all"
                >
                    <a
                        href="https://github.com/naimxofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-view-all-btn"
                    >
                        View All Projects
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}