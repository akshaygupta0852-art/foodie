import { FiEdit, FiEdit2, FiUser } from 'react-icons/fi'

const Profile = () => {
    return (
        <div className='h-33 w-full max-w-xl flex items-center gap-4 justify-between px-(--space-md) shadow-2xl rounded-2xl'>
            <div className='h-20 flex items-center justify-center w-20 rounded-full bg-orange-100'>
                <FiUser size={30} color='#ff6b35' />
            </div>
            <div className='flex flex-col flex-1'>
                <h1 className='font-semibold'>Akshay Gupta</h1>
                <div className='flex justify-between text-lg max-lg:text-sm'>
                    <div className='flex flex-col text-[15px] items-center'>
                        <span>Followers</span>
                        <span>0</span>
                    </div>

                    <div className='flex flex-col text-[15px] items-center'>
                        <span>Orders</span>
                        <span>0</span>
                    </div>

                    <div className='flex flex-col text-[15px] items-center'>
                        <span>Total revenue</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile