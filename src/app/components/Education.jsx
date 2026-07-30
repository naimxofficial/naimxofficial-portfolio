"use client";

import { motion } from "motion/react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { SiReact } from "react-icons/si";
import { FaSchool } from "react-icons/fa";

const EDUCATION = [
    {
        title: "MERN Stack Web Development",
        institution: "Programming Hero",
        period: "2026",
        description:
            "Engineered full-stack web applications using MongoDB, Express, React, and Node.js through a rigorous training program, applying industry best practices for frontend and backend architecture.",
        icon: SiReact,
        iconColor: "#BB09F9",
    },
    {
        title: "Diploma in Engineering (Computer Science & Technology)",
        institution: "Feni Government Polytechnic Institute",
        period: "2023 – 2026",
        description:
            "Built a strong foundation in core computer science principles, mastering object-oriented programming, relational database management (DBMS), and network protocols.",
        icon: HiOutlineAcademicCap,
        iconColor: "#6366f1",
    },
    {
        title: "Secondary School Certificate (SSC)",
        institution: "Feni Government Technical School & College",
        period: "2022",
        description:
            "Completed secondary education in Science with a vocational specialization in General Electrical Works, building a strong base in physical sciences and electrical systems.",
        icon: FaSchool,
        iconColor: "#49e3e8",
    },
];

/* Staggered fade-up variant */
const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            delay: i * 0.2,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const dotVariant = {
    hidden: { scale: 0, opacity: 0 },
    show: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: i * 0.2,
            ease: "easeOut",
        },
    }),
};

const lineVariant = {
    hidden: { scaleY: 0 },
    show: {
        scaleY: 1,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function Education() {
    return (
        <section id="education" className="edu-section">
            {/* Background orbs */}
            <div className="edu-bg-orb edu-bg-orb--1" />
            <div className="edu-bg-orb edu-bg-orb--2" />

            <div className="edu-container">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="edu-header"
                >
                    <h2 className="edu-heading-main">EDUCATION</h2>
                    <p className="edu-heading-sub">My academic background</p>
                </motion.div>

                {/* Timeline */}
                <div className="edu-timeline">
                    {/* Vertical line */}
                    <motion.div
                        className="edu-timeline-line"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={lineVariant}
                    />

                    {EDUCATION.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="edu-timeline-item">
                                {/* Dot on the line */}
                                <motion.div
                                    className="edu-timeline-dot"
                                    style={{
                                        background: `linear-gradient(135deg, ${item.iconColor}, ${item.iconColor}cc)`,
                                        boxShadow: `0 0 14px ${item.iconColor}55`,
                                    }}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.5 }}
                                    custom={i}
                                    variants={dotVariant}
                                >
                                    <Icon className="edu-timeline-dot-icon" />
                                </motion.div>

                                {/* Card */}
                                <motion.div
                                    className="edu-card"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    custom={i}
                                    variants={cardVariant}
                                >
                                    <div className="edu-card-header">
                                        <h3 className="edu-card-title">{item.title}</h3>
                                        <span className="edu-card-period">{item.period}</span>
                                    </div>
                                    <p
                                        className="edu-card-institution"
                                        style={{ color: item.iconColor }}
                                    >
                                        {item.institution}
                                    </p>
                                    <p className="edu-card-desc">{item.description}</p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
