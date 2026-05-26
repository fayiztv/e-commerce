import express from "express";
import { adminOnly, protect } from "../middlewares/authMiddlewares.js";
import { formValidator, updateValidator } from "../validators/validators.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers/categoryControllers.js";

const router = express.Router();

router.post(
  "/",
  protect,
  adminOnly,
  formValidator(["name", "description"]),
  createCategory,
);
router.get("/", getCategories);
router.patch(
  "/update/:id",
  protect,
  adminOnly,
  updateValidator(["name", "description", "status"]),
  updateCategory,
);
router.delete("/delete/:id", protect, adminOnly, deleteCategory);

export default router;
