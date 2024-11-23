import { initializeTimes, updateTimes } from "./BookingPage";

test("initializeTimes returns the correct initial times", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same times regardless of action", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const action = { type: "UPDATE_TIMES", payload: "2024-11-29" };
  const updatedState = updateTimes(state, action);
  expect(updatedState).toEqual(state);
});
