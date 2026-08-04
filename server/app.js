import cors from 'cors'
import express from "express";
import mongoose from "mongoose";
import cartroute from "./routes/Cartroute.js";
import addressRoute from "./routes/Address.js";
import loginRoute from "./routes/Loginroute.js";
import singleRest from "./routes/singleRest.js";
import orderRoute from "./routes/OrderRoute.js";
import searchRoute from "./routes/HomeSearch.js";
import signupRoute from "./routes/signuproute.js";
import restrauFood from "./routes/RestrauFood.js";
import userRoute from "./routes/AccountRoutes.js";
import restaurantsRoute from "./routes/Restaurantroute.js";

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
app.use('/user', userRoute);
app.use('/cart', cartroute );
app.use('/address', addressRoute);
app.use('/order', orderRoute);
app.use(searchRoute);

export default app;
