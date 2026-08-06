import { useState } from "react";

const AddShop = () => {
    const [urlImg, setUrlImg] = useState(null);
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const cuisines = [
        "Indian",
        "North Indian",
        "South Indian",
        "Mughlai",
        "Punjabi",
        "Gujarati",
        "Rajasthani",
        "Bengali",
        "Maharashtrian",
        "Hyderabadi",
        "Kashmiri",
        "Chinese",
        "Indo-Chinese",
        "Italian",
        "Continental",
        "Fast Food",
        "Street Food",
        "Bakery",
        "Desserts",
        "Cafe",
        "Beverages",
        "Healthy Food",
        "Vegetarian",
    ];
    function checkSelected(cui) {
        return selectedCuisines?.includes(cui)
    }
    return (
        <form className="grid grid-cols-2 gap-2">
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Shop Name
                </label>

                <div className="flex items-center rounded-md border border-gray-200 bg-white">
                    <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-transparent px-(--space-md) py-(--space-sm) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Description
                </label>

                <div className="flex items-center rounded-md border border-gray-200 bg-white">
                    <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-transparent px-(--space-md) py-(--space-sm) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Address
                </label>

                <div className="flex items-center rounded-md border border-gray-200 bg-white">
                    <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-transparent px-(--space-md) py-(--space-sm) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>
            <div>
                <label className="mb-1 block text-sm font-medium">
                    City
                </label>

                <div className="flex items-center rounded-md border border-gray-200 bg-white">
                    <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-transparent px-(--space-md) py-(--space-sm) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Pincode
                </label>

                <div className="flex items-center rounded-md border border-gray-200 bg-white">
                    <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-transparent px-(--space-md) py-(--space-sm) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Delivery time (in minutes)
                </label>

                <div className="flex items-center rounded-md border border-gray-200 bg-white">
                    <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-transparent px-(--space-md) py-(--space-sm) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>
            <div className="flex flex-wrap col-span-full gap-2">
                {cuisines.map((cui) => {
                    return <span
                        className={`cursor-pointer px-2 py-1 border rounded-2xl text-center ${checkSelected(cui) ? 'border-(--primary) bg-amber-100' : ''}`} onClick={(e) => {
                            if (!checkSelected(cui)) {
                                setSelectedCuisines((prev) => [...prev, cui]);
                            } else {
                                setSelectedCuisines((prev) =>
                                    prev.filter((item) => item !== cui)
                                );
                            }
                        }} key={cui}>{cui}</span>
                })}
            </div>
            <div>
                <span>Image</span>
                <label className="relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 hover:border-[#FF6B35]">
                    <span className="text-2xl text-gray-400">+</span>

                    <input
                        type="file"
                        onInput={(e) => {
                            console.log(URL.createObjectURL(e.target.files[0]));
                            setUrlImg(URL.createObjectURL(e.target.files[0]))
                        }}
                        accept="image/*"
                        className="absolute inset-0 cursor-pointer opacity-0"
                    />
                    <img src={urlImg} className="h-full w-full object-contain absolute" />
                </label>
            </div>
        </form>
    )
}

export default AddShop