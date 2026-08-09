import { ArrowLeft } from 'lucide-react'
import useDashboard from '../hooks/useDashboard'
import FoodCard from '../components/manageFoods/FoodCard';
import { useNavigate } from 'react-router-dom'
const Foods = () => {
    const { foods } = useDashboard();
    const navigate = useNavigate();
    return (
        <div>
            <header className='mb-2'>
                <div className='flex px-4 items-center h-18 gap-5'>
                    <ArrowLeft onClick={()=>navigate(-1)} size={30} className='hover:bg-gray-200 cursor-pointer transition duration-100' />
                    <div>
                        <h2 className='text-2xl font-semibold'>Manage foods</h2>
                        <p>Update and delete your Foods</p>
                    </div>
                </div>
            </header>
            <div className='grid lg:grid-cols-2 gap-4 lg:px-10 px-3'>
                {foods?.map((food) => {
                    return <FoodCard key={food?._id} food={food} />
                })}
            </div>
        </div>
    )
}

export default Foods