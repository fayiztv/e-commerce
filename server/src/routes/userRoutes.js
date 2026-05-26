import express from "express";
import {
  getProfile,
  userLogin,
  userRegister,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddlewares.js";
import { formValidator } from "../validators/validators.js";

const router = express.Router();

router.post("/login", formValidator(["email", "password"]), userLogin);
router.post(
  "/register",
  formValidator(["name", "email", "password"]),
  userRegister,
);

router.get("/profile", protect, getProfile);

export default router;
