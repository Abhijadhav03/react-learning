import React from "react";
import { LOGO_URL } from "../utils/constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #f8f9fa, #eaeaea)",
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #ccc",
        fontFamily: "'Roboto', sans-serif",
        color: "#333",
      }}
    >
      <div className="footer-content" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "20px" }}>
          <img
            src={LOGO_URL} // Replace with your logo path
            alt="Company Logo"
            style={{ width: "80px", marginBottom: "10px", borderRadius:"20px" }}
          />
          <h4 style={{ margin: "0", fontSize: "18px" }}>Meet N Eat</h4>
        </div>

       
        <div
          className="footer-links"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <a
            href="/privacy-policy"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.color = "#007bff")}
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.color = "#007bff")}
          >
            Terms of Service
          </a>
          <a
            href="/about"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.color = "#007bff")}
          >
            About Us
          </a>
        </div>

        <div style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          <p style={{ margin: "5px 0" }}>1234 Street Name, City, State, ZIP</p>
          <p style={{ margin: "5px 0" }}>
            Contact:{" "}
            <a
              href="mailto:support@meetneat.com"
              style={{ color: "#007bff", textDecoration: "none" }}
              onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.color = "#007bff")}
            >
              support@meetneat.com
            </a>
          </p>
        </div>

        <p style={{ fontSize: "12px", color: "#888", marginTop: "20px" }}>
          &copy; {currentYear} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
