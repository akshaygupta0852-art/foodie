import { FiCheckCircle, FiChevronRight, FiClock, FiRefreshCw, FiXCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'
import { cancelOrder } from "../../routes/OrdersRoutes";

const Ordercard = ({ order }) => {
    const navigate = useNavigate();
    return (
        <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

            {/* ================= TOP ================= */}

            <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                    <div className="flex flex-wrap gap-3">

                        <h2 className="font-bold text-gray-900">
                            Order #{order._id}
                        </h2>

                        <span
                            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${status.className}`}
                        >
                            
                            {order.orderStatus}
                        </span>

                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric"
                        })} •     {new Date(order.createdAt).toLocaleTimeString("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true
                        })}

                    </p>

                </div>


                <div className="text-left sm:text-right">

                    <p className="text-xs text-gray-500">
                        Total Amount
                    </p>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                        ₹{order.totalPrice}
                    </p>

                </div>

            </div>


            {/* ================= ITEMS ================= */}

            <div className="p-5">

                <div className="flex items-center justify-between">

                    <div>
                        <p className="text-sm font-semibold text-gray-900">
                            {order.restaurant.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                            {order.items.length} item
                            {order.items.length > 1 ? "s" : ""}
                        </p>
                    </div>

                    <button onClick={()=>{
                        navigate(`/restaurants/${order.restaurant.restaurantId}`)
                    }} className="text-sm cursor-pointer font-medium text-(--primary) hover:underline">
                        View Restaurant
                    </button>

                </div>


                {/* Food Items */}

                <div className="mt-4 space-y-3">

                    {order.items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3"
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-14 w-14 shrink-0 rounded-xl object-cover"
                            />

                            <div className="min-w-0 flex-1">

                                <p className="truncate text-sm font-medium text-gray-900">
                                    {item.name}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    Qty: {item.quantity}
                                </p>

                            </div>

                            <p className="text-sm font-semibold">
                                ₹{item.price * item.quantity}
                            </p>

                        </div>
                    ))}

                </div>


                {/* ================= ACTIONS ================= */}

                <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-between">
                    <div className="flex flex-col">
                        <span className="max-lg:text-sm">{order.address.username} {order.address.mobile}</span>
                        <span className="text-sm text-gray-500 max-lg:text-xs">{order.address.label}- {order.address.fullAddress}</span>
                    </div>

                    {order.orderStatus === "Delivered" && (
                        <>
                            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-[#FF6B35] hover:text-[#FF6B35]">
                                <FiRefreshCw size={16} />
                                Reorder
                            </button>

                            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#FF6B35] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#f15d28]">
                                View Details
                                <FiChevronRight size={16} />
                            </button>
                        </>
                    )}

                    {/* {order.orderStatus === "cancelled" && (
                        <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-[#FF6B35] hover:text-[#FF6B35]">
                            <FiRefreshCw size={16} />
                            Order Again
                        </button>
                    )} */}


                    {order.orderStatus === "placed" && (
                        <button
                        onClick={()=>{cancelOrder(order._id)}}
                        className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium cursor-pointer transition text-white bg-(--primary) hover:bg-(--primary-dark)">
                            <FiXCircle size={16}  />
                            Cancel
                        </button>
                    )}

                </div>

            </div>

        </article>
    )
}

export default Ordercard