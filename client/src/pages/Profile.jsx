import {
  FiUser,
  FiEdit2,
  FiShoppingBag,
  FiHeart,
  FiBell,
  FiFileText,
  FiShield,
  FiLogOut,
  FiTrash2,
  FiChevronRight,
  FiMap,
} from "react-icons/fi";
import Navbar from '../components/common/Navbar';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Profile = () => {
  // Later you can replace this with user data from your API/context
  const {user} = useCart();

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <Navbar />
      {/* ================= PROFILE HEADER ================= */}

      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">

          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">

            {/* Profile Image */}

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-[#FF6B35]">
              <FiUser size={45} />
            </div>

            {/* User Details */}

            <div className="mt-4 flex-1 sm:ml-6 sm:mt-0">

              <h1 className="text-2xl font-bold text-gray-900">
                {user?.userName}
              </h1>

              <p className="mt-1 text-gray-500">
                {user?.email}
              </p>

            </div>

            {/* Edit Profile */}

            <button
              className="
                mt-5 flex items-center gap-2 rounded-xl
                border border-(--primary)
                px-5 py-3
                font-medium text-(--primary)
                transition
                hover:bg-(--primary)
                hover:text-white
                sm:mt-0
                cursor-pointer
              "
            >
              <FiEdit2 size={17} />
              Edit Profile
            </button>

          </div>

        </div>
      </div>


      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">

        {/* Account */}

        <ProfileSection title="Account">

          <ProfileOption
            icon={<FiShoppingBag />}
            title="Order History"
            description="View your previous orders"
            onClick={() => navigate('/orders')}
          />

          <ProfileOption icon={<FiMap />} title='Address details' description="View your saved address"
          onClick={()=> navigate('/user/address')}/>

          <ProfileOption
            icon={<FiHeart />}
            title="Followed Shops"
            description="Restaurants and shops you follow"
            onClick={() => console.log("Followed Shops")}
          />

          <ProfileOption
            icon={<FiBell />}
            title="Notifications"
            description="Manage your notification preferences"
            onClick={() => console.log("Notifications")}
          />

        </ProfileSection>


        {/* Information */}

        <ProfileSection title="Information">

          <ProfileOption
            icon={<FiFileText />}
            title="Terms & Conditions"
            description="Read CraveCart's terms and conditions"
            onClick={() => console.log("Terms")}
          />

          <ProfileOption
            icon={<FiShield />}
            title="Privacy Policy"
            description="Learn how we protect your data"
            onClick={() => console.log("Privacy Policy")}
          />

        </ProfileSection>


        {/* Account Actions */}

        <ProfileSection title="Account Actions">

          {/* Logout */}

          <button
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/portal')
            }}
            className="
              flex w-full items-center gap-4
              px-4 py-4
              text-left
              transition
              hover:bg-gray-100
              cursor-pointer
            "
          >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <FiLogOut size={19} />
            </div>

            <div className="flex-1">

              <p className="font-medium text-gray-800">
                Logout
              </p>

              <p className="mt-0.5 text-sm text-gray-500">
                Sign out of your CraveCart account
              </p>

            </div>

            <FiChevronRight className="text-gray-400" />

          </button>


          {/* Delete Account */}

          <button
            onClick={() => {
              console.log("Delete Account");
            }}
            className="
              flex w-full items-center gap-4
              border-t border-gray-100
              px-4 py-4
              text-left
              transition
              hover:bg-red-50
              cursor-pointer
            "
          >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
              <FiTrash2 size={19} />
            </div>

            <div className="flex-1">

              <p className="font-medium text-red-500">
                Delete Account
              </p>

              <p className="mt-0.5 text-sm text-gray-500">
                Permanently delete your account and data
              </p>

            </div>

            <FiChevronRight className="text-red-300" />

          </button>

        </ProfileSection>


        {/* Footer */}

        <div className="py-8 text-center">

          <p className="text-sm text-gray-400">
            CraveCart
          </p>

          <p className="mt-1 text-xs text-gray-400">
            © 2026 CraveCart. All rights reserved.
          </p>

        </div>

      </main>

    </div>
  );
};


/* ================================================= */
/* PROFILE SECTION */
/* ================================================= */

const ProfileSection = ({ title, children }) => {
  return (
    <section className="mb-7">

      <h2 className="mb-3 px-1 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </h2>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {children}
      </div>

    </section>
  );
};


/* ================================================= */
/* PROFILE OPTION */
/* ================================================= */

const ProfileOption = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
        flex w-full items-center gap-4
        border-b border-gray-100
        px-4 py-4
        text-left
        transition
        last:border-b-0
        hover:bg-gray-100
        cursor-pointer
      "
    >

      {/* Icon */}

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#FF6B35]">
        {icon}
      </div>


      {/* Text */}

      <div className="min-w-0 flex-1">

        <p className="font-medium text-gray-900">
          {title}
        </p>

        <p className="mt-0.5 text-sm text-gray-500">
          {description}
        </p>

      </div>


      {/* Arrow */}

      <FiChevronRight className="shrink-0 text-gray-400" />

    </button>
  );
};


export default Profile;