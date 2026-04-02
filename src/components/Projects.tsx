"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Grain",
    location: "Mediterranean, Holborn — London",
    type: "Full Launch",
    description:
      "End-to-end launch consultancy for a modern Mediterranean restaurant in the heart of London. From concept positioning and kitchen design through to menu engineering, staff training, and grand opening execution.",
    tags: ["Concept", "Kitchen Design", "Menu", "Launch"],
    color: "var(--teal)",
    gradient: "linear-gradient(150deg, var(--teal-light), var(--teal), var(--teal-deep))",
  },
  {
    name: "Filos by Halepi",
    location: "London",
    type: "Restaurant Support",
    description:
      "Operational diagnostic and improvement consultancy for an established Greek dining concept. Full operational review, menu reimagination, and procedural redesign to elevate service standards and guest experience.",
    tags: ["Operational Review", "Menu Engineering", "Procedures"],
    color: "var(--copper)",
    gradient: "linear-gradient(150deg, var(--copper-light), var(--copper), var(--copper-dark))",
  },
  {
    name: "Mesa Stone",
    location: "Fine Dining",
    type: "Full Launch",
    description:
      "Concept creation and full operational build for a premium fine-dining venue. Comprehensive scope including positioning, kitchen specification, HACCP frameworks, SOP documentation, and phased opening management.",
    tags: ["Fine Dining", "HACCP", "SOPs", "Grand Opening"],
    color: "var(--charcoal)",
    gradient: "linear-gradient(150deg, #555, var(--charcoal), var(--charcoal-deep))",
  },
  {
    name: "Mauro Colagreco",
    location: "The OWO, London",
    type: "Collaboration",
    description:
      "Part of the team supporting the culinary programme at one of London's most prestigious new hospitality destinations. Working alongside world-class standards in fine dining operations and service delivery.",
    tags: ["Fine Dining", "World-Class", "Operations"],
    color: "var(--teal-deep)",
    gradient: "linear-gradient(150deg, var(--teal), var(--teal-deep), #2A5554)",
  },
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current || !trackRef.current) return;

    const track = trackRef.current;

    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden">
      {/* Section header — before the pinned area */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-16">
        <div className="text-center">
          <span className="sect-num reveal">04 &mdash; Projects</span>
          <h2
            className="font-serif mt-3 reveal"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              letterSpacing: "-0.01em",
            }}
          >
            Selected Work
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto reveal"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              fontWeight: 300,
              color: "var(--clay)",
              lineHeight: 1.75,
            }}
          >
            A selection of venues we have launched, supported, and collaborated
            with.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={scrollContainerRef} className="relative h-screen">
        <div
          ref={trackRef}
          className="absolute top-0 left-0 h-full flex items-center gap-8 pl-12 pr-[50vw]"
        >
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="relative w-[85vw] md:w-[550px] h-[70vh] max-h-[500px] shrink-0 rounded-3xl overflow-hidden group cursor-default"
              style={{
                background: project.gradient,
                boxShadow: `0 20px 60px ${project.color}33`,
              }}
            >
              {/* Glass shine */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(168deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 30%, transparent 50%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-[0.5rem] uppercase tracking-[0.3em] px-3 py-1 rounded-full"
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {project.type}
                    </span>
                  </div>

                  <h3
                    className="font-serif text-3xl md:text-4xl mb-2"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                      color: "white",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-[0.65rem] uppercase tracking-[0.2em] mb-6"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {project.location}
                  </p>
                  <p
                    className="max-w-md"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.82rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.7,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.55rem] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full"
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Large background number */}
              <div
                className="absolute top-4 right-6 font-serif text-[8rem] md:text-[10rem] leading-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.06)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
