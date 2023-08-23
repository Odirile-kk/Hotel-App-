import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String
    },
    image2: {
      type: String
    },
    image3: {
      type: String
    },
    image4: {
      type: String
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    util: {
      type: String,
     
    },
    util1: {
      type: String,
   
    },
    util2: {
      type: String,
 
    },
    util3: {
      type: String,
     
    },
    util4: {
      type: String,
    
    },
    util5: {
      type: String,
    
    },
    util6: {
      type: String,
    
    },
    roomNumber: {
      type :Number ,
      required: true
    },
    unavailableDate: {
      type: Date
    }
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);