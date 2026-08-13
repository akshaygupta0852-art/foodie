import { useEffect } from "react";
import {
  FiGrid,
  FiHome,
  FiCoffee,
  FiShoppingBag,
  FiUsers,
  FiTag,
  FiBell,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";
import { NavLink, useNavigate} from "react-router-dom";
import { getDashboardData } from "../../services/dashboardAPI";
import logo from '../../../assets/images/logo.png'
import { House, HouseHeart, Store } from "lucide-react";

const DashboardSidebar = ({ isOpen, setIsOpen }) => {
  const data = async ()=>{
    const result = await getDashboardData();
    console.log(result);
  }
  const navigate = useNavigate();
  useEffect(() => {
      data();
  }, [])
  
  const menus = [
    {
      name: "Dashboard",
      icon: <FiGrid size={20} />,
      path: "/admin",
    },
    {
      name: "Restaurants",
      icon: <Store size={20} />,
      path: "/admin/restaurants",
    },
    {
      name: "Go to Home",
      icon: <House size={20} />,
      path: "/",
    },
    {
      name: "Foods",
      icon: <FiCoffee size={20} />,
      path: "/admin/foods",
    },
    {
      name: "Orders",
      icon: <FiShoppingBag size={20} />,
      path: "/admin/orders",
    },
    {
      name: "Users",
      icon: <FiUsers size={20} />,
      path: "/admin/users",
    },
    {
      name: "Categories",
      icon: <FiTag size={20} />,
      path: "/admin/categories",
    },
    {
      name: "Notifications",
      icon: <FiBell size={20} />,
      path: "/admin/notifications",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`

          right-0
          top-0
          z-50
          flex
          sticky
          h-screen
          w-80
          max-lg:fixed
          flex-col
          bg-white
          border-r
          border-gray-200
          transition-transform
          duration-300
          lg:translate-x-0
          ${
            isOpen ? "" : "translate-x-full"
          }
        `}
      >
        {/* Logo */}

        <div className="flex h-20 items-center justify-between border-b border-gray-200 px-6">

          <div>
          <img src={logo} alt="logo" className="h-20"/>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          >
            <FiX size={22} />
          </button>

        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto p-4">

          <ul className="space-y-2">

            {menus.map((menu) => (
              <li key={menu.name}>
                <NavLink
                  to={menu.path}
                  end={menu.path === "/admin"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#FF6B35] text-white shadow"
                        : "text-gray-600 hover:bg-orange-50 hover:text-[#FF6B35]"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {menu.icon}
                  {menu.name}
                </NavLink>
              </li>
            ))}

          </ul>

        </nav>

        {/* Footer */}

        <div className="border-t border-gray-200 p-4">

          <button
            className="
              flex
              w-full
              items-center
              gap-4
              rounded-xl
              px-4
              py-3
              text-red-500
              transition
              hover:bg-red-50
            "
            onClick={()=>{
              localStorage.removeItem('Admintoken');
              navigate('/admin/portal');
            }}
          >
            <FiLogOut size={20} />
            Logout
          </button>

        </div>

      </aside>
    </>
  );
};

export default DashboardSidebar;