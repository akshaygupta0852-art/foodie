import logo from '../../assets/images/logo.png'
import { CircleUser, MapPin, Plus, ShoppingCart, User } from 'lucide-react'
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce(
    (total, item) => { return total + item?.quantity },
    0
  )
  const navClass = ({ isActive }) =>
    `px-2 box-border flex items-center justify-center h-full
   text-center transition-all ease-in duration-150
   cursor-pointer hover:text-(--primary) hover:border-(--primary)
   ${isActive ? "navLiActive" : ""}`;

  return (
    <div className='relative w-screen h-(--navbar-height) flex items-center overflow-hidden justify-between px-(--space-xl) max-lg:flex-col max-lg:h-fit max-lg:px-(--space-sm)'>
      <img src={logo} className='h-full scale-150 max-lg:h-15 max-lg:self-start' />
      <ul className='h-full text-lg flex gap-1 max-lg:text-sm'>
        <li className="h-full">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
        </li>

        <li className="h-full">
          <NavLink to="/restaurants" className={navClass}>
            Restaurants
          </NavLink>
        </li>

        <li className="h-full">
          <NavLink to="/categories" className={navClass}>
            Categories
          </NavLink>
        </li>

        <li className="h-full">
          <NavLink to="/offers" className={navClass}>
            Offers
          </NavLink>
        </li>

        <li className="h-full">
          <NavLink to="/orders" className={navClass}>
            Orders
          </NavLink>
        </li>
      </ul>
      <div className='flex gap-15 items-center top-3 right-0 max-lg:absolute max-lg:gap-3'>
        <div className='flex'>
          <MapPin color='var(--primary)' className='max-lg:scale-60' size="30px" />
          <select defaultValue="Panna (M.P.)" className='font-bold outline-0 border-0 max-lg:text-sm'>
            <option value="Panna (M.P.)">Panna (M.P.)</option>
          </select>
        </div>
        <Link to="/cart">
          <div className="relative inline-block">
            <ShoppingCart
              size={30}
              className="cursor-pointer"
            />

            <span className="absolute -right-2 -top-2 z-50 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
              {itemCount}
            </span>
          </div>
        </Link>
        <Link to='/userprofile'><User heigh="60px" width="30px" size="30px" className='cursor-pointer max-lg:scale-60' /></Link>
      </div>
    </div>
  )
}

export default Navbar