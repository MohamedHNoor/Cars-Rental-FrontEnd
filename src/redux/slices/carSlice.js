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
// Action Types
const ADD_CAR = 'ADD_CAR';
const REMOVE_CAR = 'REMOVE_CAR';

// Action Creators
export const addCar = (task) => ({
  type: ADD_CAR,
  payload: task,
});

const initialState = {
  cars: [],
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
      extraReducers: {
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export default carSlice.reducer;
