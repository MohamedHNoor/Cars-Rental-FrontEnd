import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../slices/carSlice";

const store = configureStore({
  reducer:  carSlice
});

export default store;