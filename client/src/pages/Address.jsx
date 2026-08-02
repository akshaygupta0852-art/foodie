import {
    FiMapPin,
    FiHome,
    FiBriefcase,
    FiEdit2,
    FiTrash2,
    FiPlus,
    FiArrowRight,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";
import Navbar from '../components/common/Navbar.jsx'
import AddressCard from "../components/Address/AddressCard";
import AddressForm from "../components/Address/AddressForm";
import { getAddresses } from "../routes/AddressRoute.js";
import { useEffect, useRef, useState } from "react";

const AddressPage = () => {
    const { addresses, setAddresses } = useCart();
    const { handleGetAddresses } = useCart();


    const [selected, setSelected] = useState('');
    if (addresses.length > 0) {
        const defaultAddress = addresses.find((add) => add.isDefault);
        useEffect(() => {
            if (defaultAddress) {
                setSelected(defaultAddress._id);
            }
        }, [defaultAddress]);
    }
    return (
        <div className="min-h-screen relative bg-[#FFFCF8]">

            <Navbar />

            {/* Main */}
            <main className="mx-auto max-w-7xl px-6 py-10">

                <h2 className="text-3xl font-bold text-gray-900 max-lg:text-xl">
                    Select Delivery Address
                </h2>

                <p className="mt-2 text-gray-500 max-lg:text-sm">
                    Choose where you want your delicious food delivered.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_430px] max-lg:mt-4">

                    {/* Saved Addresses */}
                    <section>

                        <div className="mb-5 flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                                Saved Addresses
                            </h3>

                        </div>
                        {addresses?.length > 0 ? addresses?.map((add) => {
                            return <AddressCard key={add._id} address={add} selected={selected}
                                setSelected={setSelected} />
                        }) : <h1 className="text-center text-2xl">No saved address found</h1>}
                    </section>

                    {/* Add Address Form */}
                    <section className="h-fit rounded-2xl border border-gray-100 p-7 right-0 shadow-sm">

                        <div className="mb-7 flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-[#FF6B35]">
                                <FiMapPin size={21} />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">
                                    Add New Address
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Enter your delivery details
                                </p>
                            </div>

                        </div>
                        <AddressForm />
                    </section>

                </div>

            </main>
        </div>
    );
};

const FiLockIcon = () => (
    <span className="text-[#FF6B35]">🔒</span>
);

export default AddressPage;