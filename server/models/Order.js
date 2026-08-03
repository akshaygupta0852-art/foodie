import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
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
    name :{
        type : String,
        required : true
    },
  },
  items: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foods",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  address: {
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
    fullAddress : {
        type : String,
        required : true
    }
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status :{
    type : String,
    enum : ['ordered', 'confirmed', 'delivered', 'cancelled'],
    default : 'ordered',
    required : true
  },
  paymentMethod : {
    type : String,
    enum : ["COD", "UPI", "Credit card", "Paytm"],
    required : true,
    default : "COD"
  }
});

const Orders = mongoose.model("Orders", orderSchema);

export default Orders;
