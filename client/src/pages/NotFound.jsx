import { ChevronRight, Home, Tag, UtensilsCrossed } from 'lucide-react'
import { FaBurger } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen w-screen fixed top-0 z-10 flex flex-col justify-center items-center gap-1 bg-white py-(--space-sm)'>
      <span className='text-6xl text-(--primary-dark) font-black'>404</span>
      <span className='text-2xl font-bold'>Oops! <span className='text-(--primary-dark)'>Page not found</span></span>
      <p>Looks like you've wandered off the meny. <br />
        The page you're looking doesn't exist.
      </p>
      <button className='mt-(--space-sm) bg-(--primary) text-white px-(--space-lg) py-(--space-sm) rounded-full text-lg font-semibold'><Link to='/' className='flex items-center gap-2'><Home /> Go to Home</Link></button>
      <img className='h-60 max-lg:h-50' src='./src/assets/images/notfound.png' />

      <span className='font-bold text-xl max-md:hidden'>You can try these</span>
      <div className='flex gap-10 max-md:hidden'>
        <Link to='/restaurants'>
          <div className='flex cursor-pointer bg-[#ffe8dd] px-(--space-md) py-(--space-sm) rounded-2xl w-45 justify-center'>
            <div className='flex items-center gap-4'>
              <UtensilsCrossed size="30px" />
              <div className='flex flex-col leading-5'>
                <span>Browse</span>
                <span>Restaurant</span>
                <ChevronRight className='self-end' />
              </div>
            </div>
          </div>
        </Link>
        <Link to='/restaurants'>
          <div className='flex cursor-pointer bg-[#ffe8dd] px-(--space-md) py-(--space-sm) rounded-2xl w-45 justify-center'>
            <div className='flex items-center gap-4'>
              <FaBurger size="30px" />
              <div className='flex flex-col leading-5'>
                <span>Explore</span>
                <span>Categories</span>
                <ChevronRight className='self-end' />
              </div>
            </div>
          </div>
        </Link><Link to='/restaurants'>
          <div className='flex cursor-pointer bg-[#ffe8dd] px-(--space-md) py-(--space-sm) rounded-2xl w-45 justify-center'>
            <div className='flex items-center gap-4'>
              <Tag size="30px" />
              <div className='flex flex-col leading-5'>
                <span>Check</span>
                <span>Offers</span>
                <ChevronRight className='self-end' />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <span className='text-lg font-semibold'>Still hungry? 😄</span>
      <span>Get back to the delicious things!</span>
    </div>
  )
}

export default NotFound