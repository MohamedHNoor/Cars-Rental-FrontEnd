import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = "http://localhost:3000/api/v1";

export const fetchCars = createAsyncThunk(
  "cars/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/cars`);
      return response.data
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  }
);

export const fetchCar = createAsyncThunk(
  "cars/fetchCar",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/cars/${id}`);
      return response.data
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  }
);

export const deleteCar = createAsyncThunk(
  "cars/deleteCar",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/cars/${id}`, {
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.tXaBpE7HY3pk3A_WuB0eXoVmOononF5Y70p9v5JD8U0
          `
        }
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  }
);

const initialState = {
  cars: [],
  singleCar: {}
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action) => {
      const filteredCars = state.cars.filter((car) => car.id != action.payload);
      state.cars = filteredCars
    }
  },
  extraReducers: {
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
    },
    [fetchCar.fulfilled]: (state, action) => {
      state.singleCar = action.payload;
    },
  },
});

export const { removeCar } = carSlice.actions;

export default carSlice.reducer;
