export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "3rem 0" }}>
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-4">
        <span style={{ fontFamily: "var(--font-logo)", fontSize: "1.2rem", letterSpacing: "0.0618em", color: "var(--charcoal)" }}>estiasi</span>
        <div className="flex items-center gap-6">
          {["Work", "Process", "About", "Pricing", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "var(--stone)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <span style={{ fontSize: "0.45rem", letterSpacing: "0.1em", color: "var(--stone-light)" }}>© {new Date().getFullYear()} estiasi · Cyprus</span>
      </div>
    </footer>
  );
}
