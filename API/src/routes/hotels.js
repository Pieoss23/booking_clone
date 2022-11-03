import express from "express";
import {
  updateHotel,
  createHotel,
  getHotel,
  deleteHotel,
  getHotels,
} from "../../controllers/hotel.js";
// import Hotel from "../models/Hotel";
// import { createError } from "../../utils/error.js";

const router = express();
//the route it finds in controllers file
//create
router.post("/", createHotel);

//update
router.put("/:id", updateHotel);

//delete
router.delete("/:id", deleteHotel);

//get
router.get("/:id", getHotel);

//get all
router.get("/", getHotels);

export default router;
