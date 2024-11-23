import React from "react";
import { useLocation } from "react-router-dom";
import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
  const location = useLocation();

  const reservationDetails = location.state?.reservationDetails || {
    date: "Not specified",
    time: "Not specified",
    guests: "Not specified",
    occasion: "Not specified",
  };

  const { date, time, guests, occasion } = reservationDetails;

  return (
    <div className="confirmed-booking">
      <div className="confirmation-header">
        <h1>🎉 Booking Confirmed!</h1>
        <p>Thank you for choosing Little Lemon. We can't wait to host you!</p>
      </div>
      <div className="confirmation-details">
        <h2>Your Reservation Details</h2>
        <ul>
          <li>
            <strong>Date:</strong> {date}
          </li>
          <li>
            <strong>Time:</strong> {time}
          </li>
          <li>
            <strong>Guests:</strong> {guests}
          </li>
          <li>
            <strong>Occasion:</strong> {occasion}
          </li>
        </ul>
      </div>
      <div className="confirmation-footer">
        <p>We look forward to serving you a delightful meal!</p>
        <p>
          If you have any questions or need to modify your reservation, please
          contact us at <strong>(123) 456-7890</strong>.
        </p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
