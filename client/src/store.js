import { configureStore  } from "@reduxjs/toolkit";
import authReducer from "../src/Redux/authSlice";
import userReducer from "../src/Redux/userSlice";
import roomReducer from "../src/Redux/roomSlice";
import bookReducer from "../src/Redux/bookSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    rooms: roomReducer,
    book: bookReducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false, // Disable serializable state invariant middleware
  //   }),
});

export default store;