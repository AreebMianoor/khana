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
        <img src="./logo.png" alt="Little Lemon Logo" className="logo" />
        <h1 className="site-name">Little Lemon</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/menu" onClick={closeMenu}>Menu</Link>
          </li>
          <li>
            <Link to="/reservation" onClick={closeMenu}>Reservations</Link>
          </li>
          <li>
            <Link to="/order-online" onClick={closeMenu}>Order Online</Link>
          </li>
          <li className="login">
            <Link to="/login" onClick={closeMenu}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
