import React from "react";

function Footer() {
  return (
    <footer>
      <p>© 2024 Little Lemon. All rights reserved.</p>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center", gap: "1rem" }}>
        <li><a href="#privacy-policy" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</a></li>
        <li><a href="#terms-of-service" style={{ color: "white", textDecoration: "none" }}>Terms of Service</a></li>
      </ul>
    </footer>
  );
}

export default Footer;

