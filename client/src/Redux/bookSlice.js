import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/book/';

// Async thunk to post booking options
export const postBookingOptions = createAsyncThunk('booking/postBookingOptions',async (options) => {
    try {
      const response = await axios.post(`${API_URL}`, options);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getBookingOptions = createAsyncThunk('booking/getBookingOptions',async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      // console.log( 'from the slice',response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const updateBooking = createAsyncThunk('room/updateBooking',async (data) => {
  console.log('trying to update')
  try {
    const response = await axios.put(`${API_URL}${data.id}`, data);
    console.log(data.id)
    return response.data;
  } catch (error) {
    throw error;
  }
}
);

export const deleteBooking = createAsyncThunk('room/deleteBooking', async (id , { rejectWithValue }) => {
  
  
  try {
      const response = await axios.delete(`${API_URL}${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch room.');
    }
  });


const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    book: [],
    bookingData: null,
    loading: false,
    error: null,
  },
  reducers: {
    addBooking: (state, action) => {
      state.rooms = [...state.rooms, action.payload];
    },
    deleteBooking: (state, action) => {
      const roomIdToDelete = action.payload;
      return state.rooms.filter(room => room.id !== roomIdToDelete);
    },
    
  },
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
      })


    
        .addCase(getBookingOptions.fulfilled, (state, action) => {
          state.book = action.payload; // Update the state with the fetched lists
        });
      
  },
});

export const { addBooking} = bookingSlice.actions
export default bookingSlice.reducer;