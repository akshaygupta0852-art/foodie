import bcrypt from "bcrypt";
import express from "express";
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import adminAuth from "../middleware/adminmiddleware.js";
import Restaurants from "../models/Restaurant.js";
import Orders from "../models/Orders.js";
import Foods from "../models/Food.js";
import Order from "../models/Orders.js";
import upload from "../middleware/multer.js";
import uploadCloudinary from "../utils/uploadToCloudinary.js";

const router = express.Router();

// Admin registration

router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const foundUser = await Admin.findOne({ email });
    if (foundUser) {
      return res.status(400).json({
        message: "This email is already registered.",
        type: "Failed",
      });
    }
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
        type: "Failed",
      });
    }
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long.",
        type: "Failed",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name: fullName,
      email,
      password: hashedPassword,
    });
    await newAdmin.save();
    const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_ADMIN_SECRET, {
      expiresIn: "3d",
    });
    console.log(newAdmin);
    return res.status(200).json({
      message: "Admin is successfully registered!",
      type: "Done",
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error!",
      type: "Failed",
    });
  }
});

// admin login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found!",
        type: "Failed",
      });
    }
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password!, please try again",
        type: "Failed",
      });
    }
    const token = jwt.sign({ id: admin._id }, process.env.JWT_ADMIN_SECRET, {
      expiresIn: "3d",
    });

    return res.status(200).json({
      message: "Admin is successfully logged in!",
      type: "Done",
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error!",
      type: "Failed",
    });
  }
});

// Dashboard data

router.get("/data", adminAuth, async (req, res) => {
  try {
    const adminId = req.user.id;
    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found!",
        type: "Failed",
      });
    }

    const restrauData = await Restaurants.find({
      admin: adminId,
    });

    const restrauId = restrauData.map((res) => res._id);

    const foodData = await Foods.find({
      restaurant: { $in: restrauId },
    }).populate('restaurant');
    const orderData = await Order.find({
      "restaurant.restaurantId": {
        $in: restrauId,
      },
    });
    console.log(admin, restrauData, foodData);
    return res.status(200).json({
      rest: restrauData,
      admin: admin,
      foods: foodData,
      orders: orderData,
      type: "Done",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error!",
      type: "Failed",
    });
  }
});

//  Delete restaurant

router.delete("/restaurant/delete", adminAuth, async (req, res) => {
  try {
    const restId = req.query.r;
    const restaurant = await Restaurants.findByIdAndDelete(restId);
    const foods = await Foods.deleteMany({ restaurant: restId });
    if (!restaurant) {
      return res.status(404).json({
        message: "This restaurant is already deleted!",
        type: "Failed",
      });
    }
    return res.status(200).json({
      message: "Restaurant is successfully deleted!",
      type: "Done",
    });
  } catch (Err) {
    console.error(Err);
    return res.status(500).json({
      message: "Internal server error!",
      type: "Failed",
    });
  }
});

// Food add

router.post(
  "/food/add",
  adminAuth,
  upload.single("image"), async (req, res) => {
    try {
      const {
        name,
        description,
        price,
        category,
        restaurant,
        preparationTime,
        isVeg,
        isAvailable,
      } = req.body;
      const adminId = req.user.id;
      const result = await uploadCloudinary(req.file.buffer, "foods");
      const newFood = await Foods.create({
        name,
        description,
        price,
        image: result.secure_url,
        category,
        restaurant,
        isVeg,
        isAvailable,
        preparationTime,
      });
      return res.status(200).json({
        message: "Food added successfully",
        food: newFood,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal server error!",
        type: "Failed",
      });
    }
  });


export default router;
