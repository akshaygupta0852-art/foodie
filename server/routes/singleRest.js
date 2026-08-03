import express from "express";
import Restaurants from "../models/Restaurant.js";

const router = express.Router();

router.get("/restaurants/:id", async (req, res) => {
  try {
    const data = await Restaurants.findById(req.params.id);
    if (!data) {
      return res
        .status(404)
        .json({ message: "Restaurant not found", type: "Failed" });
    }
    return res.status(200).json({
      restaurant: data,
      type: "Done",
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Internal server error", type: "Failed" });
  }
});
export default router;
