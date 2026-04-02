"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Badge
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    // Title — letter by letter
    if (titleRef.current) {
      const text = titleRef.current.textContent || "";
      titleRef.current.innerHTML = text
        .split("")
        .map(
          (char) =>
            `<span class="inline-block" style="opacity:0;transform:translateY(60px)">${char === " " ? "&nbsp;" : char}</span>`
        )
        .join("");

      tl.to(
        titleRef.current.querySelectorAll("span"),
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.035,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }

    // Line
    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
      "-=0.4"
    );

    // Subtitle
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    // Tagline
    tl.fromTo(
      taglineRef.current,
      { opacity: 0, y: 15 },
      { opacity: 0.5, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );

    // CTA
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.2"
    );

    // Scroll indicator
    tl.fromTo(
      scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.1"
    );

    // Parallax on scroll
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scroll = window.scrollY;
      const h = heroRef.current.offsetHeight;
      if (scroll < h) {
        gsap.set(titleRef.current, { y: scroll * 0.15 });
        gsap.set(subtitleRef.current, { y: scroll * 0.08 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden marble-bg"
    >
      {/* Orbs */}
      <div className="orb orb-teal" style={{ top: "-12%", right: "-8%" }} />
      <div className="orb orb-copper" style={{ bottom: "-8%", left: "-5%" }} />
      <div className="orb orb-white" style={{ top: "35%", left: "35%" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10"
          style={{
            background: "var(--glass)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.4)",
            opacity: 0,
          }}
        >
          <span
            className="w-[5px] h-[5px] rounded-full"
            style={{ background: "var(--teal)", opacity: 0.5 }}
          />
          <span
            className="text-[0.6rem] font-medium tracking-[0.3em] uppercase"
            style={{ color: "var(--clay)" }}
          >
            Culinary Consulting &middot; Cyprus
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-serif leading-[0.88] mb-0"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(4.5rem, 11vw, 10rem)",
            fontWeight: 300,
            color: "var(--charcoal)",
            letterSpacing: "0.02em",
          }}
        >
          Estiasi
        </h1>

        {/* Copper line */}
        <div
          ref={lineRef}
          className="mx-auto my-8"
          style={{
            width: "40px",
            height: "1px",
            background: "var(--copper)",
            opacity: 0.5,
            transformOrigin: "center",
          }}
        />

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-sans text-sm tracking-[0.55em] uppercase mb-6"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: "0.6rem",
            color: "var(--teal)",
            opacity: 0,
          }}
        >
          Where Precision Meets Hospitality
        </p>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-sm max-w-xl mx-auto leading-relaxed"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "0.95rem",
            color: "var(--clay)",
            opacity: 0,
            lineHeight: 1.8,
          }}
        >
          End-to-end advisory and operational consulting for the hospitality
          sector. From concept to grand opening — and everything between.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          style={{ opacity: 0 }}
        >
          <a
            href="#contact"
            className="magnetic-btn"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Book a Discovery Call</span>
          </a>
          <a
            href="#services"
            className="px-7 py-3.5 rounded-full text-[0.65rem] font-medium uppercase tracking-[0.18em] transition-all duration-300"
            style={{
              color: "var(--charcoal)",
              border: "1px solid rgba(44,44,44,0.12)",
              opacity: 0.7,
            }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.opacity = "1";
              el.style.borderColor = "rgba(77,139,138,0.3)";
              el.style.color = "var(--teal)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.opacity = "0.7";
              el.style.borderColor = "rgba(44,44,44,0.12)";
              el.style.color = "var(--charcoal)";
            }}
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span
          className="text-[0.5rem] tracking-[0.3em] uppercase"
          style={{ color: "var(--stone)" }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-8 overflow-hidden"
          style={{ background: "rgba(200,192,182,0.3)" }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "var(--teal)",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
        <style jsx>{`
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            50% { transform: translateY(0); }
            100% { transform: translateY(100%); }
          }
        `}</style>
      </div>
    </section>
  );
}
