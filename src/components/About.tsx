export default function About() {
  return (
    <section style={{ padding: "128px 0 90px" }}>
      <div className="wrap">
        <div className="flex justify-between items-start gap-8 flex-col md:flex-row">
          <div>
            <span className="label">Partners in Craft</span>
            <span className="sect-num">[ 01 / 07 ]</span>
          </div>
          <div style={{ maxWidth: "650px" }}>
            <p className="reveal" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 300, color: "var(--limestone)", lineHeight: 1.85, marginBottom: "2rem" }}>
              Estιasι is a culinary consultancy that brings restaurants to life. We take your vision — from the first sketch on a napkin to a fully operational venue — and build every system, every menu, every team that makes it run.
            </p>
            <p className="reveal" style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--white-50)", lineHeight: 1.85 }}>
              Founded by a chef who has opened kitchens across London and Europe, and an operator who builds the systems behind them. Based in Cyprus. Operating across the Mediterranean.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
