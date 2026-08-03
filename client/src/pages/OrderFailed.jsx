import { ArrowLeft } from "lucide-react";
import {
    FiX,
    FiRefreshCw,
    FiShoppingCart,
    FiHelpCircle,
    FiShield,
    FiArrowLeft,
} from "react-icons/fi";
import logo from '../assets/images/logo.png';
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const OrderFailed = () => {
    const location = useLocation();
    if(!location.state?.message){
        return <Navigate to='/' replace />
    }
    const navigate = useNavigate();
    const order = {
        id: "CC45872",
        reason: "Payment could not be completed",
        amount: 627,
    };

    return (
        <div className="min-h-screen bg-[#FFFCF8] text-gray-900">

            {/* ================= HEADER ================= */}

            <header className="border-b border-gray-100 bg-white">
                <div className="mx-auto h-20 flex max-w-full items-center px-5 py-4">
                    <ArrowLeft onClick={()=>{
                        navigate(-1);
                    }} className="hover:bg-gray-300 scale-130 cursor-pointer" />
                    <img src={logo} className="h-30" />
                </div>
            </header>


            {/* ================= MAIN ================= */}

            <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-14">

                {/* Failed Message */}

                <section className="text-center">

                    {/* Error Icon */}
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-50">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                            <FiX
                                size={38}
                                strokeWidth={3}
                                className="text-red-500"
                            />
                        </div>

                    </div>

                    <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
                        Order Failed
                    </h2>

                    <p className="mx-auto mt-3 max-w-lg text-gray-500">
                        Unfortunately, we couldn't place your order.
                        Don't worry, you can try again.
                    </p>

                </section>

                {/* ================= REFUND INFO ================= */}

                <section className="mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">

                    <div className="flex gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                            <FiShield size={21} />
                        </div>

                        <div>

                            <h3 className="font-semibold text-gray-900">
                                Was your money deducted?
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                If your bank account was charged but the order
                                failed, don't worry. The amount will be refunded
                                automatically according to your bank's processing time.
                            </p>

                        </div>

                    </div>

                </section>


                {/* ================= WHY FAILED ================= */}

                <section className="mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">

                    <h3 className="text-xl font-bold">
                        What can you do?
                    </h3>

                    <div className="mt-5 space-y-4">

                        <Reason
                            number="1"
                            text="Check your internet connection and try again."
                        />

                        <Reason
                            number="2"
                            text="It can be the error from server, you can try again after sometime."
                        />

                        <Reason
                            number="3"
                            text="Try to connect with customer care ."
                        />

                    </div>

                </section>


                {/* ================= BUTTONS ================= */}

                <section className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    {/* Try Again */}

                    <button
                    onClick={()=>{
                        navigate('/')
                    }}
                        className="flex items-center justify-center gap-3 rounded-xl bg-[#FF6B35] py-4 font-semibold text-white transition hover:bg-[#f15d28]"
                    >
                        <ArrowLeft size={19} />
                        Back to Home
                    </button>


                    {/* Back to Cart */}

                    <button
                        onClick={()=>{
                            navigate('/cart')
                        }}
                        className="flex items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-4 font-semibold text-gray-800 transition hover:border-[#FF6B35] hover:text-[#FF6B35]"
                    >
                        <FiShoppingCart size={19} />
                        Back to Cart
                    </button>

                </section>
            </main>
        </div>
    );
};


/* ================= REASON COMPONENT ================= */

const Reason = ({ number, text }) => {
    return (
        <div className="flex items-center gap-4">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-sm font-semibold text-[#FF6B35]">
                {number}
            </div>

            <p className="text-sm text-gray-600">
                {text}
            </p>

        </div>
    );
};

export default OrderFailed;