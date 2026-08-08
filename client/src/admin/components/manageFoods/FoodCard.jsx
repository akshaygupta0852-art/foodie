const FoodCard = ({ food, onUpdate, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">

      {/* Food Image */}
      <div className="relative h-48 w-full">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover"
        />

        {/* Availability */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            food.isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {food.isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-sm text-gray-500">{food?.restaurant.name}</h2>

        {/* Name + Category */}
        <div className="mb-2">
          <h3 className="text-lg font-bold text-gray-800 truncate">
            {food.name}
          </h3>

          <p className="text-sm text-gray-500">
            {food.category}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {food.description}
        </p>

        {/* Food Details */}
        <div className="flex items-center justify-between mt-2">

          <span className="text-xl font-bold text-orange-600">
            ₹{food.price}
          </span>

          <span className="text-sm text-gray-500">
            ⏱ {food.preparationTime} min
          </span>

        </div>

        {/* Veg / Non Veg */}
        <div className="mt-1">
          <span
            className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md ${
              food.isVeg
                ? "bg-green-50 text-green-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                food.isVeg ? "bg-green-500" : "bg-red-500"
              }`}
            />
            {food.isVeg ? "Vegetarian" : "Non-Vegetarian"}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-2 pt-3 border-t border-gray-100">

          <button
            onClick={() => onUpdate(food)}
            className="flex-1 py-2 rounded-lg border border-orange-500 text-orange-600 font-medium hover:bg-orange-50 transition"
          >
            Update
          </button>

          <button
            onClick={() => onDelete(food._id)}
            className="flex-1 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;