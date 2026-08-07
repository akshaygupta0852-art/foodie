import {
  FiUsers,
  FiHome,
  FiShoppingBag,
  FiDollarSign,
  FiCoffee,
  FiGrid,
} from "react-icons/fi";

import StatCard from "./StatCard";
import useDashboard from "../../hooks/useDashboard";

const DashboardStats = ({ stats }) => {
  const {restaurants, orders, foods} = useDashboard();
  const dashboardStats = [
    {
      title: "Total Users",
      value: restaurants?.reduce((total, res) => total+res.followersCount,0),
      icon: <FiUsers size={28} />,
      color: "blue",
      change: "+12%",
      changeType: "increase",
    },
    {
      title: "Restaurants",
      value: restaurants?.length,
      icon: <FiHome size={28} />,
      color: "orange",
      change: "+8%",
      changeType: "increase",
    },
    {
      title: "Food Items",
      value: foods?.length,
      icon: <FiCoffee size={28} />,
      color: "purple",
      change: "+15%",
      changeType: "increase",
    },
    {
      title: "Orders",
      value: orders?.length,
      icon: <FiShoppingBag size={28} />,
      color: "green",
      change: "+18%",
      changeType: "increase",
    },
    {
      title: "Revenue",
      value: `₹${orders?.reduce((total, curr)=> total + curr.totalPrice, 0)}`,
      icon: <FiDollarSign size={28} />,
      color: "green",
      change: "+9%",
      changeType: "increase",
    },
    {
      title: "Categories",
      value: stats?.categories ?? 0,
      icon: <FiGrid size={28} />,
      color: "orange",
      change: "+3%",
      changeType: "increase",
    },
  ];

  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {dashboardStats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
            change={item.change}
            changeType={item.changeType}
          />
        ))}
      </div>
    </section>
  );
};

export default DashboardStats;