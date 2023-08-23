import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('users/createUsers',async (options) => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/register', options);
    localStorage.setItem('accessToken', response.data.accessToken); 
    console.log('this is res state', response)
    return response.data;
  } catch (error) {
    localStorage.removeItem('accessToken'); 
    throw error.response.data.message || 'Registration failed';
  }
}
);

export const postUsers = createAsyncThunk('booking/postBookingOptions',async (options) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/auth/login`, options);
    localStorage.setItem('accessToken', response.data.accessToken); 
  } catch (error) {
    localStorage.removeItem('accessToken'); 
    throw error;
  }
}
);

    
const storedToken = localStorage.getItem('accessToken');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: null,
    loading: false,
    error: null,
    accessToken: storedToken,

    registrationLoading: false,
    registrationError: null,
    registrationSuccess: null,
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
      state.accessToken = localStorage.getItem('accessToken'); 
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
      state.accessToken = null;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },

    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.user = null;
  state.loading = false;
  state.error = null;
  localStorage.removeItem('accessToken'); 
  console.log('token cleared')
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registrationLoading = true;
        state.registrationError = null;
        state.registrationSuccess = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.registrationLoading = false;
        state.registrationSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registrationLoading = false;
        state.registrationError = action.error.message || 'Registration failed';
      });
  },
});

export const { clearAccessToken ,setAccessToken,loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;