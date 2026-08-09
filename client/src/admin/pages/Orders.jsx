import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useDashboard from '../hooks/useDashboard';
import OrderCard from '../components/orders/OrderCard';

const Orders = () => {
    const navigate = useNavigate();
    const {orders} = useDashboard();
    return (
        <div className='flex flex-col gap-2'>
            <header className='flex items-center gap-4 px-3 py-3'>
                <ArrowLeft onClick={() => navigate(-1)} className='hover:bg-gray-200 cursor-pointer transition-all duration-100' size={28} />
                <div>
                    <h1 className='font-semibold text-xl'>Manage Orders</h1>
                    <p>Manage and Check orders</p>
                </div>
            </header>
            <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-3'>
                {orders.map((order, idx)=>{
                    return <OrderCard key={idx} order={order}/>
                })}
            </div>
        </div>
    )
}

export default Orders