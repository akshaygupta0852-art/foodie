import React from 'react'

const Foodcard = ({ food }) => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
                <img src={food?.foodId?.image} className='h-20 w-25 max-w-25 max-h-20 min-w-25 min-h-20 rounded-2xl' />
                <div className='flex flex-col'>
                    <span className=' font-medium'>{food?.foodId?.name}</span>
                    <span className='text-sm text-gray-500'>{food?.restaurant?.name}</span>
                    <span className='text-sm text-gray-500'>x{food?.quantity}</span>
                </div>
            </div>
            <span>₹{(food?.foodId?.price * food?.quantity) || 0}</span>
        </div>
    )
}

export default Foodcard