import { FiTag, FiTruck, FiArrowRight, FiLock } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { Navigate, useNavigate } from "react-router-dom";

function CartSummary() {

    const { cart, selected, addresses } = useCart();
    const navigate = useNavigate();
    const subtotal = cart.reduce(
        (total, item) => total + item.foodId.price * item.quantity,
        0
    );
    const selectedAdd = addresses.find((add) => add._id == selected)
    const totalItems = cart.reduce((total, item) => total + item.quantity,0)

    const deliveryFee = subtotal >= 500 ? 0 : 30;
    const packagingFee = 20;
    const total = subtotal + deliveryFee + packagingFee;


    return (
        <aside className="w-full max-w-95 rounded-2xl border border-gray-100 bg-white p-6 max-lg:max-w-full">
            <h2 className="text-2xl font-semibold text-gray-900">
                Order Summary
            </h2>

            <div className="mt-4 space-y-3">

                <div className="flex justify-between text-gray-700">
                    <span>
                        Subtotal ({totalItems} items)
                    </span>

                    <span className="font-medium text-gray-900">
                        ₹{subtotal}
                    </span>
                </div>

                <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>

                    <span className="font-medium text-gray-900">
                        {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                    </span>
                </div>

                <div className="flex justify-between text-gray-700">
                    <span>Packaging Fee</span>

                    <span className="font-medium text-gray-900">
                        ₹{packagingFee}
                    </span>
                </div>

            </div>

            <div className="my-5 border-t border-dashed border-gray-500" />

            <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-gray-900">
                    Total
                </span>

                <span className="text-2xl font-bold text-[#FF6B35]">
                    ₹{total}
                </span>
            </div>

            <div className="mt-3 rounded-xl bg-orange-50 p-2">

                <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#FF6B35]">
                        <FiTruck size={21} />
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900">
                            Delivery to
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            {selectedAdd?.houseNo}, {selectedAdd?.street}
                            <br />
                            {selectedAdd?.city} {selectedAdd?.pincode}
                        </p>

                        <button onClick={()=>{
                            navigate('/user/address')
                        }} className="mt-2 text-sm font-medium cursor-pointer text-[#FF6B35] hover:underline">
                            Change address
                        </button>
                    </div>

                </div>

            </div>

            <button
                onClick={()=>{
                    navigate('/cart/checkout')
                }}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF6B35] py-(--space-sm) text-lg font-semibold cursor-pointer text-white transition hover:bg-[#f15d28]"
            >
                Proceed to Checkout

                <FiArrowRight size={21} />
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-500">
                <FiLock size={16} />

                <span>100% Secure Checkout</span>
            </div>

        </aside>
    );
}

export default CartSummary;