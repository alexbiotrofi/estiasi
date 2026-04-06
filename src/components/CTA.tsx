export default function CTA() {
  return (
    <section style={{ padding: "8rem 0", position: "relative", overflow: "hidden" }}>
      {/* Dark stone background — full texture, not subtle */}
      <div className="absolute inset-0 z-0">
        <img src="/textures/dark-stone.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(28,28,26,0.5)" }} />
      </div>

      <div className="wrap relative z-10 text-center">
        <div className="reveal">
          <span style={{ fontFamily: "var(--font-logo)", fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 400, letterSpacing: "0.0618em", color: "var(--limestone)", display: "block", lineHeight: 0.9, marginBottom: "2rem" }}>
            estiasi
          </span>
          <div style={{ width: 32, height: 2, background: "var(--copper)", margin: "0 auto 2rem" }} />
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 400, color: "var(--stone-light)", lineHeight: 1.5, maxWidth: "30ch", margin: "0 auto 3rem" }}>
            Ready to build something that lasts?
          </p>
          <a href="#contact" className="btn btn-copper btn-lg">Book a Discovery Call</a>
        </div>
      </div>
    </section>
  );
}
