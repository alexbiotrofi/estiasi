export default function Philosophy() {
  return (
    <section className="section section-dark" style={{ position: "relative", overflow: "hidden" }}>
      {/* Large decorative E watermark */}
      <div
        style={{
          position: "absolute",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'Zodiak', serif",
          fontSize: "clamp(20rem, 35vw, 40rem)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.015)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        E
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <span className="label">Philosophy</span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.15, marginTop: "0.75rem" }}>
            Great Hospitality Is a System,
            <br />Not a Personality
          </h2>

          {/* Copper line */}
          <div style={{ width: "32px", height: "2px", background: "var(--copper)", margin: "2rem auto" }} />

          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 400, color: "var(--stone-light)", lineHeight: 1.8 }}>
            &ldquo;The best restaurants are not built on talent alone — they are
            built on structure, discipline, and a relentless focus on the
            details that guests feel but never see.&rdquo;
          </p>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-3" style={{ marginTop: "1.5rem" }}>
            <span style={{ width: "12px", height: "1px", background: "var(--copper)", opacity: 0.4 }} />
            <span style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--stone-dark)" }}>
              Dimitris Kamaritis
            </span>
          </div>
        </div>

        {/* Four principles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)", marginTop: "4rem", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", overflow: "hidden" }}>
          {[
            { num: "01", title: "Precision", text: "Every recommendation is measurable. Every system is documented." },
            { num: "02", title: "Substance", text: "No slide decks without follow-through. No theory without execution." },
            { num: "03", title: "Sustainability", text: "Operations that endure long after our engagement ends." },
            { num: "04", title: "Guest-First", text: "Every decision filters through one question: does this improve the experience?" },
          ].map((p) => (
            <div key={p.title} style={{ padding: "2rem", background: "rgba(255,255,255,0.02)" }}>
              <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", color: "var(--copper)", opacity: 0.5 }}>{p.num}</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 400, color: "var(--limestone)", marginTop: "0.5rem", marginBottom: "0.6rem" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--stone)", lineHeight: 1.7 }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
