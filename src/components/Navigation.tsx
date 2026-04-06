"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="wrap flex items-center justify-between" style={{ height: "64px" }}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3"
          style={{ textDecoration: "none" }}
        >
          <span style={{ fontFamily: "'Zodiak', serif", fontSize: "1.4rem", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "0.04em" }}>
            estiasi
          </span>
          <span style={{ width: "16px", height: "1px", background: "var(--copper)", opacity: 0.5 }} />
          <span style={{ fontSize: "0.4rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--stone)" }}>
            Culinary Consulting
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.55rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--stone-dark)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--charcoal)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--stone-dark)"; }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: "0.55rem 1.25rem", fontSize: "0.5rem" }}>
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
