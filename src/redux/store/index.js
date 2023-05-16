import { configureStore } from '@reduxjs/toolkit';
import carSlice from '../slices/carSlice';
import userSlice from '../slices/userSlice';

const store = configureStore({
  reducer: {
    cars: carSlice,
    user: userSlice,
  },
});

export default store;