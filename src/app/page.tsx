"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLenis } from "@/hooks/useLenis";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Dimitris from "@/components/Dimitris";
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
      <Work />
      <Process />
      <Dimitris />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
