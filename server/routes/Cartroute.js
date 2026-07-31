import express from "express";
import auth from "../middleware/authmiddleware.js";
import mongoose from "mongoose";
import User from "../models/User.js";
import food from "../models/Food.js";

const router = express.Router();

router.post("/item/add", auth, async (req, res) => {
  try {
    const { userId, foodId, restrauId, quantity } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const foundFood = await food.findById(foodId);
    if (!foundFood) {
      return res.status(404).json({
        message: "This food is not available or deleted.",
      });
    }

    const restrau = await food.find({ restaurant: restrauId });
    if (!restrau) {
      return res.status(404).json({
        message: "This restaurant is closed or deleted!",
      });
    }

    if (user.cart.length > 0) {
      const existingItem = user.cart.find(
        (item) => item.foodId.toString() === foodId,
      );
      const foundRestrau = user.cart[0].restaurant.equals(restrauId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        if (foundRestrau.toString() === restrauId) {
          user.cart.push({
            foodId,
            quantity,
            restaurant: restrauId,
          });
        } else {
          user.cart = [];
          user.cart.push({
            foodId,
            quantity,
            restaurant: restrauId,
          });
        }
      }
    } else {
      user.cart.push({
        foodId,
        quantity,
        restaurant: restrauId,
      });
    }
    await user.save();
    return res.status(200).json({
      message: "Food added to cart",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
});

export default router;
