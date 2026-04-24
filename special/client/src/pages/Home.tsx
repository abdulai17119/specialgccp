/* ============================================================
   HOME — PressCraft main page
   Assembles all sections with scroll-reveal hook
   ============================================================ */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import GroupCompanies from "@/components/sections/GroupCompanies";
import MapSection from "@/components/sections/MapSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

function useReveal() {
  useEffect(() => {
    const selectors = [".reveal", ".reveal-left", ".reveal-right"];
    const elements: Element[] = [];
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => elements.push(el));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useReveal();

  return (
    <div style={{ backgroundColor: "#FFFFFF", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <About />
      <Process />
      <Testimonials />
      <GroupCompanies />
      <MapSection />
      <Contact />
      <Footer />
    </div>
  );
}
