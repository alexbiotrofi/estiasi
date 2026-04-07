"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 3.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), wheelMultiplier: 0.45 });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
}
