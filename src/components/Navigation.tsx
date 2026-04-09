"use client";

import { useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#about" },
  { label: "Track Record", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ padding: "16px 0" }}>
        <div className="wrap flex items-center justify-between">
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-logo)", fontSize: "1.4rem", letterSpacing: "0.0618em", color: "var(--limestone)" }}>estιasι</span>
            <span style={{ fontSize: "0.5rem", color: "var(--white-30)" }}>—</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="mailto:hello@estiasi.com" style={{ fontSize: "0.65rem", fontWeight: 400, color: "var(--white-50)", textDecoration: "none" }}>hello@estiasi.com</a>
            <a href="#contact" className="btn" style={{ padding: "0.5rem 1.5rem", fontSize: "0.55rem" }}>Hire Us</a>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: menuOpen ? "0px" : "5px", transition: "gap 0.2s" }}>
              <span style={{ width: "20px", height: "1px", background: "var(--limestone)", display: "block", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translateY(0.5px)" : "none" }} />
              <span style={{ width: "20px", height: "1px", background: "var(--limestone)", display: "block", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translateY(-0.5px)" : "none" }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" style={{ background: "rgba(0,0,0,0.97)", paddingTop: "80px" }}>
          <div className="wrap flex flex-col gap-6">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 400, color: "var(--limestone)", textDecoration: "none" }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ marginTop: "2rem", borderTop: "1px solid var(--border-dark)", paddingTop: "2rem" }}>
              <a href="mailto:hello@estiasi.com" style={{ fontSize: "0.8rem", color: "var(--white-50)", textDecoration: "none", display: "block", marginBottom: "1rem" }}>hello@estiasi.com</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-copper" style={{ width: "100%", justifyContent: "center" }}>Hire Us</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
