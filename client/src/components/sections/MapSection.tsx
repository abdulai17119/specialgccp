/* ============================================================
   MAP SECTION — Embedded Google Map with location info
   Shows GCPP facility location in Abu Dhabi
   ============================================================ */

export default function MapSection() {
  return (
    <section
      id="map-section"
      style={{
        backgroundColor: "#FFFFFF",
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
            marginBottom: "3rem",
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
            <span className="gold-rule" />
            <span className="section-label">Visit Us</span>
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
            Our Facility in <em style={{ fontStyle: "italic", color: "#C9A646" }}>Abu Dhabi</em>
          </h2>
        </div>

        {/* Map and Info Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "stretch",
          }}
          className="map-grid"
        >
          {/* Embedded Map */}
          <div
            className="reveal-left"
            style={{
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              width="100%"
              height={500}
              frameBorder={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.7502999999997!2d54.37!3d24.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sGolden%20Corner%20Printing%20Press!2sPlot%2078%2C%20M10%20Musaffah%20Industrial%2C%20Abu%20Dhabi%2C%20UAE!5e0!3m2!1sen!2sae!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "500px",
              }}
            />
          </div>

          {/* Location Info */}
          <div
            className="reveal-right"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {/* Address */}
            <div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#C9A646",
                  marginBottom: "0.75rem",
                }}
              >
                Address
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "1.5rem",
                  lineHeight: 1.6,
                  color: "#111111",
                  margin: 0,
                }}
              >
                Plot 78, M10 Musaffah Industrial<br />
                Abu Dhabi, UAE
              </p>
            </div>

            {/* Contact */}
            <div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#C9A646",
                  marginBottom: "0.75rem",
                }}
              >
                Contact
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <a
                  href="tel:+97126587770"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "1rem",
                    color: "#111111",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#C9A646";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#111111";
                  }}
                >
                  +971 2 658 7770
                </a>
                <a
                  href="mailto:Sales@gcpp.ae"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "1rem",
                    color: "#111111",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#C9A646";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#111111";
                  }}
                >
                  Sales@gcpp.ae
                </a>
              </div>
            </div>

            {/* Hours */}
            <div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#C9A646",
                  marginBottom: "0.75rem",
                }}
              >
                Hours
              </div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "#666666",
                  margin: 0,
                }}
              >
                Monday – Friday<br />
                8:00 AM – 6:00 PM<br />
                <br />
                <em style={{ color: "#C9A646" }}>Closed on Weekends</em>
              </p>
            </div>

            {/* CTA */}
            <button
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "1rem 2rem",
                backgroundColor: "#C9A646",
                color: "#111111",
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                alignSelf: "flex-start",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "#111111";
                (e.target as HTMLButtonElement).style.color = "#C9A646";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "#C9A646";
                (e.target as HTMLButtonElement).style.color = "#111111";
              }}
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .map-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
