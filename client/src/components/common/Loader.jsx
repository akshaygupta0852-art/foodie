import logo from '../../assets/images/logo.png'
const Loader = () => {
    return (
        <div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center backdrop-brightness-60' >
            <div className='box-content bg-white p-(--space-lg) items-center justify-center flex flex-col rounded-2xl'>
                <img src={logo} className='h-20 -mt-(--space-md) ' />
                <div className='loading h-14 w-14 -mt-(--space-md) rounded-full bg-transparent border-t-5 border-(--primary)'>
                </div>
                <span className='text-lg font-semibold mt-(--space-md) font-sans max-lg:text-sm max-lg:mt-(--space-sm)'>Loading...</span>
            </div>
        </div>
    )
}

export default Loader