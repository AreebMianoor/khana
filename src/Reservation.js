import React, { useState } from "react";
import Lottie from "lottie-react";
import calendarAnimation from "./animations/calendar.json"; 
import "./Reservation.css";

const Reservation = () => {
  const [guests, setGuests] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleGuestChange = (change) => {
    setGuests(Math.max(0, guests + change)); // Prevent negative guests
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${guests} guests!`);
  };

  return (
    <div className="reservation-container">
      <div className="reservation-header">
        <h2>Reserve your Table</h2>
        <p>Enjoy a cozy dining experience at our restaurant</p>
      </div>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <Lottie animationData={calendarAnimation} loop={true} className="lottie-calendar" />
          <div>
            <label htmlFor="date">Pick a Date and Time</label>
            <input type="datetime-local" id="date" name="date" />
          </div>
        </div>
        <div className="form-section">
          <label>How many guests?</label>
          <div className="guest-controls">
            <button type="button" onClick={() => handleGuestChange(-1)}>-</button>
            <span>{guests}</span>
            <button type="button" onClick={() => handleGuestChange(1)}>+</button>
          </div>
        </div>
        <div className="form-section">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="reserve-button">Reserve Now</button>
      </form>
    </div>
  );
};

export default Reservation;
