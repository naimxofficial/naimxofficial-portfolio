"use client";

import { motion } from "motion/react";
import { VscVscode } from "react-icons/vsc";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiReact,
    SiDaisyui,
    SiFramer,
    SiGit,
    SiGithub,
    SiStripe,
    SiNetlify,
    SiVercel,
    SiGreensock,
} from "react-icons/si";
import {
    HiOutlineShieldCheck,
    HiOutlineColorSwatch,
    HiOutlineCode,
} from "react-icons/hi";
import { TbApi } from "react-icons/tb";

/* ── Row 1: Technologies ── */
const TECH_SKILLS = [
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "Express.js", icon: SiExpress, color: "#ffffff" },
    { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
    { name: "Hero UI", icon: HiOutlineColorSwatch, color: "#6366f1" },
    { name: "React.js", icon: SiReact, color: "#61dafb" },
    { name: "DaisyUI", icon: SiDaisyui, color: "#1ad1a5" },
    { name: "Motion", icon: SiFramer, color: "#e846ff" },
    { name: "GSAP", icon: SiGreensock, color: "#88ce02" },
    { name: "REST API", icon: TbApi, color: "#14b8a6" },
    { name: "Lenis", icon: HiOutlineCode, color: "#ec4899" },
];

/* ── Row 2: Tools ── */
const TOOL_SKILLS = [
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "Stripe", icon: SiStripe, color: "#635bff" },
    { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Better Auth", icon: HiOutlineShieldCheck, color: "#6366f1" },
    { name: "VS Code", icon: VscVscode, color: "#007acc" },
];

/* Duplicate items so the scroll looks infinite */
function tripleList(items) {
    return [...items, ...items, ...items];
}

/* Single marquee card */
function SkillCard({ skill }) {
    const Icon = skill.icon;
    return (
        <div className="skills-marquee-card">
            <Icon className="skills-marquee-icon" style={{ color: skill.color }} />
            <span className="skills-marquee-name">{skill.name}</span>
        </div>
    );
}

/* Separator slash */
function Slash() {
    return <span className="skills-marquee-slash">/</span>;
}

/* A single scrolling row */
function MarqueeRow({ items, direction = "left", duration = 35 }) {
    const tripled = tripleList(items);

    return (
        <div className="skills-marquee-track">
            <motion.div
                className="skills-marquee-inner"
                animate={{
                    x: direction === "left"
                        ? ["0%", "-33.333%"]
                        : ["-33.333%", "0%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration,
                        ease: "linear",
                    },
                }}
            >
                {tripled.map((skill, i) => (
                    <div key={`${skill.name}-${i}`} className="skills-marquee-item">
                        <SkillCard skill={skill} />
                        {i < tripled.length - 1 && <Slash />}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            {/* Background glow orbs */}
            <div className="skills-bg-orb skills-bg-orb--1" />
            <div className="skills-bg-orb skills-bg-orb--2" />

            <div className="skills-container">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="skills-header"
                >
                    <span className="skills-badge">
                        <span className="skills-badge-dot" />
                        Tech Stack
                    </span>
                    <h2 className="skills-heading">
                        Technologies &{" "}
                        <span className="skills-heading-highlight">Tools</span>
                    </h2>
                    <p className="skills-subtitle">
                        The technologies and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                {/* Marquee rows */}
                <div className="skills-marquee-wrapper">
                    {/* Row 1 — Technologies → scrolls left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <span className="skills-row-label">Technologies</span>
                        <div className="skills-marquee-row">
                            <div className="skills-marquee-fade skills-marquee-fade--left" />
                            <MarqueeRow items={TECH_SKILLS} direction="left" duration={40} />
                            <div className="skills-marquee-fade skills-marquee-fade--right" />
                        </div>
                    </motion.div>

                    {/* Row 2 — Tools → scrolls right */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <span className="skills-row-label">Tools &amp; Services</span>
                        <div className="skills-marquee-row">
                            <div className="skills-marquee-fade skills-marquee-fade--left" />
                            <MarqueeRow items={TOOL_SKILLS} direction="right" duration={30} />
                            <div className="skills-marquee-fade skills-marquee-fade--right" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}