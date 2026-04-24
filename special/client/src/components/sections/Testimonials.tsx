/* ============================================================
   TESTIMONIALS — Dark background, large quote marks, gold accent
   ============================================================ */

const testimonials = [
  {
    quote:
      "PressCraft produced our brand's annual report with a level of finish we had never seen before. The gold foil registration was flawless. Our board was genuinely impressed.",
    author: "Isabelle Fontaine",
    title: "Creative Director, Maison Fontaine",
    initial: "IF",
  },
  {
    quote:
      "We've worked with many printers over the years. PressCraft is in a different category entirely. The attention to detail, the proofing process, the communication — all exceptional.",
    author: "Marcus Webb",
    title: "Founder, Webb & Associates",
    initial: "MW",
  },
  {
    quote:
      "Our wedding invitations were works of art. The letterpress debossing on cotton paper was exactly what we envisioned. Every guest commented on them.",
    author: "Sophia Laurent",
    title: "Client",
    initial: "SL",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        backgroundColor: "#FAF9F7",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span className="gold-rule" />
            <span className="section-label">Testimonials</span>
          </div>
          <h2
            className="reveal delay-100"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              color: "#111111",
              margin: 0,
            }}
          >
            What Our Clients{" "}
            <em style={{ fontStyle: "italic", color: "#C9A646" }}>Say</em>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2px",
            backgroundColor: "#E8E5E0",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`reveal delay-${i * 150 + 100}`}
              style={{
                backgroundColor: "#FFFFFF",
                padding: "2.5rem",
                position: "relative",
              }}
            >
              {/* Large quote mark */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "5rem",
                  lineHeight: 0.8,
                  color: "#C9A646",
                  opacity: 0.3,
                  marginBottom: "1rem",
                  userSelect: "none",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: "#333333",
                  marginBottom: "2rem",
                }}
              >
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#111111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                      color: "#C9A646",
                    }}
                  >
                    {t.initial}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.8rem",
                      color: "#111111",
                    }}
                  >
                    {t.author}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.72rem",
                      color: "#999999",
                      marginTop: "0.15rem",
                    }}
                  >
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
