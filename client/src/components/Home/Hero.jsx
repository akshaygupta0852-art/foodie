import { BadgePercent, MapPin, PackageCheck, Wallet } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-full flex px-(--space-xl) py-(--space-lg) max-lg:flex-col max-lg:px-(--space-sm)'>
            <div className='w-1/2 flex flex-col max-lg:items-center max-lg:w-full'>
                <span className='uppercase font-(--fw-semibold) text-(--primary) text-xl max-lg:text-sm whitespace-nowrap'>
                    order your favourite food
                </span>
                <h1 className='text-center font-semibold font-serif leading-20 tracking-wide text-6xl mt-(--space-xl) max-lg:text-3xl max-lg:leading-10 max-lg:mt-(--space-lg)'>
                    Fresh
                    <span className='text-(--primary)'>Food, </span>
                    Delivered in Minutes.
                </h1>
                <p className='mt-(--space-lg) text-xl max-lg:mt-(--space-md) max-lg:text-sm'>Discover the best Restaurants and enjoy<br /> mouthwatering meals at your doorstep.</p>
                <div className='flex gap-2 mt-(--space-lg)'>
                    <input type='text' className='px-(--space-md) bg-gray-200 w-3/7 rounded-md py-(--space-sm) border-0 outline-0 max-lg:w-full' placeholder='Search for food or restaurant' /> <button
                        type='button' className='text-white text-xl font-semibold px-(--space-md) py-(--space-sm) border-0 outline-0 cursor-pointer bg-(--primary) rounded-md'>Search</button>
                </div>
                <div className='flex gap-10 mt-(--space-md) max-lg:gap-2'>
                    <div className='flex items-center gap-2'>
                        <PackageCheck color='var(--primary)' size="40px" />
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold max-lg:text-sm max-lg:font-medium'>Fast delivery</span>
                            <span className='max-lg:text-xs max-lg:whitespace-nowrap'>30-40 min</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BadgePercent color='var(--primary)' size="40px" />
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold max-lg:text-sm max-lg:font-medium'>Great Offers</span>
                            <span className='max-lg:text-xs max-lg:whitespace-nowrap'>Best Deals</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Wallet color='var(--primary)' size="40px" />
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold max-lg:text-sm max-lg:font-medium'>Easy Payment</span>
                            <span className='max-lg:text-xs max-lg:whitespace-nowrap'>Secure & Safe</span>
                        </div>
                    </div>
                </div>
            </div>
            <img className='w-1/2 max-lg:hidden' src='./src/assets/images/bannerImage.png' />
        </div>
    )
}

export default Hero