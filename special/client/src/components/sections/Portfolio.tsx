/* ============================================================
   PORTFOLIO — Asymmetric masonry grid
   Hover: dark overlay with gold text reveal
   Mix of generated images + Unsplash for variety
   ============================================================ */

const CARDS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663594062728/LZYNo6NyF3TN3HNWMfJBFJ/portfolio-cards-PrRCEKwr2dgQ5KvAnX6WyC.webp";
const BOOKS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663594062728/LZYNo6NyF3TN3HNWMfJBFJ/portfolio-books-JGj8fpT86Yrgt2Du49t3KS.webp";

const portfolioItems = [
  {
    id: 1,
    image: CARDS_IMAGE,
    title: "Gold Foil Business Cards",
    category: "Business Cards",
    span: "row-span-2",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    title: "Luxury Brochure Suite",
    category: "Brochures",
    span: "",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    title: "Premium Packaging",
    category: "Packaging",
    span: "",
  },
  {
    id: 4,
    image: BOOKS_IMAGE,
    title: "Hardcover Annual Report",
    category: "Books & Publications",
    span: "row-span-2",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    title: "Wedding Stationery",
    category: "Bespoke Print",
    span: "",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    title: "Exhibition Banners",
    category: "Large Format",
    span: "",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: "#FAF9F7",
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
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span className="gold-rule" />
            <span className="section-label">Portfolio</span>
          </div>
          <div
            className="reveal delay-100"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "1.5rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                lineHeight: 1.05,
                color: "#111111",
                margin: 0,
              }}
            >
              Selected{" "}
              <em style={{ fontStyle: "italic", color: "#C9A646" }}>Works</em>
            </h2>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.85rem",
                lineHeight: 1.8,
                color: "#777777",
                maxWidth: "360px",
                margin: 0,
              }}
            >
              A curated selection of projects that demonstrate our commitment
              to quality, craft, and attention to detail.
            </p>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "280px",
            gap: "1rem",
          }}
          className="portfolio-grid"
        >
          {portfolioItems.map((item, i) => (
            <div
              key={item.id}
              className={`portfolio-item reveal delay-${(i % 3) * 100 + 100} ${item.span}`}
              style={{
                cursor: "pointer",
                backgroundColor: "#E8E5E0",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
              <div className="overlay">
                <div className="overlay-content">
                  <div
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#C9A646",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.category}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: "1.2rem",
                      color: "#FFFFFF",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3.5rem",
          }}
        >
          <button className="btn-ghost">View All Projects</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 200px !important;
          }
          .row-span-2 {
            grid-row: span 1 !important;
          }
        }
        @media (max-width: 480px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 240px !important;
          }
        }
      `}</style>
    </section>
  );
}
