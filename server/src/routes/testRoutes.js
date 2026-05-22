import express from "express";
import { testApi } from "../controllers/testControllers.js";

const router = express.Router();

router.get("/", testApi);

export default router;
