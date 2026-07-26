"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const percentRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);
  const watermarkRef = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide the loading screen up
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
            onComplete: () => {
              if (onComplete) onComplete();
            },
          });
        },
      });

      // Animate the percentage counter
      const counter = { value: 0 };
      tl.to(counter, {
        value: 100,
        duration: 2.4,
        ease: "power2.inOut",
        onUpdate: () => {
          setPercent(Math.round(counter.value));
        },
      });

      // Animate the progress bar in sync
      tl.to(
        barRef.current,
        {
          width: "100%",
          duration: 2.4,
          ease: "power2.inOut",
        },
        0 // start at the same time
      );

      // Fade in the percentage number
      tl.fromTo(
        percentRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
        0
      );

      // Fade in the welcome text with stagger feel
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.4
      );

      // Slowly drift the watermark
      tl.fromTo(
        watermarkRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 2, ease: "power2.out" },
        0
      );

      // Hold for a beat at 100%
      tl.to({}, { duration: 0.3 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="loading-screen">
      {/* Watermark background text */}
      <div ref={watermarkRef} className="loading-watermark">
        PORTFOLIO
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center relative z-10">
        <div ref={percentRef} className="loading-percentage">
          {percent}%
        </div>
        <div ref={textRef} className="loading-text mt-4">
          Welcome to my portfolio
        </div>
        <div className="loading-bar-track">
          <div ref={barRef} className="loading-bar-fill" />
        </div>
      </div>
    </div>
  );
}
