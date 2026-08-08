import { useState } from "react";
import FoodForm from "../components/Addfood/FoodForm.jsx";
import { addFood } from "../../routes/Foodsroute.js";
import useDashboard from "../hooks/useDashboard.jsx";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()
  const { restaurants } = useDashboard();

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

      await addFood(data);

      // console.log(formData);

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
        <div className="flex gap-2 items-center mb-8">
          <ArrowLeft className="hover:bg-gray-200 transition-all duration-100 cursor-pointer" onClick={()=>{
            navigate(-1)
          }} />
          <div>

            <h1 className="text-3xl font-bold max-lg:text-lg">
              Add Food
            </h1>

            <p className="max-lg:text-sm text-gray-500">
              Create a new food item for your restaurant.
            </p>
          </div>
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