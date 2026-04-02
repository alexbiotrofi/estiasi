"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useRevealAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal up
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Reveal left
      gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Reveal right
      gsap.utils.toArray<HTMLElement>(".reveal-right").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Reveal scale
      gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Stagger children
      gsap.utils.toArray<HTMLElement>(".stagger-children").forEach((parent) => {
        const children = parent.children;
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: parent,
            start: "top 85%",
            once: true,
          },
        });
      });

      // Parallax elements
      gsap.utils.toArray<HTMLElement>(".parallax").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.2");
        gsap.to(el, {
          y: () => -speed * 200,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Horizontal text scroll
      gsap.utils.toArray<HTMLElement>(".text-scroll").forEach((el) => {
        gsap.to(el, {
          x: () => -el.scrollWidth / 2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

export function useSplitText() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".split-text");
    elements.forEach((el) => {
      const text = el.textContent || "";
      el.innerHTML = text
        .split("")
        .map(
          (char, i) =>
            `<span style="display:inline-block;opacity:0;transform:translateY(40px);animation:splitReveal 0.6s ${i * 0.03}s forwards cubic-bezier(0.16,1,0.3,1)">${char === " " ? "&nbsp;" : char}</span>`
        )
        .join("");
    });
  }, []);
}

export { gsap, ScrollTrigger };
