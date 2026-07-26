import React from 'react'
import { CircleUser, MapPin, Plus, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-(--navbar-height) flex items-center overflow-hidden justify-between px-(--space-xl)'>
      <img src="./src/assets/images/logo.png" className='h-full scale-150' />
      <ul className='h-full flex gap-1'>
        <Link to='/'><li className='px-2 text-lg box-border border-b-4 border-white flex items-center justify-center h-full text-center transition-all ease-in duration-150 hover:text-(--primary) cursor-pointer hover:border-(--primary)'>Home</li></Link>
        <Link to='/restaurants'><li className='px-2 text-lg box-border border-b-4 border-white flex items-center justify-center h-full text-center transition-all ease-in duration-150 hover:text-(--primary) cursor-pointer hover:border-(--primary)'>Restaurants</li></Link>
        <Link to='/Categories'><li className='px-2 text-lg box-border border-b-4 border-white flex items-center justify-center h-full text-center transition-all ease-in duration-150 hover:text-(--primary) cursor-pointer hover:border-(--primary)'>Categories</li></Link>
        <Link to='/offers'><li className='px-2 text-lg box-border border-b-4 border-white flex items-center justify-center h-full text-center transition-all ease-in duration-150 hover:text-(--primary) cursor-pointer hover:border-(--primary)'>Offers</li></Link>
        <Link to='/orders'><li className='px-2 text-lg box-border border-b-4 border-white flex items-center justify-center h-full text-center transition-all ease-in duration-150 hover:text-(--primary) cursor-pointer hover:border-(--primary)'>Orders</li></Link>
      </ul>
      <div className='flex gap-15 items-center'>
        <div className='flex'>
          <MapPin color='var(--primary)' />
          <select defaultValue="Panna (M.P.)" className='font-bold outline-0 border-0'>
            <option value="Panna (M.P.)">Panna (M.P.)</option>
          </select>
        </div>
        <Link to='/cart'><ShoppingCart height="30px" width="30px" size="30px" className='cursor-pointer' /></Link>
        <Link to='/userprofile'><User heigh="60px" width="30px" size="30px" className='cursor-pointer' /></Link>
      </div>
    </div>
  )
}

export default Navbar