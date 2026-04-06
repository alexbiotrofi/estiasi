export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "3rem 0" }}>
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--charcoal)" }}>estiasi</span>
          <span style={{ fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--stone-light)" }}>
            Culinary Consulting &middot; Cyprus
          </span>
        </div>
        <div className="flex items-center gap-6">
          {["About", "Services", "Projects", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--stone)", textDecoration: "none" }}
            >
              {l}
            </a>
          ))}
        </div>
        <span style={{ fontSize: "0.48rem", letterSpacing: "0.1em", color: "var(--stone-light)" }}>
          &copy; {new Date().getFullYear()} estiasi
        </span>
      </div>
    </footer>
  );
}
