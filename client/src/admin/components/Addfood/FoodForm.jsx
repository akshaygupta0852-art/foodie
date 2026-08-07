import { FiImage, FiRotateCcw, FiSave } from "react-icons/fi";

const FoodForm = ({
  formData,
  setFormData,
  restaurants = [],
  categories = [],
  imagePreview,
  onImageChange,
  onSubmit,
  onReset,
  loading = false,
}) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 rounded-2xl bg-white p-8 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Add Food Item
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Fill in the details below to create a new food item.
        </p>
      </div>

      {/* Basic Information */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Food Name *
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Paneer Pizza"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF6B35]"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Price (₹) *
          </label>

          <input
            type="number"
            name="price"
            min="0"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF6B35]"
            required
          />
        </div>

      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description *
        </label>

        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF6B35]"
          required
        />
      </div>

      {/* Category & Restaurant */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category *
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF6B35]"
            required
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Restaurant *
          </label>

          <select
            name="restaurant"
            value={formData.restaurant}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF6B35]"
            required
          >
            <option value="">Select Restaurant</option>

            {restaurants.map((restaurant) => (
              <option
                key={restaurant._id}
                value={restaurant._id}
              >
                {restaurant.name}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Preparation */}

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Preparation Time (minutes)
        </label>

        <input
          type="number"
          name="preparationTime"
          min="1"
          value={formData.preparationTime}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF6B35]"
        />
      </div>

      {/* Veg / Available */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-3 block text-sm font-medium text-gray-700">
            Food Type
          </label>

          <div className="flex gap-6">

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={formData.isVeg}
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    isVeg: true,
                  }))
                }
              />
              Veg
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={!formData.isVeg}
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    isVeg: false,
                  }))
                }
              />
              Non Veg
            </label>

          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-gray-700">
            Availability
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
            />

            Available
          </label>
        </div>

      </div>

      {/* Image */}

      <div>

        <label className="mb-3 block text-sm font-medium text-gray-700">
          Food Image *
        </label>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 p-8 transition hover:border-[#FF6B35]">

          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="h-52 rounded-xl object-cover"
            />
          ) : (
            <>
              <FiImage
                size={50}
                className="text-gray-400"
              />

              <p className="mt-3 text-sm text-gray-500">
                Click to upload food image
              </p>
            </>
          )}

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={onImageChange}
          />

        </label>

      </div>

      {/* Buttons */}

      <div className="flex flex-col gap-4 sm:flex-row">

        <button
          type="button"
          onClick={onReset}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 py-3 font-medium hover:bg-gray-100"
        >
          <FiRotateCcw />
          Reset
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#FF6B35] py-3 font-medium text-white transition hover:bg-[#e85d2c] disabled:opacity-50"
        >
          <FiSave />
          {loading ? "Adding..." : "Add Food"}
        </button>

      </div>

    </form>
  );
};

export default FoodForm;