import {
  FiArrowRight,
  FiStar,
  FiUsers,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

const TopRestaurants = ({ restaurants = [] }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-100 p-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Top Restaurants
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Highest rated restaurants
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-[#FF6B35] hover:underline">
          View All
          <FiArrowRight />
        </button>

      </div>

      {/* Restaurant List */}

      <div className="divide-y divide-gray-100">

        {restaurants.length === 0 ? (

          <div className="p-10 text-center">

            <h3 className="text-lg font-semibold text-gray-700">
              No Restaurants Found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Top restaurants will appear here.
            </p>

          </div>

        ) : (

          restaurants.map((restaurant, index) => (

            <div
              key={restaurant._id}
              className="flex items-center gap-4 p-5 transition hover:bg-gray-50"
            >

              {/* Rank */}

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 font-bold text-[#FF6B35]">
                {index + 1}
              </div>

              {/* Image */}

              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="h-16 w-16 rounded-xl object-cover"
              />

              {/* Info */}

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

                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">

                  <span className="flex items-center gap-1">
                    <FiStar className="text-yellow-500" />
                    {restaurant.rating}
                  </span>

                  <span className="flex items-center gap-1">
                    <FiUsers />
                    {restaurant.followersCount}
                  </span>

                  <span className="flex items-center gap-1">
                    <FiClock />
                    {restaurant.deliveryTime} min
                  </span>

                  <span className="flex items-center gap-1">
                    <FiMapPin />
                    {restaurant.city}
                  </span>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
};

export default TopRestaurants;