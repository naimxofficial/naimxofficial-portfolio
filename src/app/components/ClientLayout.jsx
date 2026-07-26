"use client";

import { useState, useCallback } from "react";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress";
import CustomCursor from "./CustomCursor";
import SmoothScroll from "./SmoothScroll";

export default function ClientLayout({ children }) {
  const [loadingDone, setLoadingDone] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoadingDone(true);
  }, []);

  return (
    <>
      {/* Loading screen — always mounts first */}
      {!loadingDone && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Scroll progress bar */}
      {loadingDone && <ScrollProgress />}

      {/* Navbar — slides in after loading */}
      <Navbar visible={loadingDone} />

      {/* Main content with smooth scroll */}
      <SmoothScroll>
        <main>{children}</main>
      </SmoothScroll>
    </>
  );
}
