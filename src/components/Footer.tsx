export default function Footer() {
  return (
    <footer style={{ padding: "64px 0 40px", borderTop: "1px solid var(--border)" }}>
      <div className="wrap flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span style={{ fontFamily: "var(--font-logo)", fontSize: "1.2rem", letterSpacing: "0.0618em", color: "var(--charcoal)" }}>estιasι</span>
          <span style={{ fontSize: "0.5rem", color: "var(--stone)", marginLeft: "8px" }}>©{new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="mailto:hello@estiasi.cy" style={{ fontSize: "0.6rem", fontWeight: 400, color: "var(--stone)", textDecoration: "none" }}>hello@estiasi.cy</a>
          <a href="tel:+35722030800" style={{ fontSize: "0.6rem", fontWeight: 400, color: "var(--stone)", textDecoration: "none" }}>+357 22 030 800</a>
          <a href="#contact" style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--copper)", textDecoration: "none" }}>Hire Us</a>
        </div>
      </div>
    </footer>
  );
}
