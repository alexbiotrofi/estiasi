export default function Footer() {
  return (
    <footer style={{ padding: "64px 0 40px", borderTop: "1px solid var(--border-dark)" }}>
      <div className="wrap flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span style={{ fontFamily: "var(--font-logo)", fontSize: "1.2rem", letterSpacing: "0.0618em", color: "var(--limestone)" }}>estιasι</span>
          <span style={{ fontSize: "0.5rem", color: "var(--white-30)", marginLeft: "8px" }}>©{new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@estiasi.com" style={{ fontSize: "0.6rem", fontWeight: 400, color: "var(--white-30)", textDecoration: "none" }}>hello@estiasi.com</a>
          <a href="#contact" style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--copper)", textDecoration: "none" }}>Hire Us</a>
        </div>
      </div>
    </footer>
  );
}
