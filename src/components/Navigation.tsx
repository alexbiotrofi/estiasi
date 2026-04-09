"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{
        background: scrolled ? "rgba(244,241,236,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        padding: "12px 0",
      }}>
        <div className="wrap flex items-center justify-between">
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-logo)", fontSize: "1.4rem", letterSpacing: "0.0618em", color: scrolled ? "var(--charcoal)" : "#fff", transition: "color 0.3s" }}>estιasι</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{ fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: scrolled ? "var(--stone-dark)" : "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = scrolled ? "var(--charcoal)" : "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.color = scrolled ? "var(--stone-dark)" : "rgba(255,255,255,0.6)"; }}
              >{l.label}</a>
            ))}
            <a href="#contact" className="btn" style={{
              padding: "0.45rem 1.2rem", fontSize: "0.5rem",
              background: scrolled ? "var(--charcoal)" : "transparent",
              color: scrolled ? "var(--limestone)" : "#fff",
              borderColor: scrolled ? "var(--charcoal)" : "rgba(255,255,255,0.3)",
            }}>Hire Us</a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: menuOpen ? "0px" : "5px", transition: "gap 0.2s" }}>
              <span style={{ width: "20px", height: "1px", background: scrolled ? "var(--charcoal)" : "#fff", display: "block", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translateY(0.5px)" : "none" }} />
              <span style={{ width: "20px", height: "1px", background: scrolled ? "var(--charcoal)" : "#fff", display: "block", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translateY(-0.5px)" : "none" }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" style={{ background: "rgba(244,241,236,0.98)", paddingTop: "80px" }}>
          <div className="wrap flex flex-col gap-5">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 400, color: "var(--charcoal)", textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
            <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-dark" style={{ width: "100%", justifyContent: "center" }}>Hire Us</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
