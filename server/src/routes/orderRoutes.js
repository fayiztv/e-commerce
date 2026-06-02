import express from "express";
import { adminOnly, protect } from "../middlewares/authMiddlewares.js";
import {
  createOrder,
  getallOrder,
  getMyOrders,
  getMyOrderDetails,
  getOrderDetails,
  updateOrderStatus,
  cancelOrder,
} from "../controllers/orderControllers.js";

const router = express.Router();

// admin order apis
router.get("/admin", protect, adminOnly, getallOrder);
router.get("/admin/:id", protect, adminOnly, getOrderDetails);
router.patch("/admin/:id", protect, adminOnly, updateOrderStatus);

// user order apis
router.post("/", protect, createOrder);
router.get("/", protect, getMyOrders);
router.get("/:id", protect, getMyOrderDetails);
router.patch("/:id", protect, cancelOrder);

export default router;
