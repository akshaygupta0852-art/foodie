import { changeOrderStatus } from "../../services/dashboardAPI";

const checkOrderStatus = (st) => {
    const styles = {
        placed: "bg-amber-100 text-amber-700 border-amber-200",
        confirmed: "bg-blue-100 text-blue-700 border-blue-200",
        preparing: "bg-purple-100 text-purple-700 border-purple-200",
        "out-for-delivery": "bg-indigo-100 text-indigo-700 border-indigo-200",
        delivered: "bg-green-100 text-green-700 border-green-200",
        cancelled: "bg-red-100 text-red-700 border-red-200",
    };

    return (
        <span
            className={`
                px-3 py-1.5
                max-lg:px-2
                rounded-full
                border
                text-sm
                font-medium
                capitalize
                whitespace-nowrap
                ${styles[st] || "bg-gray-100 text-gray-600 border-gray-200"}
            `}
        >
            {st?.replaceAll("-", " ")}
        </span>
    );
};


const getOrderActions = (id, status) => {
    const primaryButton =
        "flex-1 lg:flex-none lg:w-44 py-2.5 px-5 rounded-xl text-sm font-medium text-white bg-(--primary-dark) hover:opacity-90 active:scale-[0.98] transition-all duration-150";

    const secondaryButton =
        "flex-1 lg:flex-none lg:w-32 py-2.5 px-5 rounded-xl text-sm font-medium text-(--primary-dark) border border-(--primary) hover:bg-orange-50 active:scale-[0.98] transition-all duration-150";

    switch (status) {

        case "placed":
            return (
                <>
                    <button
                        onClick={() => {
                            changeOrderStatus(order?._id, "confirmed")
                        }}
                        className={primaryButton}
                    >
                        Confirm Order
                    </button>

                    <button
                        onClick={() => {
                            changeOrderStatus(order?._id, "cancelled")
                        }}
                        className={secondaryButton}
                    >
                        Cancel
                    </button>
                </>
            );

        case "confirmed":
            return (
                <button
                    onClick={() => {
                        changeOrderStatus(order?._id, "preparing")

                    }}
                    className={primaryButton}
                >
                    Start Preparing
                </button>
            );

        case "preparing":
            return (
                <button
                    onClick={() => {
                        changeOrderStatus(order?._id, "out-for-delivery")
                    }}
                    className={primaryButton}
                >
                    Out for Delivery
                </button>
            );

        case "out-for-delivery":
            return (
                <button
                    onClick={() => {
                        changeOrderStatus(order?._id, "delivered")
                    }}
                    className={primaryButton}
                >
                    Mark Delivered
                </button>
            );

        case "delivered":
            return (
                <span className="text-sm font-medium text-green-600">
                    ✓ Order Delivered
                </span>
            );

        case "cancelled":
            return (
                <span className="text-sm font-medium text-red-500">
                    Order Cancelled
                </span>
            );

        default:
            return null;
    }
};


const OrderCard = ({ order }) => {

    const formatDate = (date) => {
        if (!date) return "";

        return new Date(date).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    return (
        <div className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            shadow-sm
            hover:shadow-md
            transition-shadow
            duration-200
            overflow-hidden
        ">

            {/* ================= HEADER ================= */}

            <div className="
                px-5
                py-4
                border-b
                border-gray-200
                flex
                items-center
                justify-between
                gap-4
                max-md:flex-col
                max-md:items-start
            ">

                <div>

                    <h2 className="
                        text-lg
                        font-semibold
                        text-gray-800
                    ">
                        {order?.restaurant?.name}
                    </h2>

                    <div className="
                        flex
                        items-center
                        gap-2
                        mt-1
                        text-sm
                        text-gray-500
                    ">
                        <span>Order</span>

                        <span className="font-medium text-gray-700">
                            #{order?._id}
                        </span>
                    </div>

                </div>

                <div className="
                    flex
                    flex-col
                    items-end
                    gap-2
                    max-md:items-start
                ">

                    {checkOrderStatus(order?.orderStatus)}

                    <span className="text-xs text-gray-400">
                        {formatDate(order?.createdAt)}
                    </span>

                </div>

            </div>


            {/* ================= CUSTOMER ================= */}

            <div className="px-5 py-4">

                <div className="
                    bg-gray-50
                    rounded-xl
                    p-4
                    border
                    border-gray-100
                ">

                    <div className="flex items-start gap-3">

                        <div className="
                            w-10
                            h-10
                            rounded-full
                            bg-orange-100
                            text-orange-600
                            flex
                            items-center
                            justify-center
                            font-semibold
                            shrink-0
                        ">
                            {order?.address?.username?.charAt(0)}
                        </div>

                        <div className="min-w-0">

                            <h3 className="
                                font-semibold
                                text-gray-800
                            ">
                                {order?.address?.username}
                            </h3>

                            <p className="
                                text-sm
                                text-gray-500
                                mt-0.5
                            ">
                                {order?.address?.mobile}
                            </p>

                            <p className="
                                text-sm
                                text-gray-600
                                mt-2
                                leading-relaxed
                            ">
                                {order?.address?.fullAddress}
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* ================= ITEMS ================= */}

            <div className="px-5">

                <div className="
                    border
                    border-gray-200
                    rounded-xl
                    overflow-hidden
                ">

                    {/* Desktop Header */}

                    <div className="
                        hidden
                        md:grid
                        grid-cols-[50px_1fr_100px_100px_100px]
                        bg-gray-50
                        px-4
                        py-3
                        text-xs
                        font-semibold
                        text-gray-500
                        uppercase
                    ">
                        <span>#</span>
                        <span>Item</span>
                        <span>Qty</span>
                        <span>Price</span>
                        <span>Total</span>
                    </div>


                    {order?.items?.map((item, idx) => (

                        <div
                            key={idx}
                            className="
                                grid
                                grid-cols-[40px_1fr_70px_80px_90px]
                                max-md:grid-cols-[30px_1fr_auto]
                                items-center
                                px-4
                                py-3
                                border-t
                                border-gray-100
                                text-sm
                            "
                        >

                            <span className="text-gray-400">
                                {idx + 1}
                            </span>

                            <div>

                                <p className="
                                    font-medium
                                    text-gray-800
                                ">
                                    {item?.name}
                                </p>

                                <p className="
                                    text-xs
                                    text-gray-400
                                    mt-0.5
                                ">
                                    ₹{item?.price} each
                                </p>

                            </div>

                            <span className="
                                text-gray-600
                                text-center
                            ">
                                ×{item?.quantity}
                            </span>

                            <span className="
                                text-gray-600
                                max-md:hidden
                            ">
                                ₹{item?.price}
                            </span>

                            <span className="
                                font-medium
                                text-gray-800
                                text-right
                            ">
                                ₹{item?.price * item?.quantity}
                            </span>

                        </div>

                    ))}

                </div>

            </div>


            {/* ================= TOTAL ================= */}

            <div className="
                px-5
                py-4
                flex
                justify-end
            ">

                <div className="
                    w-64
                    space-y-2
                ">

                    <div className="
                        flex
                        justify-between
                        text-sm
                        text-gray-500
                    ">
                        <span>Items</span>

                        <span>
                            {order?.items?.reduce(
                                (total, item) =>
                                    total + item.quantity,
                                0
                            )}
                        </span>
                    </div>

                    <div className="
                        h-px
                        bg-gray-200
                    "/>

                    <div className="
                        flex
                        justify-between
                        items-center
                    ">
                        <span className="
                            font-semibold
                            text-gray-800
                        ">
                            Total Amount
                        </span>

                        <span className="
                            text-xl
                            font-bold
                            text-(--primary-dark)
                        ">
                            ₹{order?.totalPrice || order?.totalAmount}
                        </span>
                    </div>

                </div>

            </div>


            {/* ================= ACTIONS ================= */}

            <div className="
                px-5
                py-4
                bg-gray-50
                border-t
                border-gray-200
                flex
                justify-end
                gap-3
                max-md:justify-stretch
            ">

                {getOrderActions(order?._id, order?.orderStatus)}

            </div>

        </div>
    );
};

export default OrderCard;