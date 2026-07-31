import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({message : 'User not found. Please register first.'})
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(400).json({
            message : "Invalid password!, please try again"
        });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    })
    return res.status(200).json({
        message : 'Login successful',
        userName : user.name,
        userId : user._id,
        token
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server error" });
  }
});

export default router;
