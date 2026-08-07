import express from "express";
import Restaurants from "../models/Restaurant.js";
import auth from "../middleware/authmiddleware.js";
import User from "../models/User.js";
import adminAuth from "../middleware/adminmiddleware.js";
import upload from "../middleware/multer.js";
import uploadCloudinary from "../utils/uploadToCloudinary.js";

const router = express.Router();

// Add restaurant

router.post(
  "/add/restaurant",
  adminAuth,
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        name,
        ownerName,
        email,
        mobile,
        address,
        city,
        state,
        pincode,
        landmark,
        openingTime,
        closingTime,
        description,
      } = req.body;

      const cuisines = Array.isArray(req.body.cuisines)
        ? req.body.cuisines
        : [req.body.cuisines];
      const adminId = req.user.id;
      const findAdmin = await Restaurants.findById(adminId);
      if (findAdmin) {
        return res.status(400).json({
          message: "Admin only allows to open single shop!",
          type: "Failed",
        });
      }

      const result = await uploadCloudinary(
        req.file.buffer,
        "restaurants",
      );
      const newRest = await Restaurants.create({
        name,
        ownerName,
        email,
        mobile,
        openingTime,
        closingTime,
        address,
        city,
        state,
        pincode,
        landmark,
        cuisines,
        description,
        admin: adminId,
        image: result.secure_url,
      });

      return res.status(200).json({
        message: "Restaurant added successfully!",
        type: "Done",
        details: newRest,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        mesaage: "Internal server error!",
      });
    }
  },
);

// view restaurants

router.get("/restaurants", async (req, res) => {
  try {
    const data = await Restaurants.find({
      isActive: true,
      isOpen: true,
    });
    return res.status(200).json({
      restaurants: data,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
      type: "Failed",
    });
  }
});

// follow restaurant

router.patch("/restaurants/follow", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const restId = req.query.r;

    const user = await User.findById(userId);
    const restaurant = await Restaurants.findById(restId);
    const isFound =
      restaurant.followersId.some((i) => i.toString() === userId) &&
      user.favoriteRestaurants.some((i) => i.toString() === restId);

    if (!isFound) {
      await Restaurants.findByIdAndUpdate(restId, {
        $addToSet: {
          followersId: userId,
        },
        $inc: {
          followersCount: 1,
        },
      });

      await User.findByIdAndUpdate(userId, {
        $addToSet: {
          favoriteRestaurants: restId,
        },
      });

      return res.json({
        type: "Done",
        message: "Restaurant added to favourites",
      });
    } else {
      await Restaurants.findByIdAndUpdate(restId, {
        $pull: {
          followersId: userId,
        },
        $inc: {
          followersCount: -1,
        },
      });
      return res.status(200).json({
        message: "Restaurant removed from favourites",
        type: "Done",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error!",
      type: "Failed",
    });
  }
});

export default router;
