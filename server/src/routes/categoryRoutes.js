import express from "express"
import { adminOnly, protect } from "../middlewares/authMiddlewares.js"
import { formValidator } from "../validations/authValidations.js"
import { createCategory } from "../controllers/categoryControllers.js"

const router = express.Router()

router.post("/", protect, adminOnly, formValidator(["name", "description"]), createCategory)

export default router