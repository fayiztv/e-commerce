import express from "express";
import { protect } from "../middlewares/authMiddlewares.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers/categoryControllers.js";
import { addToCart, clearCart, getCart, updateCart } from "../controllers/cartControllers.js";

const router = express.Router();

router.post("/", protect, addToCart);
router.get("/", protect, getCart);
router.patch("/", protect, updateCart);
router.delete("/", protect, clearCart);

export default router;
