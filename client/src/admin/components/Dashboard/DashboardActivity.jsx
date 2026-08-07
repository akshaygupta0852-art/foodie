import {
  FiShoppingBag,
  FiCoffee,
  FiHome,
  FiUserPlus,
  FiEdit,
  FiTrash2,
  FiClock,
} from "react-icons/fi";

const DashboardActivity = ({ activities = [] }) => {
  
  const getActivityIcon = (type) => {
    switch (type) {
      case "restaurant":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-[#FF6B35]">
            <FiHome size={20} />
          </div>
        );

      case "food":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-600">
            <FiCoffee size={20} />
          </div>
        );

      case "order":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <FiShoppingBag size={20} />
          </div>
        );

      case "user":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-50 text-purple-600">
            <FiUserPlus size={20} />
          </div>
        );

      case "update":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
            <FiEdit size={20} />
          </div>
        );

      case "delete":
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-500">
            <FiTrash2 size={20} />
          </div>
        );

      default:
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-600">
            <FiClock size={20} />
          </div>
        );
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-gray-100 p-6">

        <h2 className="text-lg font-semibold text-gray-900">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Latest activities across your platform
        </p>

      </div>

      {/* Timeline */}

      <div className="p-6">

        {activities.length === 0 ? (

          <div className="py-10 text-center">

            <FiClock
              size={45}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-4 text-lg font-semibold">
              No Activity Yet
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Activities will appear here once your platform is in use.
            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {activities.map((activity, index) => (

              <div
                key={activity.id}
                className="relative flex gap-4"
              >

                {/* Vertical Line */}

                {index !== activities.length - 1 && (
                  <span className="absolute left-5 top-12 h-full w-px bg-gray-200"></span>
                )}

                {/* Icon */}

                {getActivityIcon(activity.type)}

                {/* Content */}

                <div className="flex-1">

                  <h4 className="font-semibold text-gray-900">
                    {activity.title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    {activity.description}
                  </p>

                  <span className="mt-2 inline-block text-xs text-gray-400">
                    {activity.time}
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default DashboardActivity;