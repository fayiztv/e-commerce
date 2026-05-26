import express from "express";
import { adminLogin } from "../controllers/adminControllers.js";
import { formValidator } from "../validators/validators.js";

const router = express.Router();

router.post("/login", formValidator(["email", "password"]), adminLogin);

export default router;
