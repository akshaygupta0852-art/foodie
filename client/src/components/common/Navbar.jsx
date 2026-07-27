import React from 'react'
import { CircleUser, MapPin, Plus, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='relative w-screen h-(--navbar-height) flex items-center overflow-hidden justify-between px-(--space-xl) max-lg:flex-col max-lg:h-fit max-lg:px-(--space-sm)'>
      <img src="./src/assets/images/logo.png" className='h-full scale-150 max-lg:h-15 max-lg:self-start' />
      <ul className='h-full text-lg flex gap-1 max-lg:text-sm'>
        <Link to='/'><li className='px-2 box-border border-b-4 border-white flex items-center justify-center h-full text-center transition-all ease-in duration-150 hover:text-(--primary) cursor-pointer hover:border-(--primary)'>Home</li></Link>
        <Link to='/restaurants'><li className='px-2 box-border border-b-4 border-white flex items-center justify-center h-full text-center transition-all ease-in duration-150 hover:text-(--primary) cursor-pointer hover:border-(--primary)'>Restaurants</li></Link>
        <Link to='/Categories'><li className='px-2 box-border border-b-4 border-white flex items-center justify-center h-full text-center transition-all ease-in duration-150 hover:text-(--primary) cursor-pointer hover:border-(--primary)'>Categories</li></Link>
        <Link to='/offers'><li className='px-2 box-border border-b-4 border-white flex items-center justify-center h-full text-center transition-all ease-in duration-150 hover:text-(--primary) cursor-pointer hover:border-(--primary)'>Offers</li></Link>
        <Link to='/orders'><li className='px-2 box-border border-b-4 border-white flex items-center justify-center h-full text-center transition-all ease-in duration-150 hover:text-(--primary) cursor-pointer hover:border-(--primary)'>Orders</li></Link>
      </ul>
      <div className='flex gap-15 items-center top-3 right-0 max-lg:absolute max-lg:gap-3'>
        <div className='flex'>
          <MapPin color='var(--primary)' className='max-lg:scale-60' size="30px" />
          <select defaultValue="Panna (M.P.)" className='font-bold outline-0 border-0 max-lg:text-sm'>
            <option value="Panna (M.P.)">Panna (M.P.)</option>
          </select>
        </div>
        <Link to='/cart'><ShoppingCart height="30px" width="30px" size="30px" className='cursor-pointer max-lg:scale-60' /></Link>
        <Link to='/userprofile'><User heigh="60px" width="30px" size="30px" className='cursor-pointer max-lg:scale-60' /></Link>
      </div>
    </div>
  )
}

export default Navbar