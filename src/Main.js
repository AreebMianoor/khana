import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-hero">
      <div className="hero-content">
        <h1 className="fade-in">Welcome to Little Lemon</h1>
        <p className="slide-in">
          Experience the finest dining with fresh ingredients, exquisite ambiance, and exceptional service.
        </p>
        <Link to="/reservation" className="cta-button">
          Reserve Your Table
        </Link>
      </div>
    </div>
  );
};

export default Main;
