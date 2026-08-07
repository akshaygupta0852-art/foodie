import { useNavigate } from "react-router-dom";
import RestaurantManageCard from "../components/shopmanage/Card";
import useDashboard from "../hooks/useDashboard";
import { ArrowLeft } from "lucide-react";
import { deleteRestaurant } from "../../routes/Restaurantroute";

const ManageShps = () => {
  const { restaurants } = useDashboard();
  const navigate = useNavigate();
  const onDelete = async (id)=>{
    const data = await deleteRestaurant(id);
    console.log(data)
  };
  return (
    <div className="space-y-8 px-4 py-4 max-lg:space-y-4">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">
          <ArrowLeft onClick={()=>{
            navigate(-1);
          }} size={30} className="hover:bg-gray-200 transition duration-100 cursor-pointer"/>
          <div>
            <h1 className="text-3xl font-bold max-lg:text-xl max-lg:font-semibold">
            Manage Restaurants
          </h1>

          <p className="mt-1 text-gray-500 max-lg:hidden">
            Update or remove your restaurants.
          </p>
          </div>
        </div>

        <button className="rounded-xl bg-[#FF6B35] px-5 py-3 text-white max-lg:px-1 max-lg:py-1 whitespace-nowrap max-lg:text-sm">
          + Add Restaurant
        </button>

      </div>

      <div className="grid gap-6 max-lg:gap-4 lg:grid-cols-2">

        {restaurants.map((restaurant) => (
          <RestaurantManageCard
            key={restaurant._id}
            restaurant={restaurant}
            onEdit={(restaurant) => console.log(restaurant)}
            onDelete={onDelete}
          />
        ))}

      </div>

    </div>
  );
};

export default ManageShps;