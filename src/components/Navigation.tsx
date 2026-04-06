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
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="wrap flex items-center justify-between" style={{ height: 64 }}>
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-3" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-logo)", fontSize: "1.35rem", letterSpacing: "0.0618em", color: "var(--charcoal)" }}>estiasi</span>
          <span style={{ width: 16, height: 1, background: "var(--copper)", opacity: 0.5 }} />
          <span style={{ fontSize: "0.4rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--stone)" }}>Culinary Consulting</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontSize: "0.52rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "var(--stone-dark)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--charcoal)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--stone-dark)"; }}
            >{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-dark" style={{ padding: "0.5rem 1.2rem", fontSize: "0.48rem" }}>Book a Call</a>
        </div>
      </div>
    </nav>
  );
}
