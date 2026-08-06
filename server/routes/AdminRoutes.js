import bcrypt from "bcrypt";
import express from "express";
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

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

    if(!isMatch){
        return res.status(400).json({
            message : 'Invalid password!, please try again',
            type : 'Failed'
        })
    }
    const token = jwt.sign({ id : admin._id }, process.env.JWT_ADMIN_SECRET, {
        expiresIn : '3d'
    });

    return res.status(200).json({
        message : 'Admin is successfully logged in!',
        type: "Done",
        token
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error!",
      type: "Failed"
    });
  }
});

export default router;
