/* ============================================================
   SERVICES — Clean card layout with gold accent icons
   Large index numerals, thin gold rule, service cards
   ============================================================ */

import { BookOpen, CreditCard, Package, Layers, FileText, Printer } from "lucide-react";

const services = [
  {
    index: "01",
    icon: Printer,
    title: "Offset Printing",
    description:
      "High-volume, high-precision offset printing for NCR pads, invoices, brochures, cards, posters, and delivery vouchers.",
  },
  {
    index: "02",
    icon: FileText,
    title: "Digital Printing",
    description:
      "Quick-turnaround digital solutions for books, flyers, invitations, variable data printing, magazines, and catalogues.",
  },
  {
    index: "03",
    icon: Layers,
    title: "Screen & UV Printing",
    description:
      "Specialized printing on textiles, glass, acrylic surfaces, and plastic items with vibrant, durable finishes.",
  },
  {
    index: "04",
    icon: Package,
    title: "Packaging Solutions",
    description:
      "Custom rigid, corrugated, and foldable boxes for cosmetics, perfumes, gifts, food, and beverage products.",
  },
  {
    index: "05",
    icon: BookOpen,
    title: "Corporate Stationery",
    description:
      "Professional business cards, letterheads, envelopes, folders, and presentation kits that elevate your brand.",
  },
  {
    index: "06",
    icon: CreditCard,
    title: "Promotional Items",
    description:
      "Branded merchandise including t-shirts, mugs, pens, USB drives, and corporate gift sets for maximum impact.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ backgroundColor: "#FFFFFF", paddingTop: "8rem", paddingBottom: "8rem" }}
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
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span className="gold-rule" />
            <span className="section-label">Our Capabilities</span>
          </div>
          <div
            className="reveal delay-100"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "3rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "3.5rem",
                lineHeight: 1.1,
                color: "#111111",
                maxWidth: "520px",
                margin: 0,
                flex: "1 1 300px",
              }}
            >
              Comprehensive Printing{" "}
              <em style={{ fontStyle: "italic", color: "#C9A646" }}>
                & Solutions
              </em>
            </h2>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                lineHeight: 1.9,
                color: "#555555",
                maxWidth: "380px",
                marginTop: "0.5rem",
                flex: "1 1 280px",
              }}
            >
              From offset and digital printing to packaging and promotional items,
              we deliver end-to-end solutions backed by state-of-the-art
              equipment and four decades of expertise.
            </p>
          </div>
        </div>

        {/* Services Grid - 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.index}
                className={`reveal delay-${(i % 3) * 100 + 100}`}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E5E0",
                  borderRadius: "4px",
                  padding: "2rem",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
                  el.style.transform = "translateY(-4px)";
                  el.style.borderColor = "#C9A646";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "#E8E5E0";
                }}
              >
                {/* Index + icon row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 300,
                      fontSize: "2rem",
                      color: "#E8E5E0",
                      lineHeight: 1,
                    }}
                  >
                    {service.index}
                  </span>
                  <Icon
                    size={24}
                    style={{ color: "#C9A646", strokeWidth: 1.5 }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "1.35rem",
                    color: "#111111",
                    margin: "0 0 1rem 0",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                    lineHeight: 1.8,
                    color: "#666666",
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
