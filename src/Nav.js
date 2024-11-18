import React from "react";

function Nav() {
  return (
    <nav>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "space-around" }}>
        <li><a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
        <li><a href="#menu" style={{ color: "white", textDecoration: "none" }}>Menu</a></li>
        <li><a href="#reservations" style={{ color: "white", textDecoration: "none" }}>Reservations</a></li>
        <li><a href="#order-online" style={{ color: "white", textDecoration: "none" }}>Order Online</a></li>
        <li><a href="#login" style={{ color: "white", textDecoration: "none" }}>Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
