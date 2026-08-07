import { useState } from "react";
import FoodForm from "../components/Addfood/FoodForm.jsx";

const initialState = {
  name: "",
  description: "",
  price: "",
  category: "",
  restaurant: "",
  preparationTime: 20,
  isVeg: true,
  isAvailable: true,
  image: null,
};

const categories = [
  "Pizza",
  "Burger",
  "Biryani",
  "Chinese",
  "South Indian",
  "North Indian",
  "Dessert",
  "Beverage",
  "Fast Food",
  "Salad",
];

const AddFood = () => {
  const [formData, setFormData] = useState(initialState);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);

  // Replace with API call
  const restaurants = [
    {
      _id: "1",
      name: "Pizza Palace",
    },
    {
      _id: "2",
      name: "Burger Junction",
    },
    {
      _id: "3",
      name: "Royal Biryani",
    },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setImagePreview(URL.createObjectURL(file));
  };

  const handleReset = () => {
    setFormData(initialState);
    setImagePreview("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      // Example
      // await addFood(data);

      console.log(formData);

      alert("Food Added Successfully");

      handleReset();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Add Food
          </h1>

          <p className="mt-2 text-gray-500">
            Create a new food item for your restaurant.
          </p>
        </div>

        <FoodForm
          formData={formData}
          setFormData={setFormData}
          restaurants={restaurants}
          categories={categories}
          imagePreview={imagePreview}
          onImageChange={handleImageChange}
          onSubmit={handleSubmit}
          onReset={handleReset}
          loading={loading}
        />

      </div>
    </section>
  );
};

export default AddFood;