import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MaterialStrip from "@/components/MaterialStrip";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <MaterialStrip src="/textures/marble-1.jpg" height="100px" />
      <About />
      <MaterialStrip src="/textures/steel.jpg" height="80px" />
      <Philosophy />
      <MaterialStrip src="/textures/marble-3.jpg" height="100px" />
      <Services />
      <MaterialStrip src="/textures/dark-stone.jpg" height="80px" />
      <Projects />
      <MaterialStrip src="/textures/marble-2.jpg" height="100px" />
      <Contact />
      <Footer />
    </>
  );
}
