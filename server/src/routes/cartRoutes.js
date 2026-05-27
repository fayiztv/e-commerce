import express from "express";
import { protect } from "../middlewares/authMiddlewares.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers/categoryControllers.js";
import { addToCart, getCart } from "../controllers/cartControllers.js";

const router = express.Router();

router.post("/", protect, addToCart);
router.get("/", protect, getCart);

export default router;
