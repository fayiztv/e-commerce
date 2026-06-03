import express from "express";
import { protect } from "../middlewares/authMiddlewares.js";
import {
  addToCart,
  clearCart,
  getCart,
  removeCartItem,
  updateCart,
} from "../controllers/cartControllers.js";

const router = express.Router();

router.post("/", protect, addToCart);
router.get("/", protect, getCart);
router.patch("/", protect, updateCart);
router.delete("/", protect, clearCart);
router.delete("/:id", protect, removeCartItem);

export default router;
