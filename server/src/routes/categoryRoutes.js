import express from "express"
import { adminOnly, protect } from "../middlewares/authMiddlewares.js"
import { formValidator } from "../validations/authValidations.js"
import { createCategory, getCategories } from "../controllers/categoryControllers.js"

const router = express.Router()

router.post("/", protect, adminOnly, formValidator(["name", "description"]), createCategory)
router.get("/", getCategories)

export default router