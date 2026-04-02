"use client";

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="divider mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: 400,
                color: "var(--charcoal)",
                letterSpacing: "0.03em",
              }}
            >
              Estiasi
            </span>
            <p style={{ marginTop: "4px", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--stone)" }}>
              Culinary Consulting &middot; Cyprus
            </p>
          </div>

          <div className="flex items-center gap-6">
            {["About", "Services", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="transition-all duration-300 hover:text-teal"
                style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "var(--clay)", fontWeight: 400 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <p style={{ fontSize: "0.55rem", letterSpacing: "0.1em", color: "var(--stone)" }}>
            &copy; {new Date().getFullYear()} Estiasi. All rights reserved.
          </p>
        </div>

        <div className="mt-12 text-center overflow-hidden">
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              fontWeight: 300,
              color: "var(--charcoal)",
              opacity: 0.03,
              letterSpacing: "0.04em",
              lineHeight: 1,
              display: "block",
            }}
          >
            Estiasi
          </span>
        </div>
      </div>
    </footer>
  );
}
