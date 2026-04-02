"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 2.2, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        clipPath: "inset(0 0 0 0)",
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.to(mobileMenuRef.current.querySelectorAll("a"), {
        opacity: 1, y: 0, stagger: 0.08, duration: 0.5, delay: 0.2, ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          opacity: 0,
          padding: scrolled ? "12px 0" : "20px 0",
          transition: "padding 0.5s ease",
        }}
      >
        <div
          className="max-w-[1300px] mx-auto px-8 md:px-12 flex items-center justify-between rounded-full"
          style={{
            background: scrolled ? "rgba(255,255,255,0.72)" : "transparent",
            backdropFilter: scrolled ? "blur(24px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
            border: scrolled ? "1px solid rgba(200,192,182,0.3)" : "1px solid transparent",
            boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
            padding: "10px 12px",
            transition: "all 0.5s ease",
          }}
        >
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.3rem",
                fontWeight: 400,
                color: "var(--charcoal)",
                letterSpacing: "0.04em",
              }}
            >
              Estiasi
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-[0.65rem] font-medium uppercase rounded-full transition-all duration-300"
                style={{
                  letterSpacing: "0.18em",
                  color: "var(--clay)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--teal)";
                  el.style.background = "rgba(77,139,138,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--clay)";
                  el.style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("#contact")}
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-[0.6rem] font-medium uppercase transition-all duration-300"
            style={{
              letterSpacing: "0.2em",
              background: "var(--charcoal)",
              color: "var(--marble)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--teal)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--charcoal)";
            }}
          >
            Book a Call
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`}
              style={{ background: "var(--charcoal)" }}
            />
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`}
              style={{ background: "var(--charcoal)" }}
            />
          </button>
        </div>
      </nav>

      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8"
        style={{
          background: "rgba(247, 245, 242, 0.97)",
          backdropFilter: "blur(40px)",
          clipPath: "inset(0 0 100% 0)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="cursor-pointer"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "2.5rem",
              fontWeight: 400,
              color: "var(--charcoal)",
              letterSpacing: "0.02em",
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
