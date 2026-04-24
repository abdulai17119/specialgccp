/* ============================================================
   PROCESS — Horizontal step timeline with gold accents
   Large index numerals, connecting gold line
   ============================================================ */

const steps = [
  {
    index: "01",
    title: "Consultation",
    description:
      "We begin with a detailed brief — understanding your brand, audience, and the tactile experience you want to create.",
    icon: "◇",
  },
  {
    index: "02",
    title: "Design & Proofing",
    description:
      "Our pre-press team prepares your files with precision. You receive physical proofs before any production run begins.",
    icon: "◇",
  },
  {
    index: "03",
    title: "Production",
    description:
      "Expert press operators run your job with meticulous colour management and quality control at every stage.",
    icon: "◇",
  },
  {
    index: "04",
    title: "Finishing",
    description:
      "Foiling, embossing, die-cutting, and binding — our in-house finishing department adds the final layer of luxury.",
    icon: "◇",
  },
  {
    index: "05",
    title: "Delivery",
    description:
      "Your order is carefully packaged and delivered on schedule. We offer white-glove delivery for premium projects.",
    icon: "◇",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "5rem",
          }}
        >
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span className="gold-rule" />
            <span className="section-label">Our Process</span>
          </div>
          <h2
            className="reveal delay-100"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.05,
              color: "#111111",
              margin: 0,
              maxWidth: "500px",
            }}
          >
            From Brief to{" "}
            <em style={{ fontStyle: "italic", color: "#C9A646" }}>
              Beautiful
            </em>
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
            position: "relative",
          }}
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "2.5rem",
              left: "2rem",
              right: "2rem",
              height: "1px",
              backgroundColor: "#E8E5E0",
              zIndex: 0,
            }}
            className="process-line"
          />

          {steps.map((step, i) => (
            <div
              key={step.index}
              className={`reveal delay-${i * 100 + 100}`}
              style={{
                position: "relative",
                zIndex: 1,
                paddingTop: "5rem",
                paddingRight: "2rem",
                paddingBottom: "2rem",
              }}
            >
              {/* Step dot */}
              <div
                style={{
                  position: "absolute",
                  top: "1.75rem",
                  left: "0",
                  width: "1.5rem",
                  height: "1.5rem",
                  border: "1px solid #C9A646",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#C9A646",
                  }}
                />
              </div>

              {/* Index */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "3.5rem",
                  color: "#F0EDE8",
                  lineHeight: 1,
                  marginBottom: "1rem",
                  position: "absolute",
                  top: "3.5rem",
                  left: 0,
                }}
              >
                {step.index}
              </div>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  color: "#111111",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.82rem",
                  lineHeight: 1.8,
                  color: "#777777",
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal"
          style={{
            marginTop: "5rem",
            paddingTop: "3rem",
            borderTop: "1px solid #E8E5E0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                color: "#111111",
                margin: 0,
              }}
            >
              Ready to start your project?
            </h3>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.85rem",
                color: "#777777",
                marginTop: "0.5rem",
              }}
            >
              Most projects are delivered within 5–10 business days.
            </p>
          </div>
          <a href="#contact" className="btn-gold">
            Begin Your Project
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-line { display: none; }
        }
      `}</style>
    </section>
  );
}
