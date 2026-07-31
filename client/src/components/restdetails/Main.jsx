import { useState } from 'react';
import Foodcard from './Foodcard'


const Main = ({ data }) => {
    const [selectedFood, setSelectedFood] = useState('All')
    const categories = [];
    data.forEach((food) => {
        if (!categories.includes(food.category)) {
            categories.push(food.category);
        }
    });
    const filteredFood = selectedFood === 'All' ? data : data.filter((rest)=>{
        return rest.category.includes(selectedFood);
    })
    return (
        <div className='flex h-full w-full p-(--space-md) max-lg:flex-col'>
            <div className='flex flex-col flex-1 gap-3'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-medium'>Menu</h2>
                    <select className='mr-4 outline-0 border border-gray-500 px-(--space-sm) rounded-sm py-(--space-xs) cursor-pointer' onChange={(e)=>{
                        setSelectedFood(e.target.value);
                    }}><option key={'All'} value='All' selected>All</option>
                        {categories.map((opt)=>{
                            return <option key={opt} value={opt}>{opt}</option>
                        })}
                    </select>
                </div>
                <div className='overflow-auto flex flex-col gap-3'>
                    {filteredFood.map((food) => {
                        return <Foodcard key={food._id} data={food} />
                    })}
                </div>
            </div>
            <div className='w-1/4 h-full flex flex-col'>
                <div className='flex justify-between items-center max-lg:hidden'>
                    <h2 className='font-semibold text-lg'>Your Cart (3)</h2>
                    <button className='text-(--primary) cursor-pointer hover:text-(--primary-dark)'>Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Main