"use client";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ padding: "24px 0" }}>
      <div className="wrap flex items-center justify-between">
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontFamily: "var(--font-logo)", fontSize: "1.4rem", letterSpacing: "0.0618em", color: "var(--limestone)" }}>estιasι</span>
          <span style={{ fontSize: "0.5rem", color: "var(--white-30)" }}>—</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@estiasi.com" style={{ fontSize: "0.65rem", fontWeight: 400, color: "var(--white-50)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => { e.currentTarget.style.color = "var(--copper)"; }} onMouseLeave={e => { e.currentTarget.style.color = "var(--white-50)"; }}>hello@estiasi.com</a>
          <a href="#contact" className="btn" style={{ padding: "0.5rem 1.5rem", fontSize: "0.55rem" }}>Hire Us</a>
        </div>
      </div>
    </nav>
  );
}
