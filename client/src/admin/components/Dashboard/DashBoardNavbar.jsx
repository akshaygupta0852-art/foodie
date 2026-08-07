import {
  FiMenu,
  FiBell,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";
import logo from '../../../assets/images/logo.png'

const DashboardNavbar = ({
  setIsOpen
}) => {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6">

      {/* Left */}
      <img src={logo} alt="logo" className="h-30"/>
      <div className="flex items-center gap-4">

        {/* Mobile Menu */}

        <button
          onClick={()=>{
            setIsOpen(true)
          }}
          className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
        >
          <FiMenu size={24} />
        </button>
      </div>

    </header>
  );
};

export default DashboardNavbar;