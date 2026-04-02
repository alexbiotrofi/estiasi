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
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
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
    if (mobileMenuRef.current) {
      if (menuOpen) {
        gsap.to(mobileMenuRef.current, {
          clipPath: "inset(0 0 0 0)",
          duration: 0.6,
          ease: "power3.inOut",
        });
        gsap.to(mobileMenuRef.current.querySelectorAll("a"), {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.out",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.4,
          ease: "power3.inOut",
        });
      }
    }
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3"
            : "py-6"
        }`}
        style={{ opacity: 0 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative z-10"
          >
            <span
              className="font-serif text-xl tracking-wide"
              style={{
                fontFamily: "var(--font-serif)",
                color: scrolled ? "var(--charcoal)" : "var(--charcoal)",
              }}
            >
              Estiasi
            </span>
          </button>

          {/* Desktop links */}
          <div
            className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 ${
              scrolled
                ? "bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
                : ""
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] rounded-full transition-all duration-300 hover:bg-[rgba(77,139,138,0.06)] hover:text-teal"
                style={{ color: "var(--charcoal)", opacity: 0.55 }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.opacity = "0.55";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollTo("#contact")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.6rem] font-medium uppercase tracking-[0.2em] transition-all duration-300"
            style={{
              background: "var(--charcoal)",
              color: "var(--marble)",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "var(--teal)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "var(--charcoal)";
            }}
          >
            <span>Book a Call</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
              style={{ background: "var(--charcoal)" }}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
              style={{ background: "var(--charcoal)" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
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
            className="font-serif text-4xl tracking-wide cursor-pointer"
            style={{ color: "var(--charcoal)", opacity: 0, transform: "translateY(20px)" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
