import "dotenv/config";
import mongoose from "mongoose";
import Restaurant from "../models/Restaurant.js";

const restaurants = [
  {
    name: "Spice Garden",
    description: "Authentic Indian food with traditional flavors",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    cuisine: ["Indian", "North Indian"],
    address: "Main Market",
    rating: 4.5,
    deliveryTime: 30,
    isOpen: true,
    isActive: true,
  },

  {
    name: "Pizza Palace",
    description: "Freshly baked pizzas and delicious sides",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    cuisine: ["Italian", "Pizza"],
    address: "Civil Lines",
    rating: 4.3,
    deliveryTime: 25,
    isOpen: true,
    isActive: true,
  },

  {
    name: "Dragon Bowl",
    description: "Delicious Chinese meals and noodles",
    image: "https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    cuisine: ["Chinese", "Asian"],
    address: "Station Road",
    rating: 4.2,
    deliveryTime: 35,
    isOpen: true,
    isActive: true,
  },
];

async function seedRestaurants() {
  try {
    await mongoose.connect(process.env.DBURI);

    await Restaurant.deleteMany({});
    await Restaurant.insertMany(restaurants);

    console.log("Restaurants added successfully");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
}

seedRestaurants();