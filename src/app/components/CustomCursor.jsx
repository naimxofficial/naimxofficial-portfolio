"use client";

import { useEffect, useRef, useCallback } from "react";

const PARTICLE_COUNT = 25;        // Increased for more sparkles
const PARTICLE_LIFETIME = 650;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const particlesRef = useRef([]);
  const particleContainerRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const lastParticleTime = useRef(0);
  const particleIndex = useRef(0);
  const rafId = useRef(null);

  const createParticles = useCallback(() => {
    if (!particleContainerRef.current) return;
    const container = particleContainerRef.current;
    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const el = document.createElement("div");
      el.className = "cursor-particle";
      container.appendChild(el);
      particles.push(el);
    }

    particlesRef.current = particles;
  }, []);

  const spawnParticle = useCallback((x, y) => {
    const particles = particlesRef.current;
    if (!particles.length) return;

    const p = particles[particleIndex.current % PARTICLE_COUNT];
    particleIndex.current++;

    const offsetX = (Math.random() - 0.5) * 18;
    const offsetY = (Math.random() - 0.5) * 18;
    const size = 3 + Math.random() * 5;

    // Random slight rotation for sparkle feel
    const rotation = Math.random() * 40 - 20;

    p.style.left = `${x + offsetX}px`;
    p.style.top = `${y + offsetY}px`;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.opacity = "0.85";
    p.style.transform = `translate(-50%, -50%) scale(1) rotate(${rotation}deg)`;
    p.style.transition = "none";

    p.offsetHeight; // Force reflow

    // Animate out with sparkle effect
    p.style.transition = `opacity ${PARTICLE_LIFETIME}ms cubic-bezier(0.4, 0, 1, 1), 
                          transform ${PARTICLE_LIFETIME}ms cubic-bezier(0.4, 0, 1, 1)`;
    p.style.opacity = "0";
    p.style.transform = `translate(-50%, -50%) scale(0.2) rotate(${rotation + 25}deg)`;
  }, []);

  // ... (rest of your useEffect stays mostly the same)

  useEffect(() => {
    // Touch detection...
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    createParticles();

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }

      const now = Date.now();
      if (now - lastParticleTime.current > 22) {   // Faster spawn rate
        spawnParticle(e.clientX, e.clientY);
        lastParticleTime.current = now;
      }
    };

    // Ring animation, hover handlers, etc. (keep your existing code)

    const animateRing = () => {
      const lerp = 0.11;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafId.current = requestAnimationFrame(animateRing);
    };

    // ... (add your other listeners: mouseover, mouseout, etc.)

    window.addEventListener("mousemove", onMouseMove);
    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [createParticles, spawnParticle]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div 
        ref={particleContainerRef} 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none z-[99997] overflow-hidden"
      />
    </>
  );
}