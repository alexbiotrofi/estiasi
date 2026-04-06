const founders = [
  {
    name: "Dimitris Kamaritis",
    role: "Culinary Director & Co-Founder",
    bio: "A chef by craft and operator by nature. Dimitris has spent over a decade in professional kitchens — from fine dining in London to launching restaurants across Europe. His experience spans concept creation, menu engineering, kitchen design, staff training, and the full operational lifecycle of F&B venues. He doesn't consult from a distance. He builds from within.",
    credentials: [
      "Head Chef & Kitchen Director — multiple London venues",
      "Full restaurant launch management — concept to opening night",
      "HACCP & food safety systems specialist",
      "Menu engineering & food cost optimisation",
    ],
  },
  {
    name: "Alex Apostolides",
    role: "Operations & Strategy, Co-Founder",
    bio: "Alex brings the operational architecture that turns culinary vision into a functioning business. Systems design, brand development, digital presence, and the infrastructure that lets hospitality venues run with precision.",
    credentials: [
      "Operations & systems architecture",
      "Brand identity & digital strategy",
      "Technology & platform implementation",
      "Business development & client relations",
    ],
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 0", background: "var(--limestone)" }}>
      <div className="wrap">
        <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.5em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "0.75rem" }}>About</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.1 }}>
          Built in Kitchens,<br />Not Boardrooms
        </h2>
        <p style={{ marginTop: "1.25rem", fontSize: "0.95rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.85, maxWidth: "50ch", marginBottom: "3rem" }}>
          estiasi was founded by operators who have done the work — launching venues, running kitchens, and building the systems that make hospitality function at its highest level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
          {founders.map(f => (
            <div key={f.name} style={{ background: "#fff", padding: "2.5rem" }}>
              <span style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "1rem" }}>{f.role}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, color: "var(--charcoal)", marginBottom: "1rem" }}>{f.name}</h3>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{f.bio}</p>
              <ul style={{ listStyle: "none" }}>
                {f.credentials.map(c => (
                  <li key={c} className="flex items-start gap-2" style={{ marginBottom: "0.5rem" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--copper)", marginTop: "0.45rem", flexShrink: 0, opacity: 0.4 }} />
                    <span style={{ fontSize: "0.8rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.5 }}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
