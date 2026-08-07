import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import User from "../models/User.js"

dotenv.config();

await mongoose.connect('mongodb://localhost:27017/');

try {
  const hashedPassword = await bcrypt.hash("12345678", 10);

  const users = [
    {
      name: "Rahul Sharma",
      email: "rahul@example.com",
      password: hashedPassword,
      addresses: [
        {
          username: "Rahul Sharma",
          mobile: "9876543210",
          label: "Home",
          houseNo: "12A",
          street: "MG Road",
          city: "Panna",
          pincode: "488001",
          isDefault: true,
        },
      ],
    },
    {
      name: "Priya Singh",
      email: "priya@example.com",
      password: hashedPassword,
      addresses: [
        {
          username: "Priya Singh",
          mobile: "9876543211",
          label: "Work",
          houseNo: "22",
          street: "Civil Lines",
          city: "Satna",
          pincode: "485001",
          isDefault: true,
        },
      ],
    },
    {
      name: "Amit Verma",
      email: "amit@example.com",
      password: hashedPassword,
      addresses: [
        {
          username: "Amit Verma",
          mobile: "9876543212",
          label: "Home",
          houseNo: "5",
          street: "Station Road",
          city: "Katni",
          pincode: "483501",
          isDefault: true,
        },
      ],
    },
    {
      name: "Neha Gupta",
      email: "neha@example.com",
      password: hashedPassword,
      addresses: [
        {
          username: "Neha Gupta",
          mobile: "9876543213",
          label: "Home",
          houseNo: "48",
          street: "Lake View",
          city: "Bhopal",
          pincode: "462001",
          isDefault: true,
        },
      ],
    },
    {
      name: "Rohan Mehta",
      email: "rohan@example.com",
      password: hashedPassword,
      addresses: [
        {
          username: "Rohan Mehta",
          mobile: "9876543214",
          label: "Work",
          houseNo: "18",
          street: "Market Road",
          city: "Indore",
          pincode: "452001",
          isDefault: true,
        },
      ],
    },
    {
      name: "Anjali Jain",
      email: "anjali@example.com",
      password: hashedPassword,
      addresses: [
        {
          username: "Anjali Jain",
          mobile: "9876543215",
          label: "Home",
          houseNo: "32",
          street: "Ring Road",
          city: "Jabalpur",
          pincode: "482001",
          isDefault: true,
        },
      ],
    },
    {
      name: "Vikas Patel",
      email: "vikas@example.com",
      password: hashedPassword,
      addresses: [
        {
          username: "Vikas Patel",
          mobile: "9876543216",
          label: "Home",
          houseNo: "91",
          street: "Temple Road",
          city: "Rewa",
          pincode: "486001",
          isDefault: true,
        },
      ],
    },
    {
      name: "Sneha Kapoor",
      email: "sneha@example.com",
      password: hashedPassword,
      addresses: [
        {
          username: "Sneha Kapoor",
          mobile: "9876543217",
          label: "Work",
          houseNo: "10",
          street: "Green Park",
          city: "Gwalior",
          pincode: "474001",
          isDefault: true,
        },
      ],
    },
    {
      name: "Arjun Mishra",
      email: "arjun@example.com",
      password: hashedPassword,
      addresses: [
        {
          username: "Arjun Mishra",
          mobile: "9876543218",
          label: "Home",
          houseNo: "67",
          street: "Main Street",
          city: "Sagar",
          pincode: "470001",
          isDefault: true,
        },
      ],
    },
    {
      name: "Pooja Tiwari",
      email: "pooja@example.com",
      password: hashedPassword,
      addresses: [
        {
          username: "Pooja Tiwari",
          mobile: "9876543219",
          label: "Home",
          houseNo: "15",
          street: "Nehru Colony",
          city: "Chhatarpur",
          pincode: "471001",
          isDefault: true,
        },
      ],
    },
  ];

  await User.deleteMany();

  await User.insertMany(users);

  console.log("✅ Sample users inserted successfully.");
} catch (error) {
  console.error(error);
} finally {
  await mongoose.disconnect();
}