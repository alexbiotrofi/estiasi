"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLenis } from "@/hooks/useLenis";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();
  useLenis();

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Team />
      <Work />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
