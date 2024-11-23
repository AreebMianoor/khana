import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        {/* Replace the image with the SVG logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="logo"
          style={{ height: "50px", width: "50px", fill: "#FFD447" }}
          aria-label="Little Lemon Logo"
        >
          <circle cx="50" cy="50" r="48" fill="#00473E" />
          <path d="M50,10 A40,40 0 1,0 90,50 A40,40 0 1,0 50,10" fill="#FFD447" />
          <path d="M50,20 A30,30 0 1,0 80,50 A30,30 0 1,0 50,20" fill="#00473E" />
          <path
            d="M50,10 L50,50 M50,50 L78,22 M50,50 L22,78 M50,50 L78,78"
            stroke="#FFD447"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <h1 className="site-name">Little Lemon</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={closeMenu}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservation" onClick={closeMenu}>
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order-online" onClick={closeMenu}>
              Order Online
            </Link>
          </li>
          <li className="login">
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
