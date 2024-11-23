import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BookingForm from "./BookingForm";

// Mock submitAPI if it's exported from BookingForm
jest.mock("./BookingForm", () => {
  const originalModule = jest.requireActual("./BookingForm");
  return {
    __esModule: true,
    ...originalModule,
    submitAPI: jest.fn(() => true)
  };
});

// Helper function to render with Router
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: Router });
};

describe("BookingForm Component", () => {
  test("renders the BookingForm heading", () => {
    renderWithRouter(
      <BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />
    );
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
  });

  test("validates required fields", async () => {
    renderWithRouter(
      <BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Submit Reservation"));
    });

    expect(screen.getByText("Date is required.")).toBeInTheDocument();
    expect(screen.getByText("Time is required.")).toBeInTheDocument();
  });

  test("allows submission when all fields are valid", async () => {
    renderWithRouter(
      <BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />
    );

    await act(async () => {
      fireEvent.change(screen.getByLabelText("Choose Date"), {
        target: { value: "2024-12-01" },
      });
      fireEvent.change(screen.getByLabelText("Choose Time"), {
        target: { value: "17:00" },
      });
      fireEvent.change(screen.getByLabelText("Number of Guests"), {
        target: { value: "4" },
      });
      fireEvent.click(screen.getByText("Submit Reservation"));
    });

    expect(screen.queryByText("Date is required.")).not.toBeInTheDocument();
    expect(screen.queryByText("Time is required.")).not.toBeInTheDocument();
  });
});
