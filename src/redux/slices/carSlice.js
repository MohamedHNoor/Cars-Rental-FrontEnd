import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCars = createAsyncThunk(
  "cars/fetchData",
  async (location, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/endpoint`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  }
);

const initialState = {
  cars: [],
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export default carSlice.reducer;
