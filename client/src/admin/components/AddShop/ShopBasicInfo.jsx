import {
    Store,
    User,
    Mail,
    Phone,
    Clock,
} from "lucide-react";

export default function ShopBasicInfo({ shopData, handleChange }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            {/* Heading */}
            <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-orange-100 p-3">
                    <Store className="text-orange-600" size={22} />
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                        Shop Information
                    </h2>

                    <p className="text-sm text-gray-500">
                        Basic details about the restaurant.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5">

                {/* Shop Name */}
                <div className="col-span-full">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Shop Name
                    </label>

                    <div className="relative">
                        <Store
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />

                        <input
                            type="text"
                            name="name"
                            value={shopData.name}
                            onChange={handleChange}
                            placeholder="Enter shop name"
                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
                        />
                    </div>
                </div>

                {/* Owner */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Owner Name
                    </label>

                    <div className="relative">
                        <User
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />

                        <input
                            type="text"
                            name="ownerName"
                            value={shopData.ownerName}
                            onChange={handleChange}
                            placeholder="Owner name"
                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
                        />
                    </div>
                </div>

                {/* Mobile */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Mobile
                    </label>

                    <div className="relative">
                        <Phone
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />

                        <input
                            type="tel"
                            name="mobile"
                            value={shopData.mobile}
                            onChange={handleChange}
                            placeholder="+91 9876543210"
                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="col-span-full">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email Address
                    </label>

                    <div className="relative">
                        <Mail
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />

                        <input
                            type="email"
                            name="email"
                            value={shopData.email}
                            onChange={handleChange}
                            placeholder="restaurant@example.com"
                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
                        />
                    </div>
                </div>

                {/* Opening */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Opening Time
                    </label>

                    <div className="relative">
                        <Clock
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />

                        <input
                            type="time"
                            name="openingTime"
                            value={shopData.openingTime}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
                        />
                    </div>
                </div>

                {/* Closing */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Closing Time
                    </label>

                    <div className="relative">
                        <Clock
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />

                        <input
                            type="time"
                            name="closingTime"
                            value={shopData.closingTime}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}