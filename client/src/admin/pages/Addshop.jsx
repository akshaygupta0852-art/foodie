import { useState } from "react";
import { Plus } from "lucide-react";

import ShopBasicInfo from "../components/AddShop/ShopBasicInfo";
import ShopAddress from "../components/AddShop/ShopAddress";
import ShopImageCuisine from "../components/AddShop/ShopImageCuisine";
import { cuisines } from "../../constants/cuisines";
import { addRestaurant } from "../../routes/Restaurantroute";
import Loader from "../../components/common/Loader";

export default function AddShop() {
    const [shopData, setShopData] = useState({
        name: "",
        ownerName: "",
        email: "",
        mobile: "",

        address: "",
        city: "",
        state: "",
        pincode: "",
        landmark: "",

        openingTime: "",
        closingTime: "",

        description: "",

        cuisines: [],

        image: null,
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setShopData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        setShopData((prev) => ({
            ...prev,
            image: file,
        }));
    };

    const handleCuisine = (cuisine) => {
        setShopData((prev) => ({
            ...prev,
            cuisines: prev.cuisines.includes(cuisine)
                ? prev.cuisines.filter((item) => item !== cuisine)
                : [...prev.cuisines, cuisine],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading((prev)=> !prev);
        const formData = new FormData();

        Object.keys(shopData).forEach((key) => {
            if (key === "cuisines") {
                shopData.cuisines.forEach((cuisine) =>
                    formData.append("cuisines", cuisine)
                );
            } else {
                formData.append(key, shopData[key]);
            }
        });

        console.log(shopData);

        const data = await addRestaurant(formData);
        if(data.type === 'Done'){
            setIsLoading((prev)=> !prev);
        }
    };

    return (
        <section className="min-h-screen bg-gray-50 p-6">
            {isLoading ? <Loader/> : ''}
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">

                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Add Shop
                    </h1>

                    <p className="mt-1 text-gray-500">
                        Register a new restaurant on CraveCart.
                    </p>
                </div>

                <button
                    type="submit"
                    form="addShopForm"
                    className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-6 py-3 font-medium text-white transition hover:bg-[#f45b24]"
                >
                    <Plus size={18} />
                    Add Shop
                </button>

            </div>

            <form
                id="addShopForm"
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                    {/* Left */}
                    <div className="space-y-6 xl:col-span-2">

                        <ShopBasicInfo
                            shopData={shopData}
                            handleChange={handleChange}
                        />

                        <ShopAddress
                            shopData={shopData}
                            handleChange={handleChange}
                        />

                    </div>

                    {/* Right */}
                    <div>

                        <ShopImageCuisine
                            shopData={shopData}
                            handleChange={handleChange}
                            handleImageChange={handleImageChange}
                            handleCuisine={handleCuisine}
                            cuisines={cuisines}
                        />

                    </div>

                </div>
            </form>

        </section>
    );
}