import {
  FiArrowRight,
  FiMapPin,
  FiClock,
  FiStar,
} from "react-icons/fi";

const RecentRestaurants = ({ restaurants = [] }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-100 p-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Restaurants
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Newly added restaurants
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-[#FF6B35] hover:underline">
          View All
          <FiArrowRight />
        </button>

      </div>

      {/* Restaurant List */}

      <div className="divide-y divide-gray-100">

        {restaurants.map((restaurant) => (

          <div
            key={restaurant._id}
            className="flex items-center gap-4 p-5 transition hover:bg-gray-50"
          >

            {/* Restaurant Image */}

            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="h-16 w-16 rounded-xl object-cover"
            />

            {/* Details */}

            <div className="min-w-0 flex-1">

              <div className="flex items-center justify-between">

                <h3 className="truncate text-base font-semibold text-gray-900">
                  {restaurant.name}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    restaurant.isOpen
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {restaurant.isOpen ? "Open" : "Closed"}
                </span>

              </div>

              <p className="mt-1 text-sm text-gray-500">
                Owner: {restaurant.ownerName}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">

                <span className="flex items-center gap-1">
                  <FiMapPin size={15} />
                  {restaurant.city}
                </span>

                <span className="flex items-center gap-1">
                  <FiClock size={15} />
                  {restaurant.deliveryTime} min
                </span>

                <span className="flex items-center gap-1">
                  <FiStar
                    size={15}
                    className="text-yellow-500"
                  />
                  {restaurant.rating}
                </span>

              </div>

            </div>

          </div>

        ))}

        {restaurants.length === 0 && (

          <div className="p-10 text-center">

            <img
              src="/empty-restaurant.svg"
              alt="No Restaurants"
              className="mx-auto h-32"
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              No Restaurants Found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Restaurants added by admin will appear here.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default RecentRestaurants;