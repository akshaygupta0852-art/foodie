import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiXCircle,
} from "react-icons/fi";

const RecentOrders = ({ orders = [] }) => {
  const getStatus = (status) => {
    switch (status) {
      case "Delivered":
        return {
          icon: <FiCheckCircle />,
          className: "bg-green-100 text-green-700",
        };

      case "Pending":
        return {
          icon: <FiClock />,
          className: "bg-yellow-100 text-yellow-700",
        };

      case "Cancelled":
        return {
          icon: <FiXCircle />,
          className: "bg-red-100 text-red-700",
        };

      default:
        return {
          icon: <FiClock />,
          className: "bg-gray-100 text-gray-600",
        };
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-100 p-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Latest customer orders
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-[#FF6B35] hover:underline">
          View All
          <FiArrowRight />
        </button>

      </div>

      {/* Desktop Table */}

      <div className="hidden overflow-x-auto lg:block">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr className="text-left text-sm text-gray-600">

              <th className="px-6 py-4">Order ID</th>

              <th className="px-6 py-4">Customer</th>

              <th className="px-6 py-4">Restaurant</th>

              <th className="px-6 py-4">Amount</th>

              <th className="px-6 py-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => {

              const status = getStatus(order.status);

              return (
                <tr
                  key={order.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >

                  <td className="px-6 py-4 font-medium">
                    #{order.id}
                  </td>

                  <td className="px-6 py-4">
                    {order.customer}
                  </td>

                  <td className="px-6 py-4">
                    {order.restaurant}
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    ₹{order.amount}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${status.className}`}
                    >
                      {status.icon}
                      {order.status}
                    </span>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="space-y-4 p-5 lg:hidden">

        {orders.map((order) => {

          const status = getStatus(order.status);

          return (
            <div
              key={order.id}
              className="rounded-xl border border-gray-200 p-4"
            >

              <div className="flex items-center justify-between">

                <h3 className="font-semibold">
                  #{order.id}
                </h3>

                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${status.className}`}
                >
                  {status.icon}
                  {order.status}
                </span>

              </div>

              <div className="mt-3 space-y-1 text-sm text-gray-600">

                <p>
                  <span className="font-medium">Customer:</span>{" "}
                  {order.customer}
                </p>

                <p>
                  <span className="font-medium">Restaurant:</span>{" "}
                  {order.restaurant}
                </p>

                <p>
                  <span className="font-medium">Amount:</span>{" "}
                  ₹{order.amount}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default RecentOrders;