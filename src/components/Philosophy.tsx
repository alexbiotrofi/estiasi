export default function Philosophy() {
  return (
    <section className="section section-dark">
      <div className="wrap">
        <div className="text-center" style={{ maxWidth: "640px", margin: "0 auto" }}>
          <span className="label">Philosophy</span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "var(--limestone)", lineHeight: 1.15, marginTop: "0.75rem" }}>
            Great Hospitality Is a System,
            <br />Not a Personality
          </h2>
          <div style={{ width: "32px", height: "1px", background: "var(--copper)", margin: "2rem auto", opacity: 0.5 }} />
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 400, fontStyle: "italic", color: "var(--stone-light)", lineHeight: 1.8 }}>
            &ldquo;The best restaurants are not built on talent alone — they are
            built on structure, discipline, and a relentless focus on the
            details that guests feel but never see.&rdquo;
          </p>
        </div>

        {/* Four principles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)", marginTop: "4rem", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", overflow: "hidden" }}>
          {[
            { title: "Precision", text: "Every recommendation is measurable. Every system is documented." },
            { title: "Substance", text: "No slide decks without follow-through. No theory without execution." },
            { title: "Sustainability", text: "Operations that endure long after our engagement ends." },
            { title: "Guest-First", text: "Every decision filters through one question: does this improve the experience?" },
          ].map((p) => (
            <div key={p.title} style={{ padding: "2rem", background: "rgba(255,255,255,0.02)" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 400, color: "var(--limestone)", marginBottom: "0.6rem" }}>
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
