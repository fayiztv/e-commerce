import express from "express";
import { adminOnly, protect } from "../middlewares/authMiddlewares.js";
import {
  createProduct,
  DeleteProduct,
  GetProductDetails,
  GetProducts,
  updateProduct,
} from "../controllers/productControllers.js";
import { formValidator, updateValidator } from "../validators/validators.js";

const router = express.Router();

router.post(
  "/",
  protect,
  adminOnly,
  formValidator(["name", "description", "price", "stock", "category"]),
  createProduct,
);
router.get("/", GetProducts);
router.patch(
  "/:id",
  protect,
  adminOnly,
  updateValidator([
    "name",
    "description",
    "price",
    "stock",
    "category",
    "status",
  ]),
  updateProduct,
);
router.get("/:id", GetProductDetails);
router.delete("/:id", protect, adminOnly, DeleteProduct);

export default router;
