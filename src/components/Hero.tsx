"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    gsap.fromTo(headingRef.current, { opacity: 0, y: 25 }, {
      opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3,
    });
  }, []);

  return (
    <section className="relative" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      {/* Video bg with gradient mask at bottom */}
      <div className="absolute inset-0 z-0" style={{ mask: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)", WebkitMask: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)" }}>
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ opacity: 0.35 }}>
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Marble texture overlay */}
      <div className="absolute inset-0 z-0" style={{ mixBlendMode: "overlay", opacity: 0.08 }}>
        <img src="/textures/marble-hero.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="wrap relative z-10" style={{ paddingBottom: "clamp(4rem, 10vh, 8rem)" }}>
        <h1
          ref={headingRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 10vw, 120px)",
            fontWeight: 400,
            color: "var(--limestone)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            maxWidth: "14ch",
            opacity: 0,
          }}
        >
          We bring restaurants to life
        </h1>
      </div>
    </section>
  );
}
