import express from "express";
import testRoutes from "./routes/testRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();
app.use(express.json());

app.use("/api/test", testRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.use(errorHandler);

export default app;