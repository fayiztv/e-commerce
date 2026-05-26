import express from "express"
import { adminOnly, protect } from "../middlewares/authMiddlewares.js"
import { createProduct, DeleteProduct, GetProductDetails, GetProducts, updateProduct } from "../controllers/productControllers.js"
import { formValidator } from "../validations/authValidations.js"

const router = express.Router()

router.post("/", protect, adminOnly, formValidator(["name", "description", "price", "stock", "categoryId"]), createProduct)
router.get("/", GetProducts)
router.put("/update/:id", protect, adminOnly, formValidator(["name", "description", "price", "stock", "categoryId", "status"]), updateProduct)
router.get("/:id", GetProductDetails)
router.delete("/:id", protect, adminOnly, DeleteProduct)

export default router