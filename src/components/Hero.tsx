"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !subRef.current) return;
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
    });
    tl.fromTo(subRef.current, { opacity: 0, y: 15 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
    }, "-=0.6");
  }, []);

  return (
    <section className="relative" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      {/* Video with gradient mask */}
      <div className="absolute inset-0 z-0" style={{ mask: "linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)", WebkitMask: "linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)" }}>
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ opacity: 0.4 }}>
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Marble texture overlay */}
      <div className="absolute inset-0 z-0" style={{ mixBlendMode: "overlay", opacity: 0.06 }}>
        <img src="/textures/marble-hero.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="wrap relative z-10" style={{ paddingBottom: "clamp(3rem, 8vh, 6rem)", paddingLeft: "clamp(2rem, 4vw, 40px)" }}>
        <h1
          ref={headingRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 9vw, 120px)",
            fontWeight: 400,
            color: "var(--limestone)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            maxWidth: "100%",
            opacity: 0,
          }}
        >
          We bring<br />restaurants to life
        </h1>
        <div ref={subRef} style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.6rem", opacity: 0 }}>
          <span style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--copper)",
            animation: "pulse 3s ease-in-out infinite",
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: "0.5rem",
            fontWeight: 500,
            letterSpacing: "0.4em",
            textTransform: "uppercase" as const,
            color: "var(--white-30)",
          }}>
            Culinary Consulting · Cyprus
          </span>
          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 0.4; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.3); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
