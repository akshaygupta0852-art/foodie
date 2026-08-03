import { useEffect, useState } from 'react';
import Foodcard from './Foodcard'
import { clearCart, getCartItem, removeCartItem, updateCartQuantity } from '../../routes/CartRoute';
import QuantityController from '../../utils/QuantityController';
import { Cross, IndianRupee, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';


const Main = ({ data }) => {

    const navigate = useNavigate();
    const [selectedFood, setSelectedFood] = useState('All');
    const { cart, setCart, address } = useCart();
    const categories = [];
    
    const subtotal = cart.reduce(
        (total, item) => total + item.foodId.price * item.quantity,
        0
    );
    const deliveryFee = subtotal >= 500 ? 0 : 30;

    const getLatestCart = async () => {
        const data = await getCartItem();
        setCart(data);
    };

    useEffect(() => {
        getLatestCart();
    }, []);

    const handleClearCart = async () => {
        const data = await clearCart();
        setCart(data?.cart)
    }

    const handleRemoveItem = async (foodId) => {
        const data = await removeCartItem(foodId);
        if (data?.cart) {
            setCart(data.cart);
        }
    }

    data.forEach((food) => {
        if (!categories.includes(food.category)) {
            categories.push(food.category);
        }
    });

    const filteredFood = selectedFood === 'All' ? data : data.filter((rest) => {
        return rest.category.includes(selectedFood);
    });

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
        <div className='flex h-full w-full p-(--space-md) max-lg:flex-col'>
            <div className='flex flex-col flex-1 gap-3'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-medium'>Menu</h2>
                    <select className='mr-4 outline-0 border border-gray-500 px-(--space-sm) rounded-sm py-(--space-xs) cursor-pointer' onChange={(e) => {
                        setSelectedFood(e.target.value);
                    }}><option key={'All'} value='All' defaultValue='All'>All</option>
                        {categories.map((opt) => {
                            return <option key={opt} value={opt}>{opt}</option>
                        })}
                    </select>
                </div>
                <div className='overflow-auto w-full flex flex-col gap-3'>
                    {filteredFood.map((food) => {
                        return <Foodcard key={food._id} data={food} onCartUpdated={getLatestCart} />
                    })}
                </div>
            </div>
            <div className='w-2/7 h-full flex flex-col gap-5 max-lg:hidden'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg'>Your Cart</h2>
                    <button
                        onClick={handleClearCart}
                        className='text-(--primary) cursor-pointer hover:text-(--primary-dark)'>Clear Cart</button>
                </div>
                <div className='flex flex-col gap-3 overflow-auto h-80'>
                    {cart?.length > 0 ? cart?.map((item) => {
                        return <div key={item?.foodId?._id} className='flex gap-3 w-full shadow-2xs'>
                            <img src={item?.foodId?.image} className='min-w-24 max-w-24 min-h-20 max-h-20 rounded-sm' />
                            <div className='flex flex-col w-full'>
                                <h2>{item?.foodId?.name}</h2>
                                <div className='flex items-center justify-between flex-1 w-full'>
                                    <QuantityController
                                        quantity={item.quantity}
                                        increase={() =>
                                            updateQuantity(
                                                item.foodId._id,
                                                item.quantity + 1
                                            )
                                        }
                                        decrease={() =>
                                            updateQuantity(
                                                item.foodId._id,
                                                Math.max(1, item.quantity - 1)
                                            )
                                        }
                                    />
                                    <span className='flex items-center text-(--primary)'><IndianRupee size={15} /> {item?.foodId?.price * item?.quantity}</span>
                                    <X size={15} onClick={() => {
                                        handleRemoveItem(item.foodId._id);
                                    }} className='cursor-pointer hover:text-red-500' />
                                </div>
                            </div>
                        </div>
                    }) : <h1>No items in Cart</h1>}

                </div>
                {cart?.length > 0 ? <div className='flex flex-col'>
                    <div className='flex justify-between text-lg'>
                        <span>Subtotal</span>
                        <span className='flex items-center'><IndianRupee size={15} />{cart?.length > 0 ? cart.reduce((acc, curr) => {
                            return acc + curr.foodId.price * curr.quantity
                        }, 0) : 0}</span>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <span>Delivery Fee</span>
                        <span className='flex items-center'>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <span>Packaging Fee</span>
                        <span className='flex items-center'><IndianRupee size={15} /> {cart?.length > 0 ? 20 : 0}</span>
                    </div>
                    <div className='h-0.15 mt-5 w-full border border-dashed border-gray-400'></div>
                    <div className='flex items-center text-xl justify-between'>
                        <span>Total</span>
                        <span className='flex items-center text-(--primary) font-semibold'><IndianRupee size={18} /> {cart?.length > 0 ? cart.reduce((acc, curr) => { return acc + curr.foodId.price * curr.quantity }, 50) : '0'} </span>
                    </div>
                    <button type='button'
                    onClick={()=>{
                        navigate('/cart')
                    }}
                    className='w-full cursor-pointer bg-(--primary) text-lg text-white py-(--space-sm) rounded-sm font-medium mt-(--space-sm) hover:bg-(--primary-dark)'>View Cart & checkout</button>
                </div> : ''}
            </div>
        </div>
    )
}

export default Main;