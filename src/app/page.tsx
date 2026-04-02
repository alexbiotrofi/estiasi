"use client";

import { useRevealAnimations } from "@/hooks/useGSAP";
import { useLenis } from "@/hooks/useLenis";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRevealAnimations();
  useLenis();
  useCursorGlow();

  return (
    <div ref={containerRef}>
      <Navigation />
      <Hero />
      <hr className="divider max-w-[1140px] mx-auto" />
      <About />
      <hr className="divider max-w-[1140px] mx-auto" />
      <Philosophy />
      <hr className="divider max-w-[1140px] mx-auto" />
      <Services />
      <hr className="divider max-w-[1140px] mx-auto" />
      <Projects />
      <hr className="divider max-w-[1140px] mx-auto" />
      <Contact />
      <Footer />
    </div>
  );
}
