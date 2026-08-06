import './config/env.js'
import mongoose from "mongoose";
import app from "./app.js";
import { connectDB } from "./app.js";

const PORT = process.env.PORT || 3000;
async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}
startServer();