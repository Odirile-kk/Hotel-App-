import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./Routes/auth.js";
import usersRoute from "./Routes/users.js";
import bookRoute from "./routes/book.js";
import roomsRoute from "./routes/room.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser"
import paymentRoute from "./routes/payment.js"

const app = express()

mongoose.connect('mongodb+srv://mpho:mpho@cluster0.uchhcvt.mongodb.net/')


//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/book", bookRoute);
app.use("/api/payment", paymentRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

  if (3000) {
    app.listen(3000, () => {
      console.log('running on port 3000')
  })
  }

  
export default app