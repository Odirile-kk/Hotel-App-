import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/Redux/authSlice";
import userReducer from "../src/Redux/userSlice";
import roomReducer from "../src/Redux/roomSlice";
import bookReducer from "../src/Redux/bookSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    rooms: roomReducer,
    book: bookReducer
  },
});

export default store;