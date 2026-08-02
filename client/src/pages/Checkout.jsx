import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { FaLeftLong } from "react-icons/fa6";
import {
    FiHome,
    FiPlus,
    FiMapPin,
    FiCreditCard,
    FiArrowRight,
    FiLock,
    FiTruck,
    FiShield,
    FiHeadphones,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AddressCard from '../components/Address/AddressCard'
import Foodcard from "../components/cheeckout/Foodcard";

const Checkout = () => {
    const [selectedAddress, setSelectedAddress] = useState("home");
    const [paymentMethod, setPaymentMethod] = useState("upi");
    const { cart, selected, setSelected } = useCart();
    const { addresses } = useCart();

    const subtotal = cart.reduce(
        (total, item) => total + item?.foodId?.price * item?.quantity,
        0
    );

    const totalItems = cart.reduce((total, item) => total + item?.quantity, 0);
    const deliveryFee = subtotal >= 500 ? 0 : 30;
    const packagingFee = 20;

    const total = subtotal + deliveryFee + packagingFee;
    const navigation = useNavigate()
    return (
        <div className="min-h-screen bg-[#FFFCF8] text-gray-900">

            {/* ================= HEADER ================= */}

            <header className="border-b border-gray-100 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                    <div className="flex h-10 items-center">
                        <ArrowLeft onClick={() => {
                            navigation('/cart')
                        }}
                            className='hover:bg-gray-300 rounded-full cursor-pointer'
                        />
                        <img src="../src/assets/images/logo.png" className="h-30" />
                    </div>

                    {/* Secure */}
                    <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
                        <FiLock className="text-[#FF6B35]" />
                        <span>100% Secure Checkout</span>
                    </div>

                </div>
            </header>

            {/* ================= MAIN ================= */}

            <main className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_430px]">

                    {/* ================================================= */
                    /* LEFT SECTION */
                    /* ================================================= */}

                    <section className="space-y-3">

                        {/* Delivery Address */}

                        <div className="rounded-2xl border h-120 overflow-auto border-gray-100 bg-white p-3 shadow-sm sm:p-4">

                            <h2 className="mb-5 text-xl font-bold sm:text-2xl">
                                Delivery Details
                            </h2>
                            {addresses?.map((address) => {
                                return <AddressCard key={address._id} address={address} selected={selected} setSelected={setSelected} />
                            })}

                            <button onClick={()=>{
                                navigation('/user/address')
                            }} className="mt-4 cursor-pointer flex w-full items-center gap-3 rounded-xl border border-dashed border-[#FF6B35] px-5 py-4 text-left font-medium text-[#FF6B35] transition hover:bg-orange-50">
                                <FiPlus size={20} />
                                Add New Address
                            </button>

                        </div>

                        {/* Delivery Instructions */}

                        <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4">

                            <h2 className="text-xl font-bold">
                                Delivery Instructions{" "}
                                <span className="text-sm font-normal text-gray-400">
                                    (Optional)
                                </span>
                            </h2>

                            <textarea
                                placeholder="Any special instructions for delivery..."
                                maxLength={120}
                                className="mt-5 h-24 w-full resize-none rounded-xl border border-gray-200 bg-[#FFFCF8] p-4 outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-orange-100"
                            />

                        </div>


                        {/* Payment Methods */}

                        <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4">

                            <h2 className="text-xl font-bold sm:text-2xl">
                                Payment Methods
                            </h2>

                            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

                                <PaymentOption
                                    value="upi"
                                    selected={paymentMethod}
                                    setSelected={setPaymentMethod}
                                    title="UPI"
                                    description="Pay with any UPI app"
                                    icon="UPI"
                                />

                                <PaymentOption
                                    value="card"
                                    selected={paymentMethod}
                                    setSelected={setPaymentMethod}
                                    title="Credit / Debit Card"
                                    description="Visa, MasterCard, RuPay"
                                    icon={<FiCreditCard />}
                                />

                                <PaymentOption
                                    value="paytm"
                                    selected={paymentMethod}
                                    setSelected={setPaymentMethod}
                                    title="Paytm"
                                    description="Pay easily with Paytm"
                                    icon="Paytm"
                                />

                                <PaymentOption
                                    value="cod"
                                    selected={paymentMethod}
                                    setSelected={setPaymentMethod}
                                    title="Cash on Delivery"
                                    description="Pay when you receive"
                                    icon="💵"
                                />

                            </div>

                            {/* Secure Payment */}

                            <div className="mt-6 flex items-center justify-center gap-2 border-t border-gray-100 pt-5 text-sm text-gray-500">
                                <FiLock />
                                Your payment information is 100% secure
                            </div>

                        </div>

                        {/* Mobile Total */}

                        <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between lg:hidden">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Total Amount
                                </p>

                                <p className="text-2xl font-bold text-[#FF6B35]">
                                    ₹{total}
                                </p>
                            </div>

                            <button className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#FF6B35] py-4 font-semibold text-white transition hover:bg-[#f15d28] sm:max-w-xs">
                                Place Order
                                <FiArrowRight />
                            </button>

                        </div>

                    </section>


                    {/* ================================================= */}
                    {/* RIGHT SECTION */}
                    {/* ================================================= */}

                    <aside className="h-fit lg:sticky lg:top-5">

                        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">

                            <h2 className="text-xl font-bold sm:text-2xl">
                                Order Summary
                            </h2>


                            {/* Items */}

                            <div className="mt-5 h-70 overflow-auto space-y-4">
                                {cart.map((food) => {
                                    return <Foodcard key={food._id} food={food} />
                                })}
                            </div>


                            {/* Price */}

                            <div className="mt-5 space-y-4 text-sm">

                                <div className="flex justify-between">
                                    <span>Subtotal ({totalItems} items)</span>
                                    <span>₹{subtotal}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Delivery Fee</span>
                                    <span>₹{deliveryFee}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Packaging Fee</span>
                                    <span>₹{packagingFee}</span>
                                </div>

                            </div>


                            {/* Total */}

                            <div className="my-5 border-t border-dashed border-gray-300 pt-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold">
                                        Total Amount
                                    </span>
                                    <span className="text-2xl font-bold text-[#FF6B35]">
                                        ₹{total}
                                    </span>
                                </div>
                            </div>

                            {/* Desktop Button */}

                            <button className="mt-5 hidden w-full items-center justify-center gap-3 rounded-xl bg-[#FF6B35] py-2 text-lg font-semibold text-white transition hover:bg-[#f15d28] cursor-pointer lg:flex">
                                Place Order
                                <FiArrowRight size={20} />
                            </button>

                        </div>


                        {/* Benefits */}

                        <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">

                            <Benefit
                                icon={<FiTruck />}
                                title="Fast Delivery"
                            />

                            <Benefit
                                icon={<FiShield />}
                                title="Secure Payment"
                            />

                            <Benefit
                                icon={<span>★</span>}
                                title="Best Quality"
                            />

                            <Benefit
                                icon={<FiHeadphones />}
                                title="24/7 Support"
                            />

                        </div>

                    </aside>

                </div>

            </main>
        </div>
    );
};


/* ================================================= */
/* COMPONENTS */
/* ================================================= */


const PaymentOption = ({
    value,
    selected,
    setSelected,
    title,
    description,
    icon,
}) => {
    const active = selected === value;

    return (
        <button
            onClick={() => setSelected(value)}
            className={`rounded-xl border-2 p-4 text-left transition ${active
                ? "border-[#FF6B35] bg-orange-50/40"
                : "border-gray-200 hover:border-orange-200"
                }`}
        >

            <div className="flex items-start gap-3">

                {/* Radio */}

                <div
                    className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${active
                        ? "border-[#FF6B35]"
                        : "border-gray-300"
                        }`}
                >
                    {active && (
                        <div className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />
                    )}
                </div>

                <div className="min-w-0">

                    <div className="flex items-center gap-2 font-semibold">
                        <span className="text-[#FF6B35]">
                            {icon}
                        </span>

                        <span>{title}</span>
                    </div>

                    <p className="mt-1 text-xs text-gray-500">
                        {description}
                    </p>

                </div>

            </div>

        </button>
    );
};


const Benefit = ({ icon, title }) => {
    return (
        <div className="flex flex-col items-center gap-2 py-2 text-center">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-[#FF6B35]">
                {icon}
            </div>

            <span className="text-xs font-medium text-gray-600">
                {title}
            </span>

        </div>
    );
};

export default Checkout;