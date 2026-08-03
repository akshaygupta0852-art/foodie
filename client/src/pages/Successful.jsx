import { ArrowLeft } from "lucide-react";
import {
  FiCheck,
  FiMapPin,
  FiHome,
  FiFileText,
  FiTruck,
  FiShield,
  FiHeart,
} from "react-icons/fi";
import logo from '../assets/images/logo.png'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { checkOrder } from "../routes/OrdersRoutes";
import { useEffect } from "react";
import Loader from "../components/common/Loader";
import { useState } from "react";

const OrderSuccess = () => {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [data, setdata] = useState([]);

  if (!orderId) {
    return <Navigate to='/' replace />;
  }

  useEffect(() => {
    const findOrder = async () => {
      try {
        const result = await checkOrder(orderId);
        setdata(result.data)
        setChecking(false);
      } catch (error) {
        navigate("/", { replace: true });
      }
    };

    findOrder();
  }, [orderId, navigate]);

  if (!checking) {
    return (
      <div className="min-h-screen bg-[#FFFCF8] text-gray-900">

        {/* ================= HEADER ================= */}

        <header className="border-b border-gray-100 bg-white">
          <div className="flex h-20 items-center px-(--space-md) py-(--space-md)">
            <ArrowLeft onClick={() => {
              navigate('/')
            }} className="hover:bg-gray-300 scale-130 cursor-pointer" />
            <img src={logo} className="h-25" />
          </div>
        </header>

        {/* ================= MAIN ================= */}

        <main className="max-w-full px-4 py-10 sm:px-6 lg:py-10">

          {/* SUCCESS */}

          <section className="text-center">

            {/* Check circle */}
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
                <FiCheck
                  size={38}
                  strokeWidth={3}
                  className="text-green-600"
                />
              </div>

            </div>

            <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
              Order Successful! 🎉
            </h2>

            <p className="mt-3 text-gray-500">
              Thank you for your order ❤️
            </p>

            <p className="mt-1 text-gray-500">
              Your food is being prepared and will be on its way soon.
            </p>

          </section>

          <section className="mt-8 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex flex-col items-center gap-5 sm:flex-row">

              <div className="flex-1 text-center sm:text-left">

                <p className="text-sm text-gray-500">
                  Order ID
                </p>

                <p className="mt-1 text-lg font-semibold">
                  #{orderId}
                </p>

              </div>

              <div className="hidden h-12 w-px bg-gray-200 sm:block" />

              <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
                Order Placed
              </div>
            </div>

          </section>


          {/* ================= ADDRESS ================= */}

          <section className="mt-6 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#FF6B35]">
                <FiMapPin size={23} />
              </div>

              <div>

                <h3 className="font-semibold">
                  Delivery Address
                </h3>

                <p className="mt-1 text-gray-600">
                  {data?.address?.username}
                </p>

                <p className="text-sm text-gray-500">
                  {data?.address.fullAddress}
                </p>

              </div>

            </div>

          </section>


          {/* ================= BUTTONS ================= */}

          <section className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <button onClick={() => {
              navigate('/')
            }} className="flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#FF6B35] py-4 font-semibold text-white transition hover:bg-[#f15d28]">
              <FiHome />
              Back to Home
            </button>

            <button onClick={() => {
              navigate('/orders')
            }} className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-4 font-semibold text-gray-800 transition hover:border-[#FF6B35] hover:text-[#FF6B35]">
              <FiFileText />
              View Orders
            </button>

          </section>


        </main>

      </div>
    );
  } else {
    return <Loader />
  }
};

export default OrderSuccess;