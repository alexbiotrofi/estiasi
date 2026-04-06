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

      // Phase 2: Each word reveals — stays fully visible once it appears
      words.forEach((word, i) => {
        const startTime = 0.25 + i * 0.12;
        tl.fromTo(word, {
          opacity: 0,
          y: 40,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.12,
          ease: "power3.out",
        }, startTime);
      });

      // Brief pause with all words visible
      const allWordsTime = 0.25 + words.length * 0.12 + 0.08;

      // Phase 4: CTA fades in
      tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.1, ease: "power2.out",
      }, allWordsTime + 0.05);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // taglineWords no longer used — words are hardcoded in two lines for layout control

  return (
    <section ref={sectionRef} className="relative" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Restaurant image with slow Ken Burns zoom */}
      <div className="absolute inset-0 z-0" style={{ overflow: "hidden" }}>
        <img
          ref={videoRef as React.RefObject<HTMLImageElement | null>}
          src="/photos/restaurant-interior.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.3)", animation: "kenBurns 25s ease-in-out infinite alternate" }}
        />
        <style>{`
          @keyframes kenBurns {
            0% { transform: scale(1) translate(0, 0); }
            100% { transform: scale(1.12) translate(-1%, -1%); }
          }
        `}</style>
      </div>

      {/* Marble texture blend */}
      <div className="absolute inset-0 z-1" style={{ mixBlendMode: "soft-light", opacity: 0.15 }}>
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(1rem, 3vw, 2rem)" }}>
          {/* Line 1: We Bring */}
          <div className="flex items-baseline justify-center" style={{ gap: "0 0.7em" }}>
            {["We", "Bring"].map((word, i) => (
              <span key={i} className="tagline-word inline-block" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 10vw, 8.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1, letterSpacing: "0.06em", opacity: 0, willChange: "transform, opacity" }}>{word}</span>
            ))}
          </div>
          {/* Line 2: Restaurants */}
          <div className="flex items-baseline justify-center">
            <span className="tagline-word inline-block" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 10vw, 8.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1, letterSpacing: "0.06em", opacity: 0, willChange: "transform, opacity" }}>Restaurants</span>
          </div>
          {/* Line 3: to Life. */}
          <div className="flex items-baseline justify-center" style={{ gap: "0 0.6em" }}>
            {["to", "Life."].map((word, i) => (
              <span key={i + 3} className="tagline-word inline-block" style={{ fontFamily: "var(--font-display)", fontSize: word === "to" ? "clamp(2rem, 6vw, 5.5rem)" : "clamp(3.5rem, 10vw, 8.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1, letterSpacing: "0.06em", opacity: 0, willChange: "transform, opacity" }}>{word}</span>
            ))}
          </div>
        </div>

        {/* CTA — appears after tagline */}
        <div ref={ctaRef} className="pointer-events-auto" style={{ marginTop: "3.5rem", opacity: 0 }}>
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

      {/* Scroll indicator — animated line */}
      <div className="absolute bottom-8 left-1/2 z-30" style={{ transform: "translateX(-50%)", textAlign: "center" }}>
        <span style={{ fontSize: "0.38rem", fontWeight: 500, letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.35)" }}>Scroll</span>
        <div style={{ width: 1, height: 40, margin: "0.5rem auto 0", position: "relative", overflow: "hidden", background: "rgba(255,255,255,0.08)" }}>
          <div style={{ width: "100%", height: "100%", background: "var(--copper)", animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
        <style>{`
          @keyframes scrollPulse {
            0% { transform: translateY(-100%); }
            50% { transform: translateY(0); }
            100% { transform: translateY(100%); }
          }
        `}</style>
      </div>
    </section>
  );
}
