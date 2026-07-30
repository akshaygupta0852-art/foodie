import { useEffect, useState } from 'react'
import { Heart, Search, Star } from 'lucide-react'
import SearchRest from '../components/restaurants/SearchRest';
import { useNavigate } from 'react-router-dom';
import CategoryCarousel from '../components/restaurants/CategoryCarousel';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getRestaurants = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/restaurants`);
      const data = await response.json();
      if (response.ok) {
        setRestaurants(data.restaurants);
      }
    }
    getRestaurants();
  }, [])

  return (
    <div className='flex mt-(--space-md) flex-col px-(--space-sm) gap-4'>
      <SearchRest />
      <CategoryCarousel data={restaurants} />
      <div className='grid grid-cols-3 mt-4 space-x-5 space-y-4 max-lg:grid-cols-1'>
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} onClick={() => {
            navigate(`/restaurants/${restaurant._id}`)
          }} className='cursor-pointer shadow-2xl h-60 rounded-2xl overflow-hidden max-lg:w-full'>
            <img src={restaurant.image} className='h-2/3 w-full object-cover' />
            <div className='mt-(--space-2xs) px-1'>
              <div className='flex items-center justify-between'>
                <h2 className='font-semibold'>{restaurant.name}</h2>
                <div className='flex gap-1 items-center'>
                  <Star size={13} fill='#1c8a4a' stroke='#1c8a4a' />
                  <span className='text-[#1c8a4a] text-xs'>{restaurant.rating}</span>
                </div>
              </div>

              <span className='text-sm text-gray-500'>
                {restaurant.cuisine.join(', ')}
              </span>
              <div className='flex justify-between items-center'>
                <span className='text-sm'>
                  {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min
                </span>
              </div>
            </div>
          </div>
        ))}</div>
    </div>
  )
}

export default Restaurants