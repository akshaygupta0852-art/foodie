import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    cuisine: {
      type: [String],
      required: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    deliveryTime: {
      type: Number,
      required: true,
    },

    isOpen: {
      type: Boolean,
      default: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Restaurants = mongoose.model("Restaurants", restaurantSchema);
export default Restaurants;
