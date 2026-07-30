import { Search } from "lucide-react"


const SearchRest = () => {
    return (
        <div className='flex gap-2 items-center w-1/3 max-lg:w-full'>
            <Search color='gray' />
            <input type='text' placeholder='Search for restaurants or cuisines...' className='outline-0 w-1/2 max-lg:w-full border-0' />
        </div>
    )
}

export default SearchRest