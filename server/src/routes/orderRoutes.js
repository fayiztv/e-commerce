import express from "express";
import { createOrder, getMyOrder,  } from "../controllers/orderControllers.js";

const router = express.Router();

// user order apis
router.post("/", protect, createOrder);
router.get("/", protect, getMyOrder);

export default router;
