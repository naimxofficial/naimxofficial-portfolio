"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const CONTACT_INFO = [
    {
        label: "EMAIL ME",
        value: "naimxofficial.bd@gmail.com",
        href: "mailto:naimxofficial.bd@gmail.com",
        icon: HiOutlineMail,
        color: "#6366f1",
    },
    {
        label: "CALL ME",
        value: "+880 1892-974348",
        href: "tel:+8801892974348",
        icon: HiOutlinePhone,
        color: "#ec4899",
    },
    {
        label: "WHATSAPP",
        value: "+880 1892-974348",
        href: "https://wa.me/8801892974348",
        icon: FaWhatsapp,
        color: "#14b8a6",
    },
    {
        label: "LOCATION",
        value: "Feni, Bangladesh",
        href: null,
        icon: HiOutlineLocationMarker,
        color: "#a78bfa",
    },
];

const SOCIALS = [
    { icon: FaGithub, href: "https://github.com/naimxofficial", label: "GitHub" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/naimxofficial", label: "X" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
};

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");

    const handleChange = (field) => (e) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Failed to send");

            setStatus("sent");
            setForm({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden py-16 lg:py-24"
        >
            {/* Background glow orbs — using portfolio accents */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: 550,
                    height: 550,
                    background: "var(--glow-2)",
                    filter: "blur(120px)",
                    top: "-10%",
                    right: "-8%",
                    opacity: 0.22,
                    zIndex: 0,
                }}
            />
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: 450,
                    height: 450,
                    background: "var(--glow)",
                    filter: "blur(120px)",
                    bottom: "-10%",
                    left: "-10%",
                    opacity: 0.2,
                    zIndex: 0,
                }}
            />

            <div className="relative z-[1] max-w-[76rem] mx-auto px-5 sm:px-8 lg:px-10">
                {/* Section top header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    {/* Label */}
                    <div className="flex items-center gap-3 mb-5">
                        <span
                            className="block rounded"
                            style={{
                                width: "2.5rem",
                                height: 2,
                                background: "var(--accent-2)",
                            }}
                        />
                        <span
                            className="font-mono text-xs font-semibold uppercase tracking-widest"
                            style={{ color: "var(--accent-2)" }}
                        >
                            CONTACT
                        </span>
                    </div>

                    {/* Available badge */}
                    <div className="hero-badge mb-4">
                        <span className="hero-badge-dot" />
                        Open to Work · Available Now
                    </div>

                    {/* Heading */}
                    <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                        Let&apos;s Design{" "}
                        <span
                            className="italic"
                            style={{
                                background:
                                    "linear-gradient(135deg, var(--accent), var(--accent-2), var(--accent-3))",
                                backgroundSize: "300% 300%",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                                animation: "nebula-flow 10s ease infinite",
                            }}
                        >
                            Together
                        </span>
                    </h2>
                </motion.div>

                {/* Main two-column grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
                    {/* Left: info */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <motion.h3
                            variants={fadeUp}
                            custom={0}
                            className="font-heading text-xl font-bold mb-3"
                        >
                            Reach Out Directly
                        </motion.h3>
                        <motion.p
                            variants={fadeUp}
                            custom={1}
                            className="text-sm leading-7 mb-7 max-w-md"
                            style={{ color: "var(--muted-foreground)" }}
                        >
                            Have an idea or a project in mind? Drop a line here.
                            I&apos;m always open to discussing new projects,
                            creative ideas, or opportunities to be part of your
                            visions.
                        </motion.p>

                        {/* Contact info cards */}
                        <div className="flex flex-col gap-3">
                            {CONTACT_INFO.map((item, i) => {
                                const Icon = item.icon;
                                const Wrapper = item.href ? "a" : "div";
                                const wrapperProps = item.href
                                    ? {
                                          href: item.href,
                                          target: item.href.startsWith("http")
                                              ? "_blank"
                                              : undefined,
                                          rel: item.href.startsWith("http")
                                              ? "noopener noreferrer"
                                              : undefined,
                                      }
                                    : {};

                                return (
                                    <motion.div
                                        key={item.label}
                                        variants={fadeUp}
                                        custom={i + 2}
                                    >
                                        <Wrapper
                                            {...wrapperProps}
                                            className="contact-info-card-item"
                                        >
                                            <span
                                                className="flex items-center justify-center w-10 h-10 rounded-full border text-lg shrink-0"
                                                style={{
                                                    color: item.color,
                                                    borderColor: `${item.color}35`,
                                                }}
                                            >
                                                <Icon />
                                            </span>
                                            <div>
                                                <span
                                                    className="block font-mono text-[0.6rem] font-semibold tracking-widest uppercase mb-0.5"
                                                    style={{
                                                        color: "var(--muted-foreground)",
                                                    }}
                                                >
                                                    {item.label}
                                                </span>
                                                <span className="block text-sm font-semibold">
                                                    {item.value}
                                                </span>
                                            </div>
                                        </Wrapper>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl border"
                            style={{
                                borderColor: "var(--border)",
                                background: "var(--card)",
                            }}
                        >
                            {/* Row: name + email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name *"
                                    required
                                    value={form.name}
                                    onChange={handleChange("name")}
                                    className="contact-input-field"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    required
                                    value={form.email}
                                    onChange={handleChange("email")}
                                    className="contact-input-field"
                                />
                            </div>

                            {/* Subject */}
                            <input
                                type="text"
                                placeholder="Subject"
                                value={form.subject}
                                onChange={handleChange("subject")}
                                className="contact-input-field"
                            />

                            {/* Message */}
                            <textarea
                                placeholder="Your Message *"
                                required
                                rows={5}
                                value={form.message}
                                onChange={handleChange("message")}
                                className="contact-input-field contact-textarea-field"
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="contact-send-btn"
                            >
                                {status === "sending"
                                    ? "Sending..."
                                    : status === "sent"
                                    ? "Message Sent ✓"
                                    : "Send Message →"}
                            </button>

                            {/* Status */}
                            {status === "sent" && (
                                <p className="text-sm font-medium" style={{ color: "var(--accent-3)" }}>
                                    Thanks for reaching out — I&apos;ll get back to you soon!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-sm font-medium" style={{ color: "#f87171" }}>
                                    Something went wrong. Please try emailing me directly.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-14 pt-8 border-t"
                    style={{ borderColor: "var(--border)" }}
                >
                    <span
                        className="block font-mono text-[0.7rem] font-semibold tracking-widest uppercase mb-4"
                        style={{ color: "var(--accent-2)" }}
                    >
                        // CONNECT ON SOCIALS
                    </span>
                    <div className="flex gap-3">
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
                                className="contact-social-icon"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}