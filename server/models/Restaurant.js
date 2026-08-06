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

    ownerName: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    pincode: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    openingTime: {
      type: String,
      required: true,
      trim: true,
    },
    closingTime: {
      type: String,
      required: true,
    },

    landmark: {
      type: String,
      required: true,
      trim: true,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    cuisines: {
      type: [String],
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    followersCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    followersId: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },

    deliveryTime: {
      type: Number,
      required: true,
      default: 40,
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
