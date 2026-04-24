/* ============================================================
   CONTACT — Clean form + business info
   Dark background, gold CTA button, minimal inputs
   ============================================================ */

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    padding: "0.875rem 0",
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: "0.9rem",
    color: "#FFFFFF",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 500,
    fontSize: "0.6rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.4)",
    display: "block",
    marginBottom: "0.25rem",
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#111111",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
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
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
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
              Contact Us
            </span>
          </div>
          <h2
            className="reveal delay-100"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.05,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Let's Discuss Your{" "}
            <em style={{ fontStyle: "italic", color: "#C9A646" }}>
              Printing Needs
            </em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "5rem",
          }}
          className="contact-grid"
        >
          {/* Left: form */}
          <div className="reveal-left">
            {submitted ? (
              <div
                style={{
                  padding: "3rem",
                  border: "1px solid rgba(201,166,70,0.3)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "2rem",
                    color: "#C9A646",
                    marginBottom: "1rem",
                  }}
                >
                  Thank You
                </div>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.8,
                  }}
                >
                  Your enquiry has been received. A member of our team will
                  be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0 2rem",
                  }}
                >
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#C9A646")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor =
                          "rgba(255,255,255,0.2)")
                      }
                    />
                  </div>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#C9A646")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor =
                          "rgba(255,255,255,0.2)")
                      }
                    />
                  </div>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#C9A646")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor =
                          "rgba(255,255,255,0.2)")
                      }
                    />
                  </div>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={labelStyle}>Service Required</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        appearance: "none",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "#C9A646")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor =
                          "rgba(255,255,255,0.2)")
                      }
                    >
                      <option value="" style={{ backgroundColor: "#111111" }}>
                        Select a service
                      </option>
                      <option value="offset" style={{ backgroundColor: "#111111" }}>
                        Offset Printing
                      </option>
                      <option value="digital" style={{ backgroundColor: "#111111" }}>
                        Digital Printing
                      </option>
                      <option value="screen" style={{ backgroundColor: "#111111" }}>
                        Screen & UV Printing
                      </option>
                      <option value="packaging" style={{ backgroundColor: "#111111" }}>
                        Packaging Solutions
                      </option>
                      <option value="stationery" style={{ backgroundColor: "#111111" }}>
                        Corporate Stationery
                      </option>
                      <option value="promotional" style={{ backgroundColor: "#111111" }}>
                        Promotional Items
                      </option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "2.5rem" }}>
                  <label style={labelStyle}>Project Details *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project — quantities, finishes, timeline..."
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "none",
                      paddingTop: "0.875rem",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "#C9A646")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor =
                        "rgba(255,255,255,0.2)")
                    }
                  />
                </div>

                <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Right: info */}
          <div
            className="reveal-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  color: "#FFFFFF",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                Get in Touch
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Plot 78, M10 Musaffah Industrial, Abu Dhabi, UAE",
                  },
                  {
                    icon: Phone,
                    label: "Telephone",
                    value: "+971 2 658 7770",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "Sales@gcpp.ae",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Monday – Friday, 8am – 6pm",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                  >
                    <Icon
                      size={16}
                      style={{
                        color: "#C9A646",
                        strokeWidth: 1.5,
                        flexShrink: 0,
                        marginTop: "0.15rem",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 500,
                          fontSize: "0.6rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.35)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 300,
                          fontSize: "0.9rem",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />

            {/* Promise */}
            <div
              style={{
                padding: "2rem",
                border: "1px solid rgba(201,166,70,0.2)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "#C9A646",
                  marginBottom: "0.75rem",
                }}
              >
                Our Promise
              </div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.82rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                }}
              >
                Every enquiry receives a personalised response within one
                business day. We provide detailed quotes with no hidden costs
                and no obligation to proceed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }
        select option {
          background-color: #111111;
          color: #FFFFFF;
        }
      `}</style>
    </section>
  );
}
