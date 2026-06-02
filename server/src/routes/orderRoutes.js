import express from "express";
import { protect } from "../middlewares/authMiddlewares.js";
import { createOrder, getMyOrder, getMyOrderDetails,  } from "../controllers/orderControllers.js";

const router = express.Router();

// user order apis
router.post("/", protect, createOrder);
router.get("/", protect, getMyOrder);
router.get("/:id", protect, getMyOrderDetails);

export default router;
