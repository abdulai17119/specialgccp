/* ============================================================
   ABOUT — Split layout: text left, image right
   Trust-building copy, gold accent on key phrase
   ============================================================ */

const ABOUT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663594062728/LZYNo6NyF3TN3HNWMfJBFJ/about-atelier-AesFwiULcFXYLDHmAAsuQq.webp";

const values = [
  { label: "Excellence", text: "We strive for perfection in every print, no matter the scale." },
  { label: "Sustainability", text: "We prioritize eco-conscious methods in every stage of production." },
  { label: "Customer-Centricity", text: "We listen, understand, and deliver beyond expectations." },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#111111",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: text */}
          <div>
            <div className="reveal-left" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <span
                style={{
                  display: "block",
                  width: "3rem",
                  height: "1px",
                  backgroundColor: "#C9A646",
                }}
              />
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
                About Golden Corner
              </span>
            </div>

            <h2
              className="reveal-left delay-100"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
                color: "#FFFFFF",
                marginBottom: "2rem",
              }}
            >
              Four Decades of{" "}
              <em style={{ fontStyle: "italic", color: "#C9A646" }}>
                Printing Excellence
              </em>
            </h2>

            <p
              className="reveal-left delay-200"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.65)",
                marginBottom: "2.5rem",
              }}
            >
              Golden Corner Printing Press is a 40+ year leader in comprehensive
              printing and packaging solutions. We serve 500+ clients across
              government, healthcare, hospitality, retail, and corporate sectors,
              delivering innovative, sustainable solutions that exceed expectations
              every time.
            </p>

            <p
              className="reveal-left delay-300"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.65)",
                marginBottom: "3rem",
              }}
            >
              Our state-of-the-art facility features Heidelberg offset presses for
              high-volume production, Canon & Xerox digital presses for personalized
              jobs, and complete finishing capabilities including die-cutting,
              embossing, foil stamping, and binding.
            </p>

            {/* Values */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {values.map((v, i) => (
                <div
                  key={v.label}
                  className={`reveal-left delay-${(i + 4) * 100}`}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "1px",
                      height: "3rem",
                      backgroundColor: "#C9A646",
                      flexShrink: 0,
                      marginTop: "0.2rem",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 500,
                        fontSize: "1.1rem",
                        color: "#FFFFFF",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {v.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.85rem",
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {v.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div
            className="reveal-right"
            style={{ position: "relative" }}
          >
            <div
              style={{
                aspectRatio: "3/4",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={ABOUT_IMAGE}
                alt="PressCraft atelier — craftsman examining printed materials"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            {/* Gold corner accent */}
            <div
              style={{
                position: "absolute",
                top: "-1.5rem",
                left: "-1.5rem",
                width: "40%",
                height: "40%",
                border: "1px solid rgba(201,166,70,0.4)",
                pointerEvents: "none",
              }}
            />
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "-1.5rem",
                backgroundColor: "#C9A646",
                padding: "1.5rem",
                maxWidth: "180px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "2.5rem",
                  color: "#111111",
                  lineHeight: 1,
                }}
              >
                20+
              </div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#111111",
                  marginTop: "0.4rem",
                }}
              >
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
