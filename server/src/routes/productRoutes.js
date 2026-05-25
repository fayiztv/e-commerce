import express from "express"
import { adminOnly, protect } from "../middlewares/authMiddlewares.js"
import { createProduct } from "../controllers/productControllers.js"
import { formValidator } from "../validations/authValidations.js"

const router = express.Router()

router.post("/", protect, adminOnly, formValidator(["name", "description", "price", "stock"]), createProduct)

export default router