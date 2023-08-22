import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postUsers = createAsyncThunk('booking/postBookingOptions',async (options) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/auth/login`, options);
    return response.data;
  } catch (error) {
    return error;
  }
}
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.user = null;
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },

    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken,loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;