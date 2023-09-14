import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
    startDate: Date,
    endDate: Date,
    adults: Number,
    children: Number,
    rooms: Number,
    roomName: String,
    price: Number,
    user: String,
    image: String
  });
  
export default mongoose.model('Booking', bookingSchema);