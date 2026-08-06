import express from "express";
import Restaurants from "../models/Restaurant.js";
import auth from "../middleware/authmiddleware.js";
import User from "../models/User.js";

const router = express.Router();

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
