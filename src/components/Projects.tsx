const projects = [
  {
    name: "Grain",
    location: "Mediterranean, Holborn — London",
    type: "Full Launch",
    description: "End-to-end launch consultancy for a modern Mediterranean restaurant in the heart of London. Concept positioning, kitchen design, menu engineering, staff training, grand opening execution.",
    tags: ["Concept", "Kitchen Design", "Menu", "Launch"],
    image: "/textures/marble-1.jpg",
  },
  {
    name: "Filos by Halepi",
    location: "London",
    type: "Restaurant Support",
    description: "Operational diagnostic and improvement for an established Greek dining concept. Full review, menu reimagination, and procedural redesign to elevate service and guest experience.",
    tags: ["Operational Review", "Menu Engineering", "Procedures"],
    image: "/textures/marble-3.jpg",
  },
  {
    name: "Mesa Stone",
    location: "Fine Dining",
    type: "Full Launch",
    description: "Concept creation and full operational build for a premium fine-dining venue. Positioning, kitchen specification, HACCP frameworks, SOP documentation, phased opening management.",
    tags: ["Fine Dining", "HACCP", "SOPs", "Grand Opening"],
    image: "/textures/dark-stone.jpg",
  },
  {
    name: "Mauro Colagreco",
    location: "The OWO, London",
    type: "Collaboration",
    description: "Part of the team supporting the culinary programme at one of London's most prestigious new hospitality destinations. World-class fine dining operations and service delivery.",
    tags: ["Fine Dining", "World-Class", "Operations"],
    image: "/textures/marble-3.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-stone">
      <div className="wrap">
        <span className="label">Projects</span>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.1, marginTop: "0.75rem", marginBottom: "3rem" }}>
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)", border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden" }}>
          {projects.map((p) => (
            <div key={p.name} style={{ background: "#fff" }}>
              {/* Image */}
              <div style={{ height: "220px", position: "relative", overflow: "hidden" }}>
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                  <span style={{
                    fontSize: "0.45rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(4px)",
                    padding: "0.35rem 0.7rem",
                    borderRadius: "3px",
                  }}>
                    {p.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.75rem 2rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 400, color: "var(--charcoal)", marginBottom: "0.2rem" }}>
                  {p.name}
                </h3>
                <div style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--stone)", marginBottom: "0.85rem" }}>
                  {p.location}
                </div>
                <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} style={{
                      fontSize: "0.48rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--stone)",
                      border: "1px solid var(--border)",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "3px",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
