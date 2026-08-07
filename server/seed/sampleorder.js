import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "../models/User.js";
import Restaurants from "../models/Restaurant.js";
import Food from "../models/Food.js";
import Order from "../models/Orders.js"

dotenv.config();

await mongoose.connect('mongodb://localhost:27017/');

try {
  const users = await User.find();
  const restaurants = await Restaurants.find();
  const foods = await Food.find();

  const orders = [];

  // Create 20 sample orders
  for (let i = 0; i < 20; i++) {
    const user = users[Math.floor(Math.random() * users.length)];

    // Pick one restaurant
    const restaurant =
      restaurants[Math.floor(Math.random() * restaurants.length)];

    // Foods of that restaurant
    const restaurantFoods = foods.filter(
      (food) => food.restaurant.toString() === restaurant._id.toString()
    );

    if (restaurantFoods.length === 0) continue;

    // Random number of items (1-3)
    const numberOfItems = Math.floor(Math.random() * 3) + 1;

    const items = [];
    let totalPrice = 0;

    const shuffledFoods = [...restaurantFoods].sort(
      () => Math.random() - 0.5
    );

    for (
      let j = 0;
      j < Math.min(numberOfItems, shuffledFoods.length);
      j++
    ) {
      const food = shuffledFoods[j];
      const quantity = Math.floor(Math.random() * 3) + 1;

      items.push({
        foodId: food._id,
        image: food.image,
        name: food.name,
        price: food.price,
        quantity,
      });

      totalPrice += food.price * quantity;
    }

    const address = user.addresses[0];

    orders.push({
      userId: user._id,

      restaurant: {
        restaurantId: restaurant._id,
        name: restaurant.name,
      },

      items,

      address: {
        username: address.username,
        mobile: address.mobile,
        label: address.label,
        fullAddress: `${address.houseNo}, ${address.street}, ${address.city}, ${address.pincode}`,
      },

      totalPrice,

      paymentMethod: ["COD", "UPI", "Credit card", "Paytm"][
        Math.floor(Math.random() * 4)
      ],

      paymentStatus: ["pending", "paid", "failed"][
        Math.floor(Math.random() * 3)
      ],

      orderStatus: [
        "placed",
        "confirmed",
        "preparing",
        "out-for-delivery",
        "delivered",
        "cancelled",
      ][Math.floor(Math.random() * 6)],

      deliveredAt: Math.random() > 0.5 ? new Date() : null,
    });
  }

  await Order.deleteMany();

  await Order.insertMany(orders);

  console.log("✅ Sample orders inserted successfully.");
} catch (err) {
  console.error(err);
} finally {
  await mongoose.disconnect();
}