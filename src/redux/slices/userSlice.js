import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import {
	addUserToLocalStorage,
	getUserFromLocalStorage,
	removeUserFromLocalStorage,
} from '../../utils/LocalStorage';

const initialState = {
	isLoading: false,
	user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
	'user/registerUser',
	async ({ username, password }, thunkAPI) => {
		try {
			const resp = await customFetch.post(
				'/api/v1/register',
				{
					user: {
						username: username,
						password: password,
					},
				},
				{
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				},
			);
			return resp.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const loginUser = createAsyncThunk(
	'user/loginUser',
	async ({ username, password }, thunkAPI) => {
		try {
			const resp = await customFetch.post(
				'/api/v1/login',
				{
					username: username,
					password: password,
				},
				{
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				},
			);
			return resp.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logoutUser: (state) => {
			state.user = null;
			state.isSidebarOpen = false;
			removeUserFromLocalStorage();
		},
	},

	extraReducers: {
		[registerUser.pending]: (state) => {
			state.isLoading = true;
		},
		[registerUser.fulfilled]: (state, { payload }) => {
			const user = payload;
			state.isLoading = false;
			state.user = user;
			addUserToLocalStorage(user);
			toast.success(`Hello 👋 ${user.username}`);
		},
		[registerUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
		[loginUser.pending]: (state) => {
			state.isLoading = true;
		},
		[loginUser.fulfilled]: (state, { payload }) => {
			const user = payload;
			state.isLoading = false;
			state.user = user;
			addUserToLocalStorage(user);
			toast.success(`Welcome Back 😀 ${user.username}`);
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
	},
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
