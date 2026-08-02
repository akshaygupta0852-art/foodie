import express from "express";
import mongoose from "mongoose";
import loginRoute from "./routes/Loginroute.js";
import signupRoute from "./routes/signuproute.js";
import cors from 'cors'
import cartroute from "./routes/Cartroute.js";
import restaurantsRoute from "./routes/Restaurantroute.js";
import singleRest from "./routes/singleRest.js";
import restrauFood from "./routes/RestrauFood.js";
import addressRoute from "./routes/Address.js";

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
app.use('/user', restaurantsRoute);
app.use('/user', singleRest);
app.use('/user', restrauFood);
app.use('/cart', cartroute );
app.use('/address', addressRoute);

export default app;
