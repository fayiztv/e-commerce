import express from "express";
import { adminOnly, protect } from "../middlewares/authMiddlewares.js";
import { createOrder, getallOrder, getMyOrder, getMyOrderDetails, getOrderDetails,  } from "../controllers/orderControllers.js";

const router = express.Router();

// user order apis
router.post("/", protect, createOrder);
router.get("/", protect, getMyOrder);
router.get("/:id", protect, getMyOrderDetails);

// admin order apis
router.get("/admin", protect, adminOnly, getallOrder);
router.get("/admin/:id", protect, getOrderDetails);

export default router;
