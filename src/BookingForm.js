/* global submitAPI */
import React, { useState } from "react";
import Lottie from "lottie-react";
import calendarAnimation from "./animations/calendar.json";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const navigate = useNavigate(); // For programmatic navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "date") {
      dispatch({ type: "UPDATE_TIMES", payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservationSuccess = submitAPI(formData); // Simulated API call
    if (reservationSuccess) {
      navigate("/confirmed", { state: { reservationDetails: formData } }); // Pass form data as state
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book a Table</h2>
      <Lottie
        animationData={calendarAnimation}
        loop={true}
        className="lottie-calendar"
      />
      <div className="form-group">
        <label htmlFor="date">Choose Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Choose Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Time
          </option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="20"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <button type="submit" className="submit-button">
        Submit Reservation
      </button>
    </form>
  );
};

export default BookingForm;
