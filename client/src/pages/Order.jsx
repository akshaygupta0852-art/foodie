import {
  FiChevronRight,
  FiPackage,
  FiCheckCircle,
  FiClock,
  FiXCircle,
  FiRefreshCw,
} from "react-icons/fi";
import Navbar from "../components/common/Navbar";
import { useEffect, useState } from "react";
import { categorisedOrders, orderHistory } from "../routes/OrdersRoutes";
import Ordercard from "../components/Order/Ordercard";
import Loader from '../components/common/Loader'

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleOrderHistory = async () => {
    const data = await orderHistory();
    if (data.type === 'Failed') {
      return console.log(data.message);
    }
    setOrders(data.orders);
    setLoading(false)
  }
  useEffect(() => {
    handleOrderHistory();
  }, []);

  const handleCategorySearch = async (type) =>{
    const data = await categorisedOrders(type);
    if(data.type == 'Done'){
      setOrders(data.orders)
    }
  }

  if(!loading){return (
    <div className="min-h-screen bg-[#FFFfff]">

      {/* ================= HEADER ================= */}

      <header className="border-b border-gray-100 bg-white">
        <Navbar />
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">

          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Order History
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              View and manage your previous orders
            </p>
          </div>
        </div>
      </header>


      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-5xl px-4 py-7 sm:px-6">

        {/* Search + Filter */}

        <div className="mb-7 flex flex-col gap-3 sm:flex-row">
          {/* Filter */}

          <select
            onChange={(e)=> {
              const target = e.target.value
              handleCategorySearch(target)
            }}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#FF6B35]"
          >
            <option>All Orders</option>
            <option>Delivered</option>
            <option>Cancelled</option>
            <option>In Progress</option>
          </select>

        </div>


        {/* ================= ORDERS ================= */}

        <div className="space-y-5">

          {orders?.map((ord) => (
            <Ordercard key={ord._id} order={ord} />
          ))}

        </div>

        {/* ================= EMPTY MESSAGE ================= */}

        {orders?.length === 0 && (
          <div className="rounded-2xl border border-gray-100 bg-white py-16 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-[#FF6B35]">
              <FiPackage size={28} />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              No orders found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              You haven't placed any orders yet.
            </p>

          </div>
        )}

      </main>

    </div>
  );}
  return <Loader />
};
export default OrderHistory;