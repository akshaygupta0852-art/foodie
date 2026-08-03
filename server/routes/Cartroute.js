import express from "express";
import auth from "../middleware/authmiddleware.js";
import mongoose from "mongoose";
import User from "../models/User.js";
import food from "../models/Food.js";

const router = express.Router();

// Add items in cart

router.post("/item/add", auth, async (req, res) => {
  try {
    const { userId, foodId, restrauId, quantity } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        type : 'Failed'
      });
    }

    const foundFood = await food.findById(foodId);
    if (!foundFood) {
      return res.status(404).json({
        message: "This food is not available or deleted.",
        type : 'Failed'
      });
    }

    const restrau = await food.find({ restaurant: restrauId });
    if (!restrau) {
      return res.status(404).json({
        message: "This restaurant is closed or deleted!",
        type : 'Failed'
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
        if (foundRestrau) {
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
      type : 'Done'
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
      type : 'Failed'
    });
  }
});

// View items in cart

router.get("/view", auth, async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId)
      .populate("cart.foodId")
      .populate("cart.restaurant");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      cart: user.cart,
      message: "Cart item fetched successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// clear cart

router.get("/clear", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.cart.length == 0) {
      return res.status(300).json({
        message: "Cart is already empty.",
      });
    }

    user.cart = [];
    await user.save();

    return res.status(200).json({
      message: "All items are removed from cart.",
      cart: user.cart,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// change item quantity in cart

router.patch("/itemqty", auth, async (req, res) => {
  try {
    const { foodId, newQty } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (newQty < 1) {
      return res.status(400).json({
        message: "Quantity must be at least 1",
      });
    }
    const cartItem = user.cart.find((item) => item.foodId.equals(foodId));

    if (!cartItem) {
      return res.status(404).json({
        message: "Food not found in cart",
      });
    }

    cartItem.quantity = newQty;

    await user.save();
    return res.status(200).json({
      message: "Quantity updated",
      cart: user.cart,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Iternal Server error",
    });
  }
});

// delete item from cart

router.delete("/item/remove", auth, async (req, res) => {
  try {
    const { foodId } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }
    user.cart = user.cart.filter((item) => !item.foodId.equals(foodId));

    await user.save();

    await user.populate([
      {
        path: "cart.foodId",
      },
      {
        path: "cart.restaurant",
      },
    ]);

    return res.status(200).json({
      message: "This item is successfully removed from cart!",
      cart: user.cart,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server error!",
    });
  }
});

export default router;