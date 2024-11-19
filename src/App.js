import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Reservation from "./Reservation"; // Import the Reservation page
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/menu" element={<h2>Menu Page</h2>} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<h2>Order Online Page</h2>} />
        <Route path="/login" element={<h2>Login Page</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
