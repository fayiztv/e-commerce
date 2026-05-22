import express from "express";
import {
  userRegister,
} from "../controllers/userControllers.js";
import { formValidator } from "../validations/authValidations.js";

const router = express.Router();

router.post(
  "/register",
  formValidator(["name", "email", "password"]),
  userRegister,
);

export default router;
