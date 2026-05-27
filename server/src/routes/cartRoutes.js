import express from "express";
import { protect } from "../middlewares/authMiddlewares.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers/categoryControllers.js";
import { addToCart } from "../controllers/cartControllers.js";

const router = express.Router();

router.post("/", protect, addToCart);

export default router;
