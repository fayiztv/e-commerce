import express from "express";
import { adminLogin } from "../controllers/adminontrollers.js";
import { formValidator } from "../validations/authValidations.js";

const router = express.Router();

router.post("/login", formValidator(["email", "password"]), adminLogin);

export default router;
