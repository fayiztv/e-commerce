import express from "express";
import { protect } from "../middlewares/authMiddlewares.js";
import { createOrder } from "../controllers/orderControllers.js";

const router = express.Router();

router.post("/", protect, createOrder);

export default router;
