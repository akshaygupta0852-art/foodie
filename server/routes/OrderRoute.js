import express from "express";
import auth from "../middleware/authmiddleware.js";
import User from "../models/User.js";
import Orders from "../models/Order.js";
const router = express.Router();

router.post("/place", auth, async (req, res) => {
  try {
    const { items, address, restaurant } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId)
      .populate("cart.foodId")
      .populate("cart.restaurant");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        type: "Failed",
      });
    }

    const subTotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    const deliveryFee = subTotal > 600 ? 0 : 30;
    const packagingFee = 20;

    const totalAmount = subTotal + deliveryFee + packagingFee;

    const newOrder = await Orders.create({
      userId: userId,
      restaurant,
      items,
      address: {
        username: address.username,
        mobile: address.mobile,
        label: address.label,
        fullAddress:
          address.houseNo +
          " " +
          address.street +
          " " +
          address.city +
          " " +
          address.pincode,
      },
      totalPrice: totalAmount,
    });

    return res.status(200).json({
      message: "Order placed successfully!",
      type: "Done",
      order: newOrder,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error!",
      type: "Failed",
    });
  }
});

router.get("/find/:id", auth, async (req, res) => {
  try {
    const userId = req.user.id;

    const order = await Orders.findOne({
      _id: req.params.id,
      userId: userId,
    });

    if (!order) {
      return res.status(404).json({
        type: "failed",
        message: "Order not found",
      });
    }

    return res.status(200).json({
      type: "Done",
      data : order
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});
export default router;
