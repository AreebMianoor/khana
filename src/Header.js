import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="./logo.png" alt="Little Lemon Logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li className="login"><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
