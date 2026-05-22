import express from "express";
import testRoutes from "./routes/testRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/test", testRoutes);

export default app;
