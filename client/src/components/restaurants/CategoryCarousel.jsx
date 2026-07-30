import { useState } from "react";

const CategoryCarousel = ({ data }) => {
    const [activeBtn, setActiveBtn] = useState('All')
    const cuisines = [
        ...new Set(
            data.flatMap((restaurant) => restaurant.cuisine)
        ),
    ];
    return (
        <div className='flex gap-3 overflow-auto'>
            <button
            onClick={()=>{
                setActiveBtn('All');
            }}
            className={`text-xs ${activeBtn == 'All' ? "border-(--primary) text-(--primary) bg-(--primary-opacity-low)" : ''} cursor-pointer border px-(--space-md) rounded-full py-1`}>All</button>
            {cuisines.map((elem)=>{
                return <button key={elem}
                onClick={()=>{
                    setActiveBtn(elem)
                }}
                className={`text-xs border ${activeBtn == elem ? "border-(--primary) text-(--primary) bg-(--primary-opacity-low)" : ''} cursor-pointer px-(--space-md) rounded-full whitespace-nowrap py-1`}>{elem}</button>
            })}
        </div>

    )
}

export default CategoryCarousel