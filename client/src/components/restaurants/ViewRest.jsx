import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Navbar from '../common/Navbar.jsx';
import { Heart, MapPin, Share, Star } from "lucide-react";
import Main from "../restdetails/Main.jsx";

const ViewRest = () => {
  const [restrau, setRestrau] = useState({});
  const [foods, setFoods] = useState([]);

  const params = useParams();
  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/restaurants/${params.id}`)
      const data = await response.json();
      if (response.ok) {
        setRestrau(data.restaurant);
      }
    }
    getRestaurants();
  }, []);
  useEffect(() => {
    async function getRestaurantFood() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/restaurants/${params.id}/foods`);
      const data = await response.json();
      if (response.ok) {
        setFoods(data.foods);
      
      }
    }
    getRestaurantFood();
  }, []);


  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="h-60 relative flex text-white w-full px-(--space-xl) bg-no-repeat bg-cover max-lg:h-45" style={{ backgroundImage: `url(${restrau.image})` }}>
        <div className="h-full flex-1 flex flex-col gap-3 justify-center">
          <h1 className="text-4xl  font-semibold max-lg:text-lg">{restrau.name}</h1>
          <div className="flex items-center gap-2 text-gray-300 max-lg:gap-1">
            <Star stroke="yellow" size={16} className="max-lg:scale-75" fill="yellow" />
            <span className="text-amber-300 max-lg:text-xs">{restrau.rating}</span>
            <ul className="flex gap-4 items-center ml-4">
              <li className="flex items-center whitespace-nowrap max-lg:text-xs">
                <span className="mr-1 text-xs">•</span>
                {restrau?.cuisine?.join(', ')}
              </li>
              <li className="before:text-xs whitespace-nowrap before:mr-1 before:content-['•'] max-lg:text-xs">{restrau.deliveryTime} - {restrau.deliveryTime + 10} min</li>
            </ul>
          </div>
          <span className="flex items-center text-gray-300 gap-2"><MapPin size={16} /> {restrau.address} </span>
          <div className="px-(--space-sm) py-1 w-fit rounded bg-green-700">Open</div>
        </div>
        <div className="h-full w-fit items-start py-(--space-lg) top-0 right-0 flex gap-6 max-lg:absolute">
          <button className="p-(--space-sm) cursor-pointer bg-gray-500 rounded-full max-lg:p-(--space-xs)"><Share className="max-lg:scale-80" /></button>
          <button className="p-(--space-sm) cursor-pointer bg-gray-500 rounded-full max-lg:p-(--space-xs)"><Heart className="max-lg:scale-80" /></button>
        </div>
      </div>
      <Main data={foods} />
    </div>
  )
}

export default ViewRest