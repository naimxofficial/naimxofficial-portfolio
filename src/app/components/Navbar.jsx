"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ThemeSwitch } from "./ThemeSwitch";
import {
  Home,
  User,
  Code2,
  FolderKanban,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Education", href: "#education", icon: GraduationCap },
];

export default function Navbar({ visible }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${id}`);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setActiveSection(href);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-[9999] px-4 sm:px-6 pt-4"
        >
          {/* Main navbar container — glassmorphic, centered pill */}
          <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14 rounded-2xl glass border border-[var(--navbar-border)]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1.5 font-bold text-base tracking-tight shrink-0"
            >
              <span className="text-gradient font-heading">naimxofficial</span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-foreground/60 hover:text-foreground/90"
                      }`}
                    >
                      {/* Active pill background */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        {link.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right side: Hire Me + Theme Toggle + Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className="hidden lg:inline-flex text-white font-semibold px-5 py-2 rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                }}
              >
                Hire Me
              </Link>

              {mounted && <ThemeSwitch />}

              {/* Mobile hamburger */}
              <button
                aria-label="Toggle menu"
                onClick={() => setIsOpen((prev) => !prev)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors hover:bg-foreground/5"
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile menu overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="lg:hidden mt-2 mx-auto max-w-4xl rounded-2xl glass border border-[var(--navbar-border)] overflow-hidden"
              >
                <ul className="flex flex-col p-4 gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => handleLinkClick(link.href)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                            isActive
                              ? "text-white"
                              : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                          }`}
                          style={
                            isActive
                              ? { background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }
                              : undefined
                          }
                        >
                          <Icon className="w-4 h-4" />
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}

                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + NAV_LINKS.length * 0.05 }}
                    className="mt-2"
                  >
                    <Link
                      href="#contact"
                      onClick={() => handleLinkClick("#contact")}
                      className="flex items-center justify-center gap-2 text-white font-semibold px-5 py-3 rounded-xl text-base transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                      }}
                    >
                      Hire Me
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}