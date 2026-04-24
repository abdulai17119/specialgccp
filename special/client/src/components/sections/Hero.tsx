/* ============================================================
   HERO — Full-screen split: image right, text left
   Dark overlay on image, white text on dark side
   Gold accent on headline word and CTA button
   ============================================================ */

import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663594062728/LZYNo6NyF3TN3HNWMfJBFJ/hero-press-W6vz7M98FQf9KmVsiaAKgD.webp";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        overflow: "hidden",
        backgroundColor: "#111111",
      }}
    >
      {/* Background image — full bleed with dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "brightness(0.35)",
        }}
      />

      {/* Subtle grain texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          paddingTop: "7rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Eyebrow label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
            opacity: 0,
            animation: "fadeUp 0.8s ease 0.2s forwards",
          }}
        >
          <span className="gold-rule" />
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C9A646",
            }}
          >
            40+ Years of Printing Excellence
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.0,
            color: "#FFFFFF",
            maxWidth: "800px",
            marginBottom: "2rem",
            opacity: 0,
            animation: "fadeUp 0.9s ease 0.4s forwards",
          }}
        >
          All Printing{" "}
          <em style={{ fontStyle: "italic", color: "#C9A646" }}>Solutions</em>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "480px",
            marginBottom: "3rem",
            opacity: 0,
            animation: "fadeUp 0.9s ease 0.6s forwards",
          }}
        >
          Golden Corner Printing Press delivers comprehensive, innovative, and
          sustainable printing solutions. From offset to digital, packaging to
          promotional items — we combine four decades of expertise with
          cutting-edge technology.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            opacity: 0,
            animation: "fadeUp 0.9s ease 0.8s forwards",
          }}
        >
          <button onClick={scrollToContact} className="btn-gold">
            Request a Quote
            <ArrowRight size={14} />
          </button>
          <button
            onClick={scrollToPortfolio}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "transparent",
              color: "rgba(255,255,255,0.8)",
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              border: "1px solid rgba(255,255,255,0.3)",
              cursor: "pointer",
              transition: "border-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C9A646";
              e.currentTarget.style.color = "#C9A646";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
            }}
          >
            View Portfolio
          </button>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3rem",
            marginTop: "5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            opacity: 0,
            animation: "fadeUp 0.9s ease 1s forwards",
          }}
        >
          {[
            { value: "40+", label: "Years of Excellence" },
            { value: "500+", label: "Clients Served" },
            { value: "100%", label: "Quality Assured" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "2.5rem",
                  color: "#C9A646",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: "0.4rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0,
          animation: "fadeIn 1s ease 1.4s forwards",
        }}
      >
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "3rem",
            background: "linear-gradient(to bottom, rgba(201,166,70,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
}
