import { Store } from "lucide-react";
import { FaBurger } from "react-icons/fa6";
import {
    FiPlusCircle,
    FiCoffee,
    FiShoppingBag,
    FiUsers,
    FiGrid,
    FiArrowRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
    const navigate = useNavigate();

    const actions = [
        {
            title: "Add Restaurant",
            description: "Create a new restaurant",
            icon: <FiPlusCircle size={26} />,
            color: "bg-orange-50 text-[#FF6B35]",
            onClick: () => navigate("/admin/restaurants/add"),
        },
        {
            title: "Manage Shops",
            description: "View all shops",
            icon: <Store size={26} />,
            color: "bg-red-50 text-red-600",
            onClick: () => navigate("/admin/restaurants"),
        },
        {
            title: "Add Food",
            description: "Create food items",
            icon: <FiCoffee size={26} />,
            color: "bg-green-50 text-green-600",
            onClick: () => navigate("/admin/foods/add"),
        },
        {
            title: "Manage Foods",
            description: "View all foods",
            icon: <FaBurger size={26} />,
            color: "bg-pink-50 text-pink-600",
            onClick: () => navigate("/admin/foods"),
        },
        {
            title: "Manage Orders",
            description: "Track customer orders",
            icon: <FiShoppingBag size={26} />,
            color: "bg-blue-50 text-blue-600",
            onClick: () => navigate("/admin/orders"),
        },
        {
            title: "Manage Users",
            description: "View all customers",
            icon: <FiUsers size={26} />,
            color: "bg-purple-50 text-purple-600",
            onClick: () => navigate("/admin/users"),
        },


    ];

    return (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">

            {/* Header */}

            <div className="border-b border-gray-100 p-6">

                <h2 className="text-lg font-semibold text-gray-900">
                    Quick Actions
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Frequently used admin actions
                </p>

            </div>

            {/* Actions */}

            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">

                {actions.map((action) => (

                    <button
                        key={action.title}
                        onClick={action.onClick}
                        className="
              group
              rounded-xl
              border
              border-gray-200
              p-5
              text-left
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#FF6B35]
              hover:shadow-md
            "
                    >

                        <div
                            className={`flex h-14 w-14 items-center justify-center rounded-xl ${action.color}`}
                        >
                            {action.icon}
                        </div>

                        <h3 className="mt-4 text-lg font-semibold text-gray-900">
                            {action.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            {action.description}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#FF6B35]">
                            Open
                            <FiArrowRight className="transition group-hover:translate-x-1" />
                        </div>

                    </button>

                ))}

            </div>

        </div>
    );
};

export default QuickActions;