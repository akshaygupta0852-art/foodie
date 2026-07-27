import express from "express";
import mongoose from "mongoose";
import loginRoute from "./routes/Loginroute.js";
import signupRoute from "./routes/signuproute.js";
import cors from 'cors'

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBURI);
    console.log("connected to Database");
  } catch (err) {
    console.error(err);
  }
};

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", loginRoute);
app.use("/user", signupRoute);

export default app;
