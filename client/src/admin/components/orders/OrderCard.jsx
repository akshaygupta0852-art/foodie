function checkOrderStatus(st) {
    if (st === 'placed') {
        return <div className='px-4 max-lg:px-2 py-1 bg-gray-300 text-gray-500 rounded-2xl'>{st}</div>
    }
    else if (st === 'cancelled') {
        return <div className='px-4 max-lg:px-2 py-1 bg-red-200 text-red-500 rounded-2xl'>{st}</div>
    }
    else if (st === 'confirmed') {
        return <div className='px-4 max-lg:px-2 py-1 bg-red-200 text-red-500 rounded-2xl'>{st}</div>
    }
    else if (st === 'out-for-delivery') {
        return <div className='px-4 max-lg:px-2 py-1 bg-red-200 text-red-500 rounded-2xl'>{st}</div>
    }
    else if(st === 'delivered'){
        return <div className='px-4 max-lg:px-2 py-1 bg-green-200 text-green-500 rounded-2xl'>{st}</div>
    }
}
const OrderCard = ({ order }) => {
    return (
        <div className='shadow-2xl border border-gray-400 rounded-2xl px-4 py-3'>
            <span>{order?.createdAt}</span>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl max-lg:text-sm font-semibold'>#{order._id}</h1>
                <h1 className='text-xl max-lg:text-sm font-semibold'>{order?.restaurant?.name}</h1>
                {checkOrderStatus(order?.orderStatus)}
            </div>
            <div className='mt-2'>
                <h2 className='text-lg font-medium'>Akshay Gupta, 9522867545</h2>
                <span>NH39, Panna to Satna road, Panna, Madhya Pradesh 488001</span>
            </div>
            <div className='h-px w-full bg-gray-400 mt-4' />
            <table className='w-full mt-4'>
                <thead>
                    <tr>
                        <th className='text-left'>S. no.</th>
                        <th className='text-left'>Product</th>
                        <th className='text-left'>Quantity</th>
                        <th className='text-left'>Price</th>
                        <th className='text-left'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {order?.items?.map((item, idx) => {
                        return <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.quantity}</td>
                            <td>{item?.price}</td>
                            <td>{item?.price * item?.quantity}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className='flex mt-10 gap-5 justify-end'>
                <button className='max-lg:w-1/2 w-40 py-2 text-lg rounded-full text-white cursor-pointer bg-(--primary-dark) hover:bg-(--primary-dark) transition-all duration-150'>Confirm</button>
                <button className='max-lg:w-1/2 w-40 py-2 text-lg rounded-full text-(--primary-dark) cursor-pointer border border-(--primary) transition-all duration-150'>Cancel</button>
            </div>
        </div>
    )
}

export default OrderCard