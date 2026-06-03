import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/dbConnect.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log("Server running");
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startServer();
