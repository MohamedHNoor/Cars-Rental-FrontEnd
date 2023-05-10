import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCars = createAsyncThunk(
  "cars/fetchData",
  async (location, { rejectWithValue }) => {
    const API_KEY = "c0f8476fee975d5faaf52fdebb33284c";
    const { lat, lon } = location;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      return response.data.list[0].components;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  }
);

const initialState = {
  polutionData: [],
};

export const airpolutionSlice = createSlice({
  name: "polution",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAirPollution.fulfilled]: (state, action) => {
      state.polutionData = action.payload;
    },
  },
});

export default airpolutionSlice.reducer;
