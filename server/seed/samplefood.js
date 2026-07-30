import mongoose from "mongoose";
import 'dotenv/config';
import food from "../models/Food.js";
const foods = [
  // Restaurant 1
  {
    name: "Margherita Pizza",
    description: "Classic pizza topped with tomato sauce, mozzarella and fresh basil.",
    price: 249,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    category: "Pizza",
    restaurant: "6a6abffa676ce64eadd52fd5",
    isVeg: true,
    isAvailable: true,
    rating: 4.6,
    totalReviews: 128,
    preparationTime: 25,
    discount: 10,
  },
  {
    name: "Farmhouse Pizza",
    description: "Loaded with onion, capsicum, tomato, mushrooms and mozzarella.",
    price: 329,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    category: "Pizza",
    restaurant: "6a6abffa676ce64eadd52fd5",
    isVeg: true,
    isAvailable: true,
    rating: 4.8,
    totalReviews: 215,
    preparationTime: 30,
    discount: 15,
  },
  {
    name: "Garlic Bread",
    description: "Freshly baked garlic bread with herbs and melted cheese.",
    price: 149,
    image: "https://images.unsplash.com/photo-1619535860434-cf9b902a1c0a",
    category: "Sides",
    restaurant: "6a6abffa676ce64eadd52fd5",
    isVeg: true,
    isAvailable: true,
    rating: 4.4,
    totalReviews: 96,
    preparationTime: 15,
    discount: 0,
  },

  // Restaurant 2
  {
    name: "Classic Cheeseburger",
    description: "Juicy grilled patty with cheddar cheese, lettuce, tomato and special sauce.",
    price: 199,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    category: "Burgers",
    restaurant: "6a6abffa676ce64eadd52fd6",
    isVeg: false,
    isAvailable: true,
    rating: 4.7,
    totalReviews: 184,
    preparationTime: 20,
    discount: 10,
  },
  {
    name: "Crispy Chicken Burger",
    description: "Crispy fried chicken fillet with lettuce, cheese and creamy sauce.",
    price: 229,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    category: "Burgers",
    restaurant: "6a6abffa676ce64eadd52fd6",
    isVeg: false,
    isAvailable: true,
    rating: 4.8,
    totalReviews: 241,
    preparationTime: 25,
    discount: 15,
  },
  {
    name: "French Fries",
    description: "Crispy golden fries seasoned with our special seasoning.",
    price: 99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    category: "Sides",
    restaurant: "6a6abffa676ce64eadd52fd6",
    isVeg: true,
    isAvailable: true,
    rating: 4.5,
    totalReviews: 143,
    preparationTime: 10,
    discount: 0,
  },

  // Restaurant 3
  {
    name: "Paneer Butter Masala",
    description: "Soft paneer cooked in a rich, creamy tomato and butter gravy.",
    price: 249,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    category: "North Indian",
    restaurant: "6a6abffa676ce64eadd52fd7",
    isVeg: true,
    isAvailable: true,
    rating: 4.7,
    totalReviews: 176,
    preparationTime: 25,
    discount: 10,
  },
  {
    name: "Butter Naan",
    description: "Soft Indian flatbread brushed with butter and fresh coriander.",
    price: 59,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    category: "Indian Bread",
    restaurant: "6a6abffa676ce64eadd52fd7",
    isVeg: true,
    isAvailable: true,
    rating: 4.5,
    totalReviews: 102,
    preparationTime: 10,
    discount: 0,
  },
  {
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken and traditional spices.",
    price: 299,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c",
    category: "Biryani",
    restaurant: "6a6abffa676ce64eadd52fd7",
    isVeg: false,
    isAvailable: true,
    rating: 4.9,
    totalReviews: 312,
    preparationTime: 35,
    discount: 20,
  },
];
async function setSampleFoods() {
    try{
        await mongoose.connect(process.env.DBURI);
        await food.deleteMany({});
        await food.insertMany(foods);
        console.log('food added successfully');
    }catch(err){
        console.error(err);
    }
}
setSampleFoods();