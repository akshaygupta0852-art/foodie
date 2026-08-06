import { MapPin, Building2, Landmark, FileText } from "lucide-react";

export default function ShopAddress({ shopData, handleChange }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-orange-100 p-3">
                    <MapPin className="text-orange-600" size={22} />
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                        Shop Address
                    </h2>

                    <p className="text-sm text-gray-500">
                        Enter the restaurant's location details.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">

                {/* Address */}
                <div className="col-span-full">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Full Address
                    </label>

                    <textarea
                        name="address"
                        rows={4}
                        value={shopData.address}
                        onChange={handleChange}
                        placeholder="House No, Street, Area..."
                        className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
                    />
                </div>

                {/* City */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        City
                    </label>

                    <div className="relative">
                        <Building2
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            name="city"
                            value={shopData.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
                        />
                    </div>
                </div>

                {/* State */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        State
                    </label>

                    <div className="relative">
                        <Landmark
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            name="state"
                            value={shopData.state}
                            onChange={handleChange}
                            placeholder="State"
                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
                        />
                    </div>
                </div>

                {/* Pincode */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Pincode
                    </label>

                    <input
                        type="text"
                        name="pincode"
                        value={shopData.pincode}
                        onChange={handleChange}
                        placeholder="Enter pincode"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
                    />
                </div>

                {/* Landmark */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Landmark
                    </label>

                    <input
                        type="text"
                        name="landmark"
                        value={shopData.landmark}
                        onChange={handleChange}
                        placeholder="Near mall, school, etc."
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
                    />
                </div>

            </div>
                        {/* Description */}
            <div className="rounded-2xl mt-10 border border-gray-200 bg-white p-6 shadow-sm">

                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-xl bg-orange-100 p-3">
                        <FileText
                            className="text-orange-600"
                            size={22}
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            Description
                        </h2>

                        <p className="text-sm text-gray-500">
                            Short description of the restaurant.
                        </p>
                    </div>
                </div>

                <textarea
                    rows={5}
                    name="description"
                    value={shopData.description}
                    onChange={handleChange}
                    placeholder="Tell customers something about your restaurant..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
                />

            </div>
        </div>
    );
}