import { Clock, IndianRupee, Star, Vegan } from 'lucide-react'
import { addToCart } from '../../routes/CartRoute'

const Foodcard = ({ data, onCartUpdated }) => {
    return (
        <div className='shadow-2xs w-full flex py-2'>
            <img src={data?.image} loading='lazy' className='w-60 h-40 rounded-2xl max-lg:w-35 object-cover' />
            <div className='flex flex-1 px-(--space-lg) flex-col gap-2 text-black max-lg:gap-2'>
                <div className='flex gap-4 items-center max-lg:gap-2'>
                    <h3 className='text-xl font-semibold max-lg:text-sm'>{data?.name}</h3>
                    {data?.isVeg ? <span className="inline-flex h-4 w-4 max-lg:scale-85  items-center justify-center border border-green-600">
                        <span className="h-2  max-lg:scale-85 w-2 rounded-full bg-green-600"></span>
                    </span> : <span className="inline-flex h-4 w-4 max-lg:scale-85  items-center justify-center border border-red-600">
                        <span className="h-2 max-lg:scale-85 w-2 rounded-full bg-red-600"></span>
                    </span>}
                </div>
                <p className='text-gray-500 font-medium max-lg:text-xs'>{data?.description}</p>
                <div className='flex items-center gap-5 text-md max-lg:text-xs'>
                    <span className='flex items-center gap-2'><Star size={16} fill='orange' stroke='orange' /> {data?.rating} ({data?.totalReviews})</span>
                    <span className='flex items-center gap-2'><Clock size={16} color='gray' /> {data?.preparationTime} min</span>
                </div>
                <div className='flex items-center justify-between mt-(--space-xs)'>
                    <span className='text-(--primary) text-lg items-center font-bold flex gap-0 max-lg:text-sm'><IndianRupee size={18} className='max-lg:scale-75' /> {data?.price}</span>

                    {data?.isAvailable ? <button type='button'
                        className='border border-(--primary) outline-0
                cursor-pointer max-lg:text-xs max-lg:py-0.5 max-lg:px-2
                w-fit self-end text-(--primary) px-(--space-sm) rounded-sm py-(--space-xs) font-semibold'
                    onClick={async ()=>{
                        const userID = localStorage.getItem('userId');
                        await addToCart(userID, data._id, data.restaurant, 1);
                        await onCartUpdated();
                    }}
                    >+ Add</button> : <span>Out of stock</span>}
                </div>
            </div>
        </div>
    )
}

export default Foodcard