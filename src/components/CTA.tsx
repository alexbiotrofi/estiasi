export default function CTA() {
  return (
    <section className="rounded-section" style={{ margin: "0 40px", background: "var(--copper)", padding: "clamp(4rem, 10vw, 8rem) 0" }}>
      <div className="wrap text-center">
        <span style={{ fontFamily: "var(--font-logo)", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 400, letterSpacing: "0.0618em", color: "#fff", display: "block", lineHeight: 0.9, marginBottom: "2rem" }}>
          estιasι
        </span>
        <div style={{ width: 32, height: 2, background: "rgba(255,255,255,0.3)", margin: "0 auto 2rem" }} />
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 400, color: "rgba(255,255,255,0.85)", lineHeight: 1.5, maxWidth: "28ch", margin: "0 auto 3rem" }}>
          Ready to build something that lasts?
        </p>
        <a href="#contact" className="btn" style={{ background: "#fff", borderColor: "#fff", color: "var(--copper)", fontSize: "0.65rem" }}>Book a Discovery Call</a>
      </div>
    </section>
  );
}
