import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    adults: Number,
    children: Number,
    rooms: Number,
  });
  
export default mongoose.model('Booking', bookingSchema);