import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test("renders the 'Choose Date' label", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />);
  const labelElement = screen.getByText("Choose Date");
  expect(labelElement).toBeInTheDocument();
});
