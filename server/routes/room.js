import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../Controllers/room.js";
// import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/",  createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", updateRoom);

//DELETE
router.delete("/:id", deleteRoom);
//GET

router.get("/:id", getRoom);


//GET ALL

router.get("/", getRooms);

export default router;