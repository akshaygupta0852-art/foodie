import { FiBriefcase, FiEdit2, FiHome, FiTrash2 } from "react-icons/fi"
import { deleteAddress } from "../../routes/AddressRoute"
import { useCart } from "../../context/CartContext";


const AddressCard = ({ address, selected, setSelected }) => {

    const { setAddresses } = useCart();
    const handleRemoveAddress = async (addressId) =>{
        const data = await deleteAddress(addressId);
        setAddresses(data?.addresses)
    }    
    return (
        <div
            onClick={() => setSelected(address._id)}
            className={`mb-5 rounded-2xl cursor-pointer border-2 bg-white transition-all duration-75 ease-in p-6 ${selected == address?._id ? 'selectedAdd' : ''} shadow-sm border-gray-300 max-lg:p-4`}>

            <div className="flex gap-4 max-lg:gap-3">

                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${selected == address?._id ? 'text-(--primary) bg-orange-100' : 'text-black bg-transparent'}`}>
                    {address?.label == 'Home' ? <FiHome /> : <FiBriefcase />}
                </div>

                <div className="flex-1">

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-3">
                            <h4 className="font-semibold text-gray-900">
                                {address?.label}
                            </h4>

                            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-[#FF6B35]">
                                {address?.isDefault == true ? "Default" : ''}
                            </span>
                        </div>

                        <input
                            type="radio"
                            name="address"
                            className="custom-radio"
                            checked={selected === address?._id}
                            onChange={() => setSelected(address?._id)}
                        />

                    </div>

                    <p className="mt-1 font-medium text-gray-800">
                        {address?.username}
                    </p>

                    <p className="mt-1 leading-6 text-gray-500">
                        {address?.houseNo} {address?.street}
                        <br />
                        {address?.city}, {address?.pincode}
                    </p>

                    <p className="mt-2 max-lg:mt-1 text-sm text-gray-500">
                        +91 {address?.mobile}
                    </p>

                    <div className="mt-5 max-lg:mt-3 flex gap-5">
                        <button onClick={()=>{
                            handleRemoveAddress(address._id)
                        }} className="flex cursor-pointer items-center gap-2 text-sm font-medium text-red-500">

                            <FiTrash2 size={15} />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressCard