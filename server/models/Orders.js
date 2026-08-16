import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    foodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foods",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false },
);

const deliveryAddressSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    fullAddress: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    restaurant: {
      restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurants",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },

    items: {
      type: [orderItemSchema],
      required: true,
      validate: {
        validator: (items) => items.length > 0,
        message: "Order must contain at least one item",
      },
    },

    address: {
      type: deliveryAddressSchema,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "ONLINE"],
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },

    orderStatus: {
      type: String,
      enum: [
        "placed",
        "confirmed",
        "out-for-delivery",
        "delivered",
        "preparing",
        "cancelled",
      ],
      default: "placed",
    },

    deliveredAt: {
      type: Date,
      default: null,
    },
    paymentMethod: {
      type: String,
      enum: ["COD", "UPI", "Credit card", "Paytm"],
      required: true,
      default: "COD",
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
