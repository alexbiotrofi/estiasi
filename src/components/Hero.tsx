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
  const wordRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
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
      tl.to(videoRef.current, { filter: "brightness(0.15)", duration: 0.3 }, 0);

      // Phase 2: Intro paragraph fades in
      words.forEach((el, i) => {
        tl.to(el, {
          opacity: 1,
          duration: 0.15,
          ease: "power2.out",
        }, 0.25 + i * 0.08);
      });

      // Phase 3: CTA fades in
      tl.fromTo(ctaRef.current, { opacity: 0, y: 15 }, {
        opacity: 1, y: 0, duration: 0.1, ease: "power2.out",
      }, 0.55);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // taglineWords no longer used — words are hardcoded in two lines for layout control

  return (
    <section ref={sectionRef} className="relative" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef as React.RefObject<HTMLVideoElement | null>}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.3)" }}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Marble texture blend */}
      <div className="absolute inset-0 z-1" style={{ mixBlendMode: "soft-light", opacity: 0.15 }}>
        <img src="/textures/marble-1.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Layer 1: Wordmark — visible on load, fades on scroll */}
      <div ref={wordmarkRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Label */}
        <div ref={labelRef} className="flex items-center gap-2" style={{ marginBottom: "2rem" }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--copper)" }} />
          <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.5em", textTransform: "uppercase" as const, color: "var(--copper-light)" }}>Culinary Consulting · Cyprus</span>
        </div>

        {/* Big wordmark — marble texture flowing through letters */}
        <h1
          ref={wordRef}
          className="h-letter"
          style={{
            fontFamily: "var(--font-logo)",
            fontSize: "clamp(5rem, 14vw, 11rem)",
            fontWeight: 400,
            letterSpacing: "0.0618em",
            lineHeight: 0.85,
            color: "transparent",
            WebkitTextFillColor: "transparent",
            backgroundImage: "url(/textures/marble-hero.jpg)",
            backgroundSize: "250% 250%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            filter: "brightness(1.3) contrast(1.1)",
            animation: "marbleFlow 40s linear infinite alternate",
          }}
        >
          estιasι
        </h1>
        <style>{`
          @keyframes marbleFlow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}</style>

        {/* Copper line */}
        <div style={{ width: 48, height: 2, background: "var(--copper)", marginTop: "2rem" }} />
      </div>

      {/* Layer 2: Intro paragraph — left aligned, body font, revealed on scroll */}
      <div ref={taglineRef} className="absolute inset-0 z-20 flex items-center pointer-events-none" style={{ padding: "0" }}>
        <div className="wrap">
          <div style={{ maxWidth: "540px" }}>
            <p className="tagline-word" style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.9,
              opacity: 0,
            }}>
              Estιasι is a culinary consultancy that brings restaurants to life. We take your vision — from the first sketch on a napkin to a fully operational venue — and build every system, every menu, every team that makes it run.
            </p>

            <div style={{ width: 32, height: 2, background: "var(--copper)", margin: "2rem 0", opacity: 0 }} className="tagline-word" />

            <p className="tagline-word" style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.85,
              maxWidth: "44ch",
              opacity: 0,
            }}>
              End-to-end advisory and operational consulting for the hospitality sector. Based in Cyprus, operating across Europe.
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="pointer-events-auto" style={{ marginTop: "2rem", opacity: 0 }}>
              <a
                href="#work"
                className="btn"
                style={{
                  background: "var(--copper)",
                  color: "#fff",
                  padding: "1rem 2.5rem",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                }}
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — animated line */}
      <div className="absolute bottom-40 left-1/2 z-30" style={{ transform: "translateX(-50%)", textAlign: "center" }}>
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
