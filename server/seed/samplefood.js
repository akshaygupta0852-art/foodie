import mongoose from "mongoose";
import dotenv from "dotenv";

import Restaurants from "../models/Restaurant.js"
import Food from "../models/Food.js"

dotenv.config();

await mongoose.connect('mongodb://localhost:27017/');

try {
  // Fetch all restaurants
  const restaurants = await Restaurants.find();

  const restaurantMap = {};

  restaurants.forEach((restaurant) => {
    restaurantMap[restaurant.name] = restaurant._id;
  });

  const foods = [
    // Pizza Palace
    {
      name: "Margherita Pizza",
      description: "Classic cheese pizza with fresh basil.",
      price: 299,
      image: "https://picsum.photos/500/500?random=101",
      category: "Pizza",
      restaurant: restaurantMap["Pizza Palace"],
      isVeg: true,
      rating: 4.8,
      totalReviews: 340,
      preparationTime: 20,
      discount: 10,
    },
    {
      name: "Farmhouse Pizza",
      description: "Loaded with fresh vegetables.",
      price: 399,
      image: "https://picsum.photos/500/500?random=102",
      category: "Pizza",
      restaurant: restaurantMap["Pizza Palace"],
      isVeg: true,
      rating: 4.7,
      totalReviews: 280,
      preparationTime: 25,
      discount: 15,
    },

    // Burger Junction
    {
      name: "Classic Burger",
      description: "Grilled burger with cheese.",
      price: 179,
      image: "https://picsum.photos/500/500?random=103",
      category: "Burger",
      restaurant: restaurantMap["Burger Junction"],
      isVeg: false,
      rating: 4.5,
      totalReviews: 180,
      preparationTime: 15,
      discount: 5,
    },
    {
      name: "Veg Burger",
      description: "Crispy veg patty burger.",
      price: 149,
      image: "https://picsum.photos/500/500?random=104",
      category: "Burger",
      restaurant: restaurantMap["Burger Junction"],
      isVeg: true,
      rating: 4.4,
      totalReviews: 150,
      preparationTime: 15,
      discount: 0,
    },

    // Royal Biryani
    {
      name: "Chicken Biryani",
      description: "Authentic Hyderabadi chicken biryani.",
      price: 349,
      image: "https://picsum.photos/500/500?random=105",
      category: "Biryani",
      restaurant: restaurantMap["Royal Biryani"],
      isVeg: false,
      rating: 4.9,
      totalReviews: 620,
      preparationTime: 30,
      discount: 20,
    },
    {
      name: "Veg Biryani",
      description: "Traditional vegetable biryani.",
      price: 259,
      image: "https://picsum.photos/500/500?random=106",
      category: "Biryani",
      restaurant: restaurantMap["Royal Biryani"],
      isVeg: true,
      rating: 4.6,
      totalReviews: 210,
      preparationTime: 25,
      discount: 10,
    },

    // Chinese Wok
    {
      name: "Hakka Noodles",
      description: "Stir-fried noodles with vegetables.",
      price: 199,
      image: "https://picsum.photos/500/500?random=107",
      category: "Noodles",
      restaurant: restaurantMap["Chinese Wok"],
      isVeg: true,
      rating: 4.5,
      totalReviews: 160,
      preparationTime: 20,
      discount: 0,
    },
    {
      name: "Chicken Fried Rice",
      description: "Chinese style fried rice.",
      price: 239,
      image: "https://picsum.photos/500/500?random=108",
      category: "Rice",
      restaurant: restaurantMap["Chinese Wok"],
      isVeg: false,
      rating: 4.7,
      totalReviews: 230,
      preparationTime: 20,
      discount: 5,
    },

    // South Spice
    {
      name: "Masala Dosa",
      description: "Crispy dosa served with chutney.",
      price: 149,
      image: "https://picsum.photos/500/500?random=109",
      category: "South Indian",
      restaurant: restaurantMap["South Spice"],
      isVeg: true,
      rating: 4.8,
      totalReviews: 310,
      preparationTime: 15,
      discount: 0,
    },

    {
      name: "Idli Sambar",
      description: "Soft idlis served with sambar.",
      price: 99,
      image: "https://picsum.photos/500/500?random=110",
      category: "South Indian",
      restaurant: restaurantMap["South Spice"],
      isVeg: true,
      rating: 4.7,
      totalReviews: 220,
      preparationTime: 10,
      discount: 0,
    },

    // Punjabi Tadka
    {
      name: "Butter Chicken",
      description: "Creamy butter chicken.",
      price: 349,
      image: "https://picsum.photos/500/500?random=111",
      category: "North Indian",
      restaurant: restaurantMap["The Punjabi Tadka"],
      isVeg: false,
      rating: 4.9,
      totalReviews: 510,
      preparationTime: 30,
      discount: 10,
    },

    {
      name: "Paneer Butter Masala",
      description: "Paneer in rich tomato gravy.",
      price: 299,
      image: "https://picsum.photos/500/500?random=112",
      category: "North Indian",
      restaurant: restaurantMap["The Punjabi Tadka"],
      isVeg: true,
      rating: 4.8,
      totalReviews: 390,
      preparationTime: 25,
      discount: 10,
    },

    // Healthy Bowl
    {
      name: "Caesar Salad",
      description: "Healthy Caesar salad.",
      price: 229,
      image: "https://picsum.photos/500/500?random=113",
      category: "Salad",
      restaurant: restaurantMap["Healthy Bowl"],
      isVeg: true,
      rating: 4.6,
      totalReviews: 120,
      preparationTime: 10,
      discount: 0,
    },

    // Sweet Treats
    {
      name: "Chocolate Cake",
      description: "Rich chocolate cake.",
      price: 199,
      image: "https://picsum.photos/500/500?random=114",
      category: "Dessert",
      restaurant: restaurantMap["Sweet Treats"],
      isVeg: true,
      rating: 4.9,
      totalReviews: 420,
      preparationTime: 5,
      discount: 15,
    },

    // Taco Fiesta
    {
      name: "Chicken Taco",
      description: "Mexican style chicken taco.",
      price: 189,
      image: "https://picsum.photos/500/500?random=115",
      category: "Mexican",
      restaurant: restaurantMap["Taco Fiesta"],
      isVeg: false,
      rating: 4.4,
      totalReviews: 170,
      preparationTime: 15,
      discount: 0,
    },

    // Cafe Brew
    {
      name: "Cappuccino",
      description: "Freshly brewed coffee.",
      price: 149,
      image: "https://picsum.photos/500/500?random=116",
      category: "Beverage",
      restaurant: restaurantMap["Cafe Brew"],
      isVeg: true,
      rating: 4.8,
      totalReviews: 260,
      preparationTime: 5,
      discount: 0,
    },
  ];

  await Food.deleteMany();

  await Food.insertMany(foods);

  console.log("✅ Sample food inserted successfully.");
} catch (err) {
  console.error(err);
} finally {
  await mongoose.disconnect();
}