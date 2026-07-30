"use client";

import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const NAV_LINKS = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

const SOCIALS = [
    { icon: FaGithub, href: "https://github.com/naimxofficial", label: "GitHub" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/naimxofficial", label: "X" },
    { icon: HiOutlineMail, href: "mailto:naimxofficial.bd@gmail.com", label: "Email" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden pt-16 pb-8">
            {/* Background glow */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: 600,
                    height: 600,
                    background: "var(--glow)",
                    filter: "blur(140px)",
                    bottom: "-30%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: 0.15,
                    zIndex: 0,
                }}
            />

            <div className="relative z-[1] max-w-[76rem] mx-auto px-5 sm:px-8 lg:px-10">
                {/* Top divider with gradient */}
                <div
                    className="h-px w-full mb-12"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent, var(--accent), var(--accent-2), var(--accent-3), transparent)",
                    }}
                />

                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
                    {/* Brand column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <a
                            href="#"
                            className="inline-block font-heading text-xl font-bold mb-4 no-underline"
                            style={{
                                background:
                                    "linear-gradient(135deg, var(--accent), var(--accent-2))",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            naimxofficial
                        </a>
                        <p
                            className="text-sm leading-relaxed max-w-xs"
                            style={{ color: "var(--muted-foreground)" }}
                        >
                            Full-stack developer specializing in building
                            exceptional digital experiences with modern web
                            technologies.
                        </p>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4
                            className="font-mono text-xs font-semibold uppercase tracking-widest mb-4"
                            style={{ color: "var(--accent-2)" }}
                        >
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-2.5">
                            {NAV_LINKS.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="footer-nav-link"
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Connect column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4
                            className="font-mono text-xs font-semibold uppercase tracking-widest mb-4"
                            style={{ color: "var(--accent-2)" }}
                        >
                            Connect
                        </h4>
                        <div className="flex gap-3 mb-5">
                            {SOCIALS.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={
                                        href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    aria-label={label}
                                    className="footer-social-link"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                        <p
                            className="text-sm"
                            style={{ color: "var(--muted-foreground)" }}
                        >
                            naimxofficial.bd@gmail.com
                        </p>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
                    style={{ borderTop: "1px solid var(--border)" }}
                >
                    <p
                        className="text-xs"
                        style={{ color: "var(--muted-foreground)" }}
                    >
                        &copy; {currentYear} Muhammad Naim Uddin. All rights
                        reserved.
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                        Designed & Built with{" "}
                        <span
                            className="inline-block"
                            style={{
                                color: "var(--accent-2)",
                                animation: "pulse-dot 2s ease-in-out infinite",
                            }}
                        >
                            ♥
                        </span>{" "}
                        using Next.js & Motion
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}