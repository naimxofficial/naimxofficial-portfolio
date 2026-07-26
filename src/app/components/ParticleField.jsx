"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/**
 * Interactive WebGL particle field built with vanilla Three.js.
 * Renders a drifting cloud of points that gently repel away from
 * the cursor, with a slow ambient rotation for atmosphere.
 *
 * Kept as a standalone canvas component so it can be reused/swapped
 * independently of the Hero's text/terminal content.
 */
export default function ParticleField() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let renderer, scene, camera, points, animationId;
    let width = 0;
    let height = 0;

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const isDark = resolvedTheme !== "light";
    const particleColor = isDark ? 0x6366f1 : 0x4f46e5;
    const particleColor2 = isDark ? 0x22d3ee : 0x0891b2;

    let THREE;

    let disposed = false;

    (async () => {
      THREE = await import("three");
      if (disposed) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;

      // --- Scene setup ---
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 28;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // --- Particle geometry: points scattered in a loose sphere ---
      const PARTICLE_COUNT = 900;
      const positions = new Float32Array(PARTICLE_COUNT * 3);
      const basePositions = new Float32Array(PARTICLE_COUNT * 3);
      const colors = new Float32Array(PARTICLE_COUNT * 3);

      const colorA = new THREE.Color(particleColor);
      const colorB = new THREE.Color(particleColor2);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Random point inside a sphere (spread out, slightly flattened)
        const radius = 16 * Math.cbrt(Math.random());
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
        const z = radius * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        basePositions[i * 3] = x;
        basePositions[i * 3 + 1] = y;
        basePositions[i * 3 + 2] = z;

        const mixed = colorA.clone().lerp(colorB, Math.random());
        colors[i * 3] = mixed.r;
        colors[i * 3 + 1] = mixed.g;
        colors[i * 3 + 2] = mixed.b;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.16,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);

      // --- Mouse tracking (normalized -1..1) ---
      const handlePointerMove = (e) => {
        const rect = canvas.parentElement.getBoundingClientRect();
        mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      };
      window.addEventListener("pointermove", handlePointerMove);

      // --- Resize handling ---
      const handleResize = () => {
        const parent = canvas.parentElement;
        width = parent.clientWidth;
        height = parent.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener("resize", handleResize);

      // --- Animation loop ---
      const clock = new THREE.Clock();

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        // Smooth mouse easing
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Slow ambient rotation
        points.rotation.y = elapsed * 0.05;
        points.rotation.x = Math.sin(elapsed * 0.1) * 0.08;

        // Subtle camera parallax following the cursor
        camera.position.x += (mouse.x * 3 - camera.position.x) * 0.04;
        camera.position.y += (mouse.y * 2 - camera.position.y) * 0.04;
        camera.lookAt(scene.position);

        // Gentle per-particle "breathing" drift using the base positions
        const posAttr = geometry.attributes.position;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const ix = i * 3;
          const bx = basePositions[ix];
          const by = basePositions[ix + 1];
          const bz = basePositions[ix + 2];

          const offset = i * 0.37;
          posAttr.array[ix] = bx + Math.sin(elapsed * 0.4 + offset) * 0.25;
          posAttr.array[ix + 1] =
            by + Math.cos(elapsed * 0.35 + offset) * 0.25;
          posAttr.array[ix + 2] = bz + Math.sin(elapsed * 0.3 + offset) * 0.2;
        }
        posAttr.needsUpdate = true;

        renderer.render(scene, camera);
      };
      animate();

      // Cleanup stored on the canvas element for the outer effect cleanup
      canvas._cleanup = () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("resize", handleResize);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      if (canvasRef.current?._cleanup) {
        canvasRef.current._cleanup();
      }
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}