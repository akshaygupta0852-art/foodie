import { useRef, useState } from "react"
import { FiArrowRight, FiBriefcase, FiHome } from "react-icons/fi"
import { saveAddress } from "../../routes/AddressRoute";
import { useCart } from "../../context/CartContext";


const AddressForm = () => {
    const { setAddresses, handleGetAddresses } = useCart();
    const [label, setLabel] = useState('Home');
    const form = useRef(null);
    const [address, setAddress] = useState({
        username: "",
        mobile: "",
        houseNo: "",
        street: "",
        city: "",
        pincode: "",
        isDefault: false,
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setAddress((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSaveAddress = async (address, label) => {
        const data = await saveAddress(address, label);
        setAddresses(data?.address);
    }
    return (
        <form ref={form} className="space-y-5 top-0 left-0">

            {/* Name */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Full Name
                </label>

                <input
                    type="text"
                    name="username"
                    value={address.username}
                    onChange={(e) => { handleChange(e) }}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3.5 outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-orange-100"
                />
            </div>

            {/* Phone */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Phone Number
                </label>

                <input
                    type="tel"
                    name="mobile"
                    value={address.mobile}
                    onChange={(e) => { handleChange(e) }}
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3.5 outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-orange-100"
                />
            </div>

            {/* House */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    House / Flat / Building
                </label>

                <input
                    type="text"
                    name="houseNo"
                    value={address.houseNo}
                    onChange={(e) => { handleChange(e) }}
                    placeholder="House no., flat, building"
                    className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3.5 outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-orange-100"
                />
            </div>

            {/* Area */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Area / Street
                </label>

                <input
                    type="text"
                    name="street"
                    value={address.street}
                    onChange={(e) => { handleChange(e) }}
                    placeholder="Enter area or street"
                    className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3.5 outline-none transition focus:border-[#FF6B35] focus:ring-2 focus:ring-orange-100"
                />
            </div>

            {/* City + Pincode */}
            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        City
                    </label>

                    <input
                        type="text"
                        name="city"
                        value={address.city}
                        onChange={(e) => { handleChange(e) }}

                        placeholder="City"
                        className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3.5 outline-none focus:border-[#FF6B35]"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Pincode
                    </label>

                    <input
                        type="text"
                        name="pincode"
                        value={address.pincode}
                        onChange={(e) => { handleChange(e) }}

                        placeholder="Pincode"
                        className="w-full rounded-xl border border-gray-200 bg-[#FFFCF8] px-4 py-3.5 outline-none focus:border-[#FF6B35]"
                    />
                </div>

            </div>

            {/* Address Type */}
            <div>
                <label className="mb-3 block text-sm font-medium">
                    Address Type
                </label>

                <div className="flex gap-3">

                    <button
                        type="button"
                        onClick={() => {
                            setLabel('Home')
                        }}
                        className={`flex flex-1 items-center justify-center py-3 text-sm gap-2 rounded-xl border border-gray-200 text-gray-600 ${label === 'Home' ? 'labelActive' : ''}`}
                    >
                        <FiHome />
                        Home
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setLabel('Work')
                        }}
                        className={`${label !== 'Home' ? 'labelActive' : ''} flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-gray-200 py-3 text-sm text-gray-600 hover:border-[#FF6B35]`}
                    >
                        <FiBriefcase />
                        Work
                    </button>

                </div>
            </div>

            {/* Default */}
            <label className="flex items-center gap-3 text-sm text-gray-600">
                <input
                    type="checkbox"
                    name="isDefault"
                    value={address.isDefault}
                    onChange={(e) => { handleChange(e) }}
                    className="h-4 w-4 accent-[#FF6B35]"
                />

                Make this my default address
            </label>

            {/* Save */}
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    handleSaveAddress(address, label);
                    handleGetAddresses();
                    setAddress({
                        username: "",
                        mobile: "",
                        houseNo: "",
                        street: "",
                        city: "",
                        pincode: "",
                        isDefault: false,
                    })
                }}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF6B35] py-4 font-semibold text-white transition hover:bg-[#f15d28]"
            >
                Save Address
                <FiArrowRight />
            </button>

        </form>
    )
}

export default AddressForm