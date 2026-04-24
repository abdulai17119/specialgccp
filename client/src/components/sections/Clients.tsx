/* ============================================================
   CLIENTS — Client trust indicators and statistics
   Stats-focused section without individual client names
   ============================================================ */

export default function Clients() {
  return (
    <section
      id="clients"
      style={{
        backgroundColor: "#F9F9F9",
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
            textAlign: "center",
          }}
        >
          <div
            className="reveal"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <span className="gold-rule" />
            <span className="section-label">Our Impact</span>
            <span className="gold-rule" />
          </div>
          <h2
            className="reveal delay-100"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "3rem",
              lineHeight: 1.2,
              color: "#111111",
              margin: 0,
            }}
          >
            Trusted by <em style={{ fontStyle: "italic", color: "#C9A646" }}>Industry Leaders</em>
          </h2>
          <p
            className="reveal delay-200"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "#666666",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Across government, hospitality, finance, retail, and corporate sectors, our clients rely on GCPP for exceptional quality and reliability.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {[
            { number: "500+", label: "Clients Served" },
            { number: "40+", label: "Years Experience" },
            { number: "100%", label: "Quality Assured" },
            { number: "24h", label: "Support" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal delay-${i * 100 + 100}`}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "2.5rem",
                  color: "#C9A646",
                  margin: "0 0 0.5rem 0",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.85rem",
                  color: "#666666",
                  margin: 0,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div
          className="reveal"
          style={{
            marginTop: "4rem",
            padding: "2.5rem",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8E5E0",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "1.35rem",
              lineHeight: 1.8,
              color: "#111111",
              margin: 0,
            }}
          >
            From <em style={{ color: "#C9A646", fontStyle: "italic" }}>Fortune 500 companies</em> to emerging startups, our clients trust us to deliver printing solutions that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
