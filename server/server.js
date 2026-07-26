import mongoose from "mongoose";
import app from "./app.js";
import dotenv from 'dotenv';
import { connectDB } from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 3000
await connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});