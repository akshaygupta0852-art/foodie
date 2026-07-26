import { BadgePercent, MapPin, PackageCheck, Wallet } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-full flex px-(--space-xl) py-(--space-lg)'>
            <div className='w-1/2'>
                <span className='uppercase font-(--fw-semibold) text-(--primary) text-xl'>
                    order your favourite food
                </span>
                <h1 className='font-semibold font-serif leading-20 tracking-wide text-6xl mt-(--space-xl)'>
                    Delicious food,
                    delivered <span className='text-(--primary)'>fast</span>
                </h1>
                <p className='mt-(--space-lg) text-xl'>Discover the best Restaurants and enjoy<br /> mouthwatering meals at your doorstep.</p>
                <div className='flex mt-(--space-lg)'>
                    <input type='text' className='px-(--space-md) bg-gray-200 w-3/7 rounded-md py-(--space-sm) border-0 outline-0' placeholder='Enter your delivery location' /> <button
                        type='button' className='text-white text-xl font-semibold px-(--space-md) py-(--space-sm) border-0 outline-0 cursor-pointer bg-(--primary) rounded-md'>Search</button>
                </div>
                <div className='flex gap-10 mt-(--space-md)'>
                    <div className='flex items-center gap-2'>
                        <PackageCheck color='var(--primary)' size="40px" />
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold'>Fast delivery</span>
                            <span>30-40 min</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BadgePercent color='var(--primary)' size="40px" />
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold'>Great Offers</span>
                            <span>Best Deals</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Wallet color='var(--primary)' size="40px" />
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold'>Easy Payment</span>
                            <span>Secure & Safe</span>
                        </div>
                    </div>
                </div>
            </div>
            <img className='w-1/2' src='./src/assets/images/bannerImage.png'/>
        </div>
    )
}

export default Hero