"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !wordRef.current || !contentRef.current || !overlayRef.current) return;

    const letters = wordRef.current.querySelectorAll<HTMLSpanElement>(".hero-letter");

    const ctx = gsap.context(() => {
      // Initial state — content hidden
      gsap.set(contentRef.current, { opacity: 0, y: 40 });

      // On scroll: letters spread apart, overlay fades, content appears
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=80%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      // Letters spread apart
      letters.forEach((letter, i) => {
        const center = (letters.length - 1) / 2;
        const offset = (i - center) * 120;
        tl.to(letter, {
          x: offset,
          opacity: 0.15,
          scale: 1.1,
          duration: 1,
          ease: "power2.inOut",
        }, 0);
      });

      // Marble overlay fades
      tl.to(overlayRef.current, { opacity: 0, duration: 1 }, 0);

      // Content reveals
      tl.to(contentRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.4);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const letters = "estiasi".split("");

  return (
    <section ref={sectionRef} className="relative" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Background restaurant photo — revealed as letters spread */}
      <div className="absolute inset-0 z-0">
        <img src="/photos/restaurant-interior.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(28,28,26,0.3), rgba(28,28,26,0.6))" }} />
      </div>

      {/* Marble overlay — fades on scroll */}
      <div ref={overlayRef} className="absolute inset-0 z-10">
        <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Giant wordmark — centered, marble shows through */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div ref={wordRef} className="flex items-baseline select-none" style={{ userSelect: "none" }}>
          {letters.map((char, i) => (
            <span
              key={i}
              className="hero-letter inline-block"
              style={{
                fontFamily: "var(--font-logo)",
                fontSize: "clamp(6rem, 18vw, 14rem)",
                fontWeight: 400,
                letterSpacing: "0.0618em",
                color: "var(--charcoal-deep)",
                lineHeight: 0.85,
                willChange: "transform, opacity",
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Copper line under wordmark */}
        <div className="absolute" style={{ bottom: "38%", left: "50%", transform: "translateX(-50%)", width: 48, height: 2, background: "var(--copper)" }} />

        {/* Label above wordmark */}
        <div className="absolute" style={{ top: "28%", left: "50%", transform: "translateX(-50%)" }}>
          <div className="flex items-center gap-3">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--copper)" }} />
            <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.45em", textTransform: "uppercase" as const, color: "var(--copper)" }}>Culinary Consulting · Cyprus</span>
          </div>
        </div>
      </div>

      {/* Content that appears after scroll — over the restaurant photo */}
      <div ref={contentRef} className="absolute inset-0 z-30 flex items-center pointer-events-none">
        <div className="wrap pointer-events-auto">
          <div style={{ maxWidth: 600 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1.12, marginBottom: "1.25rem" }}>
              We bring restaurants to life.
            </h1>

            <div style={{ width: 48, height: 2, background: "var(--copper)", marginBottom: "1.25rem" }} />

            <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", lineHeight: 1.85, maxWidth: "42ch", marginBottom: "2.5rem" }}>
              End-to-end culinary consulting for the hospitality sector. From concept to grand opening — and everything between.
            </p>

            <div className="flex gap-3">
              <a href="#contact" className="btn btn-copper">Book a Discovery Call</a>
              <a href="#work" className="btn" style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>See Our Work</a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(28,28,26,0.5)", backdropFilter: "blur(8px)" }}>
        <div className="wrap">
          <div className="grid grid-cols-3">
            {[{ n: "15+", l: "Years Experience" }, { n: "40+", l: "Venues Supported" }, { n: "3", l: "Countries" }].map((s, i) => (
              <div key={s.l} className="text-center" style={{ padding: "1.5rem 1rem", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--copper-light)", marginBottom: "0.15rem" }}>{s.n}</div>
                <div style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.35)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute z-30" style={{ bottom: "6.5rem", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
        <span style={{ fontSize: "0.4rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--stone)" }}>Scroll</span>
        <div style={{ width: 1, height: 24, background: "var(--copper)", margin: "0.5rem auto 0", opacity: 0.4 }} />
      </div>
    </section>
  );
}
