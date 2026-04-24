/* ============================================================
   NAVBAR — Atelier Noir: fixed, transparent-to-white on scroll
   Typography: Jost 500 uppercase tracking-widest for nav items
   Gold accent on active/hover states
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #E8E5E0" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 no-underline"
          >
            <img
              src="/manus-storage/gcpp-logo_c372ea5e.png"
              alt="GCPP Logo"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain",
              }}
            />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: "1.1rem",
                letterSpacing: "0.12em",
                color: scrolled ? "#111111" : "#FFFFFF",
                transition: "color 0.4s ease",
              }}
            >
              GOLDEN CORNER
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="gold-hover-link bg-transparent border-none p-0"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: scrolled ? "#111111" : "rgba(255,255,255,0.85)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-gold"
              style={{ fontSize: "0.6rem" }}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden bg-transparent border-none p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: scrolled ? "#111111" : "#FFFFFF" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-400"
        style={{
          backgroundColor: "rgba(17,17,17,0.98)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="bg-transparent border-none"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "2rem",
                color: "#FFFFFF",
                letterSpacing: "0.08em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A646")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-gold mt-4"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
}
