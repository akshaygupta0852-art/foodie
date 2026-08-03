import { useEffect, useState } from 'react'
import { clearCart, getCartItem, removeCartItem } from '../routes/CartRoute'
import Foodcard from '../components/cart/Foodcard';
import { useCart } from '../context/CartContext';
import { FiTrash2 } from 'react-icons/fi';
import CartSummary from '../components/cart/Aside';
import Navbar from '../components/common/Navbar'
const Cart = ({ changeCount }) => {
  const { cart, setCart } = useCart();
  const {addresses, setAddresses} = useCart()
  const itemCount = cart?.reduce((total, item) => {
    return total + item.quantity
  }, 0) || 0
  const getLatestCart = async () => {
    const data = await getCartItem();
    setCart(data);
  }

  useEffect(() => {
    getLatestCart();
  }, []);

  const handleClearCart = async () => {
    const data = await clearCart();
    setCart(data?.cart);
  }

  console
  return (
    <div>
      <Navbar />
      <div className='flex w-full gap-4 px-(--space-lg) py-(--space-sm) max-lg:flex-col-reverse'>
        <div className='flex flex-1 gap-5 flex-col'>
          <div className='flex justify-between items-center'>
            <div>
              <span className='font-bold text-xl max-lg:text-lg'>Your Cart ({itemCount})</span>
              <p className='mt-2 text-sm text-gray-600 max-lg:text-xs max-lg:mt-0.5'>Review your items and proceed to checkout</p>
            </div>
            <button onClick={handleClearCart} className='flex text-(--primary) border rounded border-gray-300 cursor-pointer items-center text-sm gap-3 hover:bg-gray-200 px-(--space-sm) py-(--space-xs) max-lg:gap-1 whitespace-nowrap max-lg:text-xs '><FiTrash2 /> Clear cart</button>
          </div>
          <div className='flex flex-col gap-5 h-120 overflow-auto'>
            {cart?.length > 0 ? cart.map((food) => {
              return <Foodcard key={food.foodId._id} food={food} />
            }) : ''}
          </div>
        </div>
        {cart?.length > 0 ?
        <CartSummary /> : ''}
      </div>
    </div>
  )
}

export default Cart