import { initializeTimes, updateTimes } from "./BookingPage";

// Mock fetchAPI globally
const mockFetchAPI = jest.fn();

// Override global `fetchAPI` function during tests
global.fetchAPI = mockFetchAPI;

describe("initializeTimes", () => {
  test("should call fetchAPI and return a non-empty array of available times", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    mockFetchAPI.mockReturnValue(mockTimes);

    const times = initializeTimes();
    expect(mockFetchAPI).toHaveBeenCalled();
    expect(times).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  test("should call fetchAPI with the selected date and return available times", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    mockFetchAPI.mockReturnValue(mockTimes);

    const action = {
      type: "UPDATE_TIMES",
      payload: "2024-11-30",
    };

    const updatedState = updateTimes([], action);

    expect(mockFetchAPI).toHaveBeenCalledWith(new Date(action.payload));
    expect(updatedState).toEqual(mockTimes);
  });

  test("should return the initial state for unknown action types", () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: "UNKNOWN_ACTION" };

    const updatedState = updateTimes(initialState, action);

    expect(updatedState).toEqual(initialState);
  });
});
