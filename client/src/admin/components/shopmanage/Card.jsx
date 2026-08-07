import {
  FiClock,
  FiEdit,
  FiMapPin,
  FiPhone,
  FiStar,
  FiTrash2,
  FiUser,
} from "react-icons/fi";
import useDashboard from "../../hooks/useDashboard";

const Card = ({
  restaurant,
  onDelete
}) => {
  const { refreshDashboard } = useDashboard()
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      <img
        src={restaurant?.image}
        alt={restaurant?.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-6 max-lg:p-3">

        <div className="flex justify-between">

          <div>
            <h2 className="text-xl max-lg:text-lg font-bold">
              {restaurant?.name}
            </h2>

            <p className="mt-1 text-sm text-gray-500 max-lg:text-xs">
              {restaurant?.cuisines.join(" • ")}
            </p>
          </div>

          <div className="flex items-center gap-1 font-semibold text-yellow-500">
            <FiStar />
            {restaurant?.rating}
          </div>

        </div>

        <div className="mt-6 space-y-3 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <FiMapPin />
            {restaurant?.city}, {restaurant?.state}
          </div>

          <div className="flex items-center gap-2">
            <FiUser />
            {restaurant?.ownerName}
          </div>

          <div className="flex items-center gap-2">
            <FiPhone />
            {restaurant?.mobile}
          </div>

          <div className="flex items-center gap-2">
            <FiClock />
            {restaurant?.openingTime} - {restaurant?.closingTime}
          </div>

        </div>

        <div className="mt-5 flex gap-3">

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${restaurant?.isOpen
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
              }`}
          >
            {restaurant?.isOpen ? "Open" : "Closed"}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${restaurant?.isActive
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-200 text-gray-600"
              }`}
          >
            {restaurant?.isActive ? "Active" : "Inactive"}
          </span>

        </div>

        <div className="mt-8 flex gap-4">

          <button
            onClick={() => onEdit(restaurant)}
            className="flex-1 rounded-xl bg-[#FF6B35] py-3 font-medium text-white transition hover:bg-[#e85c2d] max-lg:py-1"
          >
            <span className="flex items-center justify-center gap-2">
              <FiEdit />
              Update
            </span>
          </button>

          <button
            onClick={() => {
              onDelete(restaurant._id)
              refreshDashboard()
            }}
            className="flex-1 rounded-xl border border-red-500 py-3 font-medium text-red-500 transition hover:bg-red-50"
          >
            <span className="flex items-center justify-center gap-2">
              <FiTrash2 />
              Delete
            </span>
          </button>

        </div>

      </div>

    </div>
  );
};

export default Card;