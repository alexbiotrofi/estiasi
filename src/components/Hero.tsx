"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Entrance animation for wordmark
      const letters = document.querySelectorAll(".h-letter");
      gsap.fromTo(letters, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out", delay: 0.4,
      });
      gsap.fromTo(labelRef.current, { opacity: 0 }, {
        opacity: 1, duration: 0.6, delay: 0.8, ease: "power2.out",
      });

      // Scroll-driven timeline
      const words = document.querySelectorAll(".tagline-word");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
        },
      });

      // Phase 1: Wordmark and label fade out, video dims
      tl.to(wordmarkRef.current, { opacity: 0, scale: 0.95, duration: 0.3, ease: "power2.in" }, 0);
      tl.to(labelRef.current, { opacity: 0, duration: 0.2 }, 0);
      tl.to(videoRef.current, { filter: "brightness(0.15)", duration: 0.3 }, 0);

      // Phase 2: Each word of tagline reveals — big, one at a time
      words.forEach((word, i) => {
        const startTime = 0.25 + i * 0.15;
        tl.fromTo(word, {
          opacity: 0,
          y: 60,
          scale: 0.9,
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.15,
          ease: "power3.out",
        }, startTime);

        // Fade previous word slightly as next one appears (except last)
        if (i > 0) {
          tl.to(words[i - 1], { opacity: 0.2, duration: 0.1 }, startTime);
        }
      });

      // Phase 3: All words visible together at full opacity
      const allWordsTime = 0.25 + words.length * 0.15;
      tl.to(words, { opacity: 1, duration: 0.1 }, allWordsTime);

      // Phase 4: CTA fades in
      tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.1, ease: "power2.out",
      }, allWordsTime + 0.05);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const taglineWords = ["We", "Bring", "Restaurants", "to", "Life."];

  return (
    <section ref={sectionRef} className="relative" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
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

      {/* Marble texture blend */}
      <div className="absolute inset-0 z-1" style={{ mixBlendMode: "soft-light", opacity: 0.2 }}>
        <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Layer 1: Wordmark — visible on load, fades on scroll */}
      <div ref={wordmarkRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Label */}
        <div ref={labelRef} className="flex items-center gap-2" style={{ marginBottom: "2rem", opacity: 0 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--copper)" }} />
          <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.5em", textTransform: "uppercase" as const, color: "var(--copper-light)" }}>Culinary Consulting · Cyprus</span>
        </div>

        {/* Big wordmark */}
        <div className="flex items-baseline justify-center">
          {"estiasi".split("").map((char, i) => (
            <span
              key={i}
              className="h-letter inline-block"
              style={{
                fontFamily: "var(--font-logo)",
                fontSize: "clamp(5rem, 14vw, 11rem)",
                fontWeight: 400,
                letterSpacing: "0.0618em",
                color: "#fff",
                lineHeight: 0.85,
                opacity: 0,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Copper line */}
        <div style={{ width: 48, height: 2, background: "var(--copper)", marginTop: "2rem" }} />
      </div>

      {/* Layer 2: Tagline — scroll-revealed, word by word */}
      <div ref={taglineRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none" style={{ padding: "0 2rem" }}>
        <div className="flex flex-wrap items-baseline justify-center" style={{ maxWidth: "90vw", gap: "0 0.4em" }}>
          {taglineWords.map((word, i) => (
            <span
              key={i}
              className="tagline-word inline-block"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 9vw, 8rem)",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.05,
                opacity: 0,
                willChange: "transform, opacity",
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* CTA — appears after tagline */}
        <div ref={ctaRef} className="pointer-events-auto" style={{ marginTop: "3rem", opacity: 0 }}>
          <a
            href="#work"
            className="btn"
            style={{
              background: "var(--copper)",
              color: "#fff",
              padding: "1.1rem 3rem",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
            }}
          >
            See Our Work
          </a>
        </div>
      </div>

      {/* Stats bar — always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.35)", backdropFilter: "blur(12px)" }}>
        <div className="wrap">
          <div className="grid grid-cols-3">
            {[{ n: "15+", l: "Years Experience" }, { n: "40+", l: "Venues Supported" }, { n: "3", l: "Countries" }].map((s, i) => (
              <div key={s.l} className="text-center" style={{ padding: "1.25rem 1rem", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--copper-light)", marginBottom: "0.1rem" }}>{s.n}</div>
                <div style={{ fontSize: "0.4rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
