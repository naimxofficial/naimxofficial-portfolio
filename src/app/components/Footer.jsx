"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail, HiArrowUp } from "react-icons/hi";

const NAV_LINKS = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/naimxofficial", label: "GitHub" },
  { icon: FaXTwitter, href: "https://x.com/naimxofficial", label: "X" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" }, // TODO: add your LinkedIn link
  { icon: HiOutlineMail, href: "mailto:naimxofficial.bd@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 flex flex-col items-center gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight"
        >
          {/* <span className="inline-block w-2 h-2 rounded-full bg-foreground" /> */}
          naimxofficial<span className="text-foreground/50">.</span>
        </Link>

        {/* Nav links */}
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-border" />

        {/* Bottom row */}
        <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {year} Muhammad Naim Uddin. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-border">
              <HiArrowUp className="w-3.5 h-3.5" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}