const projects = [
  {
    name: "Grain",
    location: "Mediterranean, Holborn — London",
    type: "Full Launch",
    desc: "End-to-end launch consultancy for a modern Mediterranean restaurant in the heart of London. Concept positioning, kitchen design, menu engineering, staff training, grand opening execution.",
    tags: ["Concept", "Kitchen Design", "Menu", "Launch"],
    image: "/textures/marble-1.jpg",
  },
  {
    name: "Filos by Halepi",
    location: "London",
    type: "Restaurant Support",
    desc: "Operational diagnostic and improvement for an established Greek dining concept. Full review, menu reimagination, and procedural redesign to elevate service and guest experience.",
    tags: ["Operational Review", "Menu Engineering", "Procedures"],
    image: "/textures/marble-3.jpg",
  },
  {
    name: "Mesa Stone",
    location: "Fine Dining",
    type: "Full Launch",
    desc: "Concept creation and full operational build for a premium fine-dining venue. Positioning, kitchen specification, HACCP frameworks, SOP documentation, phased opening management.",
    tags: ["Fine Dining", "HACCP", "SOPs", "Grand Opening"],
    image: "/textures/dark-stone.jpg",
  },
  {
    name: "Mauro Colagreco",
    location: "The OWO, London",
    type: "Collaboration",
    desc: "Part of the team supporting the culinary programme at one of London's most prestigious new hospitality destinations. World-class fine dining operations and service delivery.",
    tags: ["Fine Dining", "World-Class", "Operations"],
    image: "/textures/marble-1.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 0", background: "var(--limestone)" }}>
      <div className="wrap">
        <span style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.5em", textTransform: "uppercase" as const, color: "var(--copper)", display: "block", marginBottom: "0.75rem" }}>Projects</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.1, marginBottom: "3rem" }}>Selected Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
          {projects.map(p => (
            <div key={p.name} style={{ background: "#fff" }}>
              <div style={{ height: 200, position: "relative", overflow: "hidden" }}>
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}>
                  <span style={{ fontSize: "0.42rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#fff", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)", padding: "0.3rem 0.6rem", borderRadius: 3 }}>{p.type}</span>
                </div>
              </div>
              <div style={{ padding: "1.5rem 1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400, color: "var(--charcoal)", marginBottom: "0.15rem" }}>{p.name}</h3>
                <div style={{ fontSize: "0.48rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--stone)", marginBottom: "0.75rem" }}>{p.location}</div>
                <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--stone-dark)", lineHeight: 1.7, marginBottom: "0.85rem" }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: "0.45rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--stone)", border: "1px solid var(--border)", padding: "0.25rem 0.5rem", borderRadius: 3 }}>{t}</span>
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
