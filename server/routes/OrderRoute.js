import express from "express";
import auth from "../middleware/authmiddleware.js";
import User from "../models/User.js";
import Order from "../models/Orders.js";
const router = express.Router();

// place order route

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

    const newOrder = await Order.create({
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

// check order route

router.get("/find/:id", auth, async (req, res) => {
  try {
    const userId = req.user.id;

    const order = await Order.findOne({
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
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// view all orders route

router.get("/all", auth, async (req, res) => {
  try {
    const userid = req.user.id;

    const orders = await Order.find({
      userId: userid,
    })?.sort({createdAt : -1});

    if (!orders) {
      return res.status(404).json({
        message: "No order placed!",
        type: "Failed",
      });
    }
    return res.status(200).json({
      orders,
      type: "Done",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error!",
      type: "Failed",
    });
  }
});

// Order cancel

router.patch("/cancel/:orderId", auth, async (req, res) => {
  try {
    const userid = req.user.id;

    const order = await Order.findOne({
      userId: userid,
      _id: req.params.orderId,
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found!",
        type: "Failed",
      });
    }

    if (order.orderStatus === "placed") {
      order.orderStatus = "cancelled";
      await order.save();
      return res.status(200).json({
        message: "Order is successfully cancelled!",
        type: "Done",
      });
    } else if (order.orderStatus === "cancelled") {
      return res.status(400).json({
        message: "This order is already cancelled!",
        type: "Failed",
      });
    } else {
      return res.status(400).json({
        message: "This order can no longer be cancelled!",
        type: "Failed",
      });
    }
  } catch (Err) {
    console.error(Err);
    return res.status(500).json({
      message: "Internal server error!",
      type: "Failed",
    });
  }
});

// categorised order view

router.get("/view/:type", auth, async (req, res) => {
  try {
    const userid = req.user.id;

    if (req.params.type === "All Orders") {
      const orders = await Order.find({
        userId: userid,
      })?.sort({createdAt : -1});

      return res.status(200).json({
        type: "Done",
        orders,
      });
    }
    if (req.params.type === "Cancelled") {
      const orders = await Order.find({
        userId: userid,
        orderStatus: "cancelled",
      })?.sort({createdAt : -1});
      return res.status(200).json({
        type: "Done",
        orders,
      });
    }
    if (req.params.type === "In Progress") {
      const orders = await Order.find({
        userId: userid,
        orderStatus: {
          $in : ['out-for-delivery', 'placed', 'confirmed', 'preparing']
        }
      })?.sort({createdAt : -1});
      return res.status(200).json({
        type: "Done",
        orders,
      });
    }
    if(req.params.type === 'Delivered'){
      const orders = await Order.find({
        orderStatus : 'delivered'
      });
      return res.status(200).json({
        type : 'Done',
        orders
      });
    }
    return res.status(404).json({
      message : 'No orders found!',
      type : 'Failed'
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error!",
      type: "Failed",
    });
  }
});

export default router;
