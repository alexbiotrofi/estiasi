"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  const wordRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wordRef.current) return;

    const letters = wordRef.current.querySelectorAll(".h-letter");
    const tl = gsap.timeline({ delay: 0.3 });

    // Letters fade in one by one
    tl.fromTo(letters, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: "power3.out",
    });

    // Copper line draws in
    tl.fromTo(lineRef.current, { scaleX: 0 }, {
      scaleX: 1,
      duration: 0.6,
      ease: "power2.inOut",
    }, "-=0.2");

    // Tagline fades in
    tl.fromTo(tagRef.current, { opacity: 0, y: 15 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.3");

    // CTAs fade in
    tl.fromTo(ctaRef.current, { opacity: 0, y: 10 }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    }, "-=0.2");
  }, []);

  return (
    <section className="relative" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Marble texture overlay — blended subtly */}
      <div className="absolute inset-0 z-1" style={{ mixBlendMode: "soft-light", opacity: 0.25 }}>
        <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Content — centred */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center" style={{ padding: "0 2rem" }}>
        {/* Small label */}
        <div className="flex items-center gap-2" style={{ marginBottom: "2.5rem" }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--copper)" }} />
          <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.5em", textTransform: "uppercase" as const, color: "var(--copper-light)" }}>Culinary Consulting · Cyprus</span>
        </div>

        {/* Wordmark — big, beautiful, the star */}
        <div ref={wordRef} className="flex items-baseline justify-center">
          {"estiasi".split("").map((char, i) => (
            <span
              key={i}
              className="h-letter inline-block"
              style={{
                fontFamily: "var(--font-logo)",
                fontSize: "clamp(4.5rem, 13vw, 10rem)",
                fontWeight: 400,
                letterSpacing: "0.0618em",
                color: "#fff",
                lineHeight: 0.9,
                opacity: 0,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Copper line */}
        <div ref={lineRef} style={{ width: 56, height: 2, background: "var(--copper)", margin: "2rem auto", transformOrigin: "center", transform: "scaleX(0)" }} />

        {/* Tagline */}
        <div ref={tagRef} style={{ opacity: 0 }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 400, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, maxWidth: "28ch", margin: "0 auto" }}>
            We bring restaurants to life.
          </p>
          <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: "44ch", margin: "1rem auto 0" }}>
            End-to-end culinary consulting. From concept to grand opening.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex gap-3" style={{ marginTop: "2.5rem", opacity: 0 }}>
          <a href="#contact" className="btn btn-copper">Book a Discovery Call</a>
          <a href="#work" className="btn" style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>See Our Work</a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.35)", backdropFilter: "blur(12px)" }}>
        <div className="wrap">
          <div className="grid grid-cols-3">
            {[{ n: "15+", l: "Years Experience" }, { n: "40+", l: "Venues Supported" }, { n: "3", l: "Countries" }].map((s, i) => (
              <div key={s.l} className="text-center" style={{ padding: "1.5rem 1rem", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--copper-light)", marginBottom: "0.15rem" }}>{s.n}</div>
                <div style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
