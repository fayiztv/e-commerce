import express from "express";
import {
  userLogin,
  userRegister,
} from "../controllers/userControllers.js";
import { formValidator } from "../validations/authValidations.js";

const router = express.Router();

router.post("/login", formValidator(["email", "password"]), userLogin);
router.post(
  "/register",
  formValidator(["name", "email", "password"]),
  userRegister,
);

export default router;
