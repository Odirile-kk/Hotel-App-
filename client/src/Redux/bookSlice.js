// src/Redux/bookingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/book/';

// Async thunk to post booking options
export const postBookingOptions = createAsyncThunk('booking/postBookingOptions',async (options) => {
    try {
      const response = await axios.post(`${API_URL}`, options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getBookingOptions = createAsyncThunk('booking/getBookingOptions',async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookingData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postBookingOptions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postBookingOptions.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingData = action.payload;
      })
      .addCase(postBookingOptions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bookingSlice.reducer;
