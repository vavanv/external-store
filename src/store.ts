import { createStore } from "./createStore";

export const store = createStore({
  name: "test name",
  number: 1,
  location: {
    name: "test location",
    count: 0,
  },
});
