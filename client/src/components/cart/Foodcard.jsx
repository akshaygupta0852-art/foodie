import { Clock, IndianRupee, Star } from "lucide-react"
import QuantityController from "../../utils/QuantityController"
import { FiTrash2 } from "react-icons/fi"
import { removeCartItem, updateCartQuantity } from "../../routes/CartRoute"
import { useCart } from "../../context/CartContext"

const Foodcard = ({ food }) => {
    const { setCart } = useCart();

    const handleRemoveItem = async (foodId) => {
        const data = await removeCartItem(foodId);
        if (data?.cart) {
            setCart(data.cart);
        }
    }

    const updateQuantity = async (foodId, newQty) => {
        try {
            await updateCartQuantity(foodId, newQty);

            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.foodId._id === foodId
                        ? { ...item, quantity: newQty }
                        : item
                )
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex gap-5 shadow-sm items-center w-full px-(--space-xs) py-(--space-sm)">
            <img src={food.foodId.image} className="w-40 h-30 min-h-30 min-w-40 rounded-lg object-cover" />
            <div className="flex justify-evenly gap-1 flex-1 flex-col py-(--space-sm)">
                <div className="flex gap-3 items-center"><h2 className="text-lg font-semibold">{food.foodId.name}</h2>
                    {food.foodId?.isVeg ? <span className="inline-flex h-4 w-4 max-lg:scale-85  items-center justify-center border border-green-600">
                        <span className="h-2  max-lg:scale-85 w-2 rounded-full bg-green-600"></span>
                    </span> : <span className="inline-flex h-4 w-4 max-lg:scale-85  items-center justify-center border border-red-600">
                        <span className="h-2 max-lg:scale-85 w-2 rounded-full bg-red-600"></span>
                    </span>}
                </div>
                <span className="font-medium text-sm">{food.restaurant.name}</span>
                <p className="w-1/2 text-xs text-gray-500">{food.foodId.description}</p>

                <div className="flex gap-3 text-xs text-gray-400">
                    <span className="flex gap-1 items-center"><Star size={12} fill="orange" stroke="orange" /> {food.foodId.rating}</span>
                    <span> | </span>
                    <span className="flex gap-1 items-center"><Clock size={12} />{food.foodId.preparationTime} min</span>
                </div>
            </div>
            <div className="w-1/3 flex items-center text-xl justify-end gap-6">
                <h1 className="flex items-center font-bold"><IndianRupee size={19} />{food.foodId.price * food.quantity}</h1>
                <QuantityController quantity={food.quantity}
                    increase={() =>
                        updateQuantity(
                            food.foodId._id,
                            food.quantity + 1
                        )
                    }
                    decrease={() =>
                        updateQuantity(
                            food.foodId._id,
                            Math.max(1, food.quantity - 1)
                        )
                    }
                />
                <FiTrash2 className="cursor-pointer" onClick={() => {
                    console.log('clikce');

                    handleRemoveItem(food.foodId._id)
                }} />
            </div>
        </div>
    )
}

export default Foodcard