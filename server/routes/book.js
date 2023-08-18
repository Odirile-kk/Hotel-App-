import express from "express";
import {
  makeBooking, getBooking, getBookings, updateBooking, deleteBooking
} from "../controllers/book.js";
// import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/",  makeBooking);

//UPDATE

router.put("/:id", updateBooking);
//DELETE
router.delete("/:id", deleteBooking);
//GET

router.get("/:id", getBooking);


//GET ALL

router.get("/", getBookings);

export default router;