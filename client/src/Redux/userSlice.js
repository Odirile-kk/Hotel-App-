
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    registrationLoading: false,
    registrationError: null,
  },
  reducers: {
    registrationStart: (state) => {
      state.registrationLoading = true;
      state.registrationError = null;
    },
    registrationSuccess: (state) => {
      state.registrationLoading = false;
      state.registrationError = null;
    },
    registrationFailure: (state, action) => {
      state.registrationLoading = false;
      state.registrationError = action.payload;
    },
  },
});

export const {
  registrationStart,
  registrationSuccess,
  registrationFailure,
} = userSlice.actions;

export default userSlice.reducer;
