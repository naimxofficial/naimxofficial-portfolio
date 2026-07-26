"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button, Input, TextArea } from "@heroui/react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const CONTACT_INFO = {
  email: "naimxofficial.bd@gmail.com",
  phone: "+8801892974348",
};

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/naimxofficial", label: "GitHub" },
  { icon: FaXTwitter, href: "https://x.com/naimxofficial", label: "X" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" }, // TODO: add your LinkedIn link
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

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
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
    >
      {/* Left: form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <Input
          isrequired='true'
          type="text"
          label="Your Name"
          value={form.name}
          onChange={handleChange("name")}
          radius="none"
          variant="bordered"
        />
        <Input
          isrequired='true'
          type="email"
          label="Email"
          value={form.email}
          onChange={handleChange("email")}
          radius="none"
          variant="bordered"
        />
        <TextArea
          isrequired='true'
          label="How can I help?"
          minrows={5}
          value={form.message}
          onChange={handleChange("message")}
          radius="none"
          variant="bordered"
        />

        <Button
          type="submit"
          isLoading={status === "sending"}
          radius="none"
          className="bg-foreground text-background font-medium px-6 h-12 inline-flex items-center justify-center gap-2 hover:opacity-80 transition-opacity w-full sm:w-fit mt-2"
        >
          {status === "sending" ? "Sending..." : "Get In Touch"}{" "}
          {status !== "sending" && (
            <HiOutlinePaperAirplane className="w-4 h-4 rotate-90" />
          )}
        </Button>

        {status === "sent" && (
          <p className="text-sm text-muted-foreground">
            Thanks for reaching out — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">
            Something went wrong. Please try emailing me directly.
          </p>
        )}

        <div className="flex items-center gap-4 mt-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </motion.form>

      {/* Right: heading + direct contact info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col justify-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Let&apos;s{" "}
          <span className="px-2 -mx-1 bg-foreground text-background rounded-sm">
            talk
          </span>{" "}
          for
          <br />
          Something special
        </h2>

        <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
          Have a project in mind, an opportunity, or just want to say hi?
          I&apos;m always open to new collaborations and full-stack
          development opportunities. Drop a message and I&apos;ll get back
          to you as soon as I can.
        </p>

        <div className="flex flex-col gap-4 mt-8">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 text-sm sm:text-base font-medium hover:opacity-70 transition-opacity"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-border">
              <HiOutlineMail className="w-4 h-4" />
            </span>
            {CONTACT_INFO.email}
          </a>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-3 text-sm sm:text-base font-medium hover:opacity-70 transition-opacity"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-border">
              <HiOutlinePhone className="w-4 h-4" />
            </span>
            {CONTACT_INFO.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}