/* ============================================================
   GROUP COMPANIES — Edified Investments overview
   Simplified text-based section without logos
   ============================================================ */

export default function GroupCompanies() {
  return (
    <section
      id="group-companies"
      style={{
        backgroundColor: "#111111",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <div className="container">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginBottom: "5rem",
          }}
        >
          <div
            className="reveal"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span
              className="gold-rule"
              style={{ backgroundColor: "#C9A646" }}
            />
            <span
              className="section-label"
              style={{ color: "#C9A646" }}
            >
              Our Group
            </span>
          </div>
          <h2
            className="reveal delay-100"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "3rem",
              lineHeight: 1.2,
              color: "#FFFFFF",
              margin: 0,
              maxWidth: "600px",
            }}
          >
            Part of <em style={{ fontStyle: "italic", color: "#C9A646" }}>Edified Investments</em>
          </h2>
        </div>

        {/* Mission statement */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "1.5rem",
              lineHeight: 1.8,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Through <em style={{ color: "#C9A646", fontStyle: "italic" }}>Edified Investments</em>, we maintain the highest standards of excellence, sustainability, and customer-centricity across all our operations.
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(201,166,70,0.2)",
            margin: "4rem 0",
          }}
        />

        {/* Core values */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              title: "Excellence",
              description: "We strive for perfection in every print, no matter the scale.",
            },
            {
              title: "Sustainability",
              description: "We prioritize eco-conscious methods in every stage of production.",
            },
            {
              title: "Customer-Centricity",
              description: "We listen, understand, and deliver beyond expectations.",
            },
          ].map((value, i) => (
            <div
              key={value.title}
              className={`reveal delay-${i * 100 + 100}`}
              style={{
                padding: "2rem",
                backgroundColor: "rgba(201,166,70,0.05)",
                border: "1px solid rgba(201,166,70,0.2)",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "1.35rem",
                  color: "#C9A646",
                  margin: "0 0 0.75rem 0",
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.7)",
                  margin: 0,
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
