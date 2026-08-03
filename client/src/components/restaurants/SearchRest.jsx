import { Search } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchRest = () => {
    const [suggestions, setSuggestions] = useState([]);

    const [search, setSearch] = useState('');

    const navigate = useNavigate();
    function debounce(fnc, delay = 700) {
        let timer;
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fnc(...args)
            }, delay)
        }
    }

    const searchRest = async (value) => {
        if (!value.trim()) {
            setSuggestions([]);
            return;
        }
        const response = await fetch(`${import.meta.env.VITE_API_URL}/restaurant/find?q=${value}`);
        const result = await response.json();
        console.log(result)
        setSuggestions(result?.restaurants)
    }
    const debouncedSearch = debounce(searchRest, 800);
    return (
        <div className='flex relative gap-2 items-center w-1/3 max-lg:w-full'>
            <Search color='gray' />
            <input type='text'
            onChange={(e)=>{
                const value = e.target.value;
                setSearch(value);
                debouncedSearch(value);
            }}
            placeholder='Search for restaurants or cuisines...' className='outline-0 w-full max-lg:w-full border-0' />
            {suggestions?.length > 0 && (
                <div className="absolute rounded-t-md overflow-hidden top-full left-0 w-full bg-white">
                    {suggestions.map((food) => (
                        <div key={food._id}
                            onClick={() => { navigate(`/restaurants/${food._id}`) }}
                            className='border-b border-l border-r px-(--space-sm) w-full border-gray-300
                                font-semibold py-(--space-sm) text-gray-600 cursor-pointer tracking-wider hover:bg-gray-200
                                '>
                            {food.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchRest