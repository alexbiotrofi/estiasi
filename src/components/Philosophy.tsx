"use client";

const principles = [
  {
    word: "Precision",
    description:
      "Every recommendation is measurable. Every system is documented. Great hospitality is not accidental — it is engineered.",
  },
  {
    word: "Substance",
    description:
      "We do the work. No slide decks without follow-through. No theory without execution. Our consultants have run the kitchens they advise.",
  },
  {
    word: "Sustainability",
    description:
      "Operations that endure. We build systems designed to function long after our engagement ends — not dependency, but independence.",
  },
  {
    word: "Guest-First",
    description:
      "Every operational decision filters through one question: does this improve the experience for the person at the table?",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 md:py-36 overflow-hidden">
      <div className="orb orb-copper" style={{ top: "10%", right: "-10%" }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="sect-num reveal">02 &mdash; Philosophy</span>
          <h2
            className="mt-3 reveal"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
            }}
          >
            Great Hospitality Is a System,
            <br />
            Not a Personality
          </h2>
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto mb-16 md:mb-20 text-center reveal">
          <div className="w-8 h-[1px] mx-auto mb-6" style={{ background: "var(--copper)", opacity: 0.5 }} />
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--charcoal)",
              lineHeight: 1.8,
            }}
          >
            &ldquo;We believe that the best restaurants are not built on talent
            alone — they are built on structure, discipline, and a relentless
            focus on the details that guests feel but never see.&rdquo;
          </p>
          <div className="w-8 h-[1px] mx-auto mt-6" style={{ background: "var(--copper)", opacity: 0.5 }} />
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-2 gap-5 stagger-children">
          {principles.map((p, i) => (
            <div key={p.word} className="glass relative p-7 md:p-8 group cursor-default">
              <div className="flex items-start gap-4">
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "3.5rem",
                    fontWeight: 300,
                    lineHeight: 1,
                    color: "var(--teal)",
                    opacity: 0.12,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <h3
                    className="group-hover:text-teal transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.35rem",
                      fontWeight: 500,
                      color: "var(--charcoal)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {p.word}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      fontWeight: 300,
                      color: "var(--clay)",
                      lineHeight: 1.75,
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling words */}
        <div className="mt-20 reveal overflow-hidden">
          <div className="flex whitespace-nowrap text-scroll">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center shrink-0">
                {["Direct", "Authoritative", "Confident", "Professional", "Precise", "Human"].map((word) => (
                  <span key={`${setIdx}-${word}`} className="flex items-center">
                    <span
                      className="px-4 md:px-6"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(3rem, 6vw, 5rem)",
                        fontWeight: 300,
                        color: "var(--charcoal)",
                        opacity: 0.06,
                      }}
                    >
                      {word}
                    </span>
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--teal)", opacity: 0.12 }} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
