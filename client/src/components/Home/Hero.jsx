import { BadgePercent, MapPin, PackageCheck, Wallet } from 'lucide-react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    function debounce(fnc, delay = 700) {
        let timer;

        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fnc(...args)
            }, delay);
        }
    }
    const searchFood = async (value) => {
        if (!value.trim()) {
            setSuggestions([]);
            return;
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/find/?q=${value}`);

        const data = await response.json();
        setSuggestions(data?.food)
    }
    const debouncedSearch = debounce(searchFood, 3000);

    const navigate = useNavigate();
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
                <div className='flex relative gap-2 mt-(--space-lg)'>
                    <input type='text' onChange={(e)=>{
                        const value = e.target.value;
                        setSearch(value);
                        debouncedSearch(value)
                    }} className='px-(--space-md) bg-gray-200 w-full rounded-md py-(--space-sm) border-0 outline-0 max-lg:w-full' placeholder='Search for food or restaurant' />
                    {suggestions?.length > 0 && (
                        <div className="absolute rounded-t-md overflow-hidden top-full left-0 w-full bg-white">
                            {suggestions.map((food) => (
                                <div key={food._id}
                                onClick={()=>{navigate(`/restaurants/${food.restaurant}`)}}
                                className='border-b border-l border-r px-(--space-sm) w-full border-gray-300
                                font-semibold py-(--space-sm) text-gray-600 cursor-pointer tracking-wider hover:bg-gray-200
                                '>
                                    {food.name}
                                </div>
                            ))}
                        </div>
                    )}
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