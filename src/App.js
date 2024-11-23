import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { useLocation } from "react-router-dom";

const App = () => {
  const ConfirmedBookingWrapper = () => {
    const location = useLocation();
    const reservationDetails = location.state?.reservationDetails;
    return <ConfirmedBooking reservationDetails={reservationDetails || {}} />;
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBookingWrapper />} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/menu" element={<h2>Menu Page</h2>} />
        <Route path="/order-online" element={<h2>Order Online Page</h2>} />
        <Route path="/login" element={<h2>Login Page</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
