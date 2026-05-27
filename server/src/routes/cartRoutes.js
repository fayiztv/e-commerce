import express from "express";
import { protect } from "../middlewares/authMiddlewares.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers/categoryControllers.js";
import { addToCart, getCart, updateCart } from "../controllers/cartControllers.js";

const router = express.Router();

router.post("/", protect, addToCart); // add formvalidator?????????????????
router.get("/", protect, getCart); 
router.patch("/", protect, updateCart); // add formvalidator?????????????????

export default router;
