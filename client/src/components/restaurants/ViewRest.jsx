import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"


const ViewRest = () => {
  const [restrau, setRestrau] = useState([]);
  const [foods, setFoods] = useState([]);

  const params = useParams();
  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/restaurants/${params.id}`)
      const data = await response.json();
      if (response.ok) {
        setRestrau(data.restaurant)
      }
    }
    getRestaurants();
  }, []);
  useEffect(() => {
    async function getRestaurantFood(){
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/restaurants/${params.id}/foods`);
      const data = await response.json();
      if(response.ok){
        setFoods(data.foods);
        console.log(data.foods);
      }
    }
    getRestaurantFood();
  }, [])
  

  return (
    <div>{restrau.name}</div>
  )
}

export default ViewRest