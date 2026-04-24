/* ============================================================
   FOOTER — Minimal, dark, gold accents on links
   ============================================================ */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "4rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <img
                src="/manus-storage/gcpp-logo_c372ea5e.png"
                alt="GCPP Logo"
                style={{
                  width: "32px",
                  height: "32px",
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  letterSpacing: "0.12em",
                  color: "#C9A646",
                }}
              >
                GOLDEN CORNER
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.82rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.4)",
                maxWidth: "280px",
              }}
            >
              Golden Corner Printing Press: 40+ years of comprehensive printing
              and packaging solutions backed by state-of-the-art equipment.
            </p>
          </div>

          {/* Services links */}
          <div>
            <div
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A646",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Offset Printing", "Digital Printing", "Screen Printing", "Packaging Solutions", "Corporate Stationery", "Promotional Items"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="gold-hover-link"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.82rem",
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#C9A646")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                      }
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <div
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A646",
                marginBottom: "1.25rem",
              }}
            >
              Company
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["About", "Portfolio", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="gold-hover-link"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C9A646")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A646",
                marginBottom: "1.25rem",
              }}
            >
              Get in Touch
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                "hello@presscraft.co.uk",
                "+44 (0) 20 7123 4567",
                "12 Artisan Quarter",
                "London EC1A 1BB",
              ].map((line) => (
                <div
                  key={line}
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            © {year} Golden Corner Printing Press LLC. All rights reserved.
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#C9A646")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
