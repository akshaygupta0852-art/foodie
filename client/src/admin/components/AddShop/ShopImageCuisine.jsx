import { Camera, UtensilsCrossed, FileText } from "lucide-react";

export default function ShopImageCuisine({
    shopData,
    handleChange,
    handleImageChange,
    handleCuisine,
    cuisines,
}) {
    return (
        <div className="space-y-6">

            {/* Image Upload */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-xl bg-orange-100 p-3">
                        <Camera className="text-orange-600" size={22} />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            Shop Image
                        </h2>

                        <p className="text-sm text-gray-500">
                            Upload a restaurant cover image.
                        </p>
                    </div>
                </div>

                <label className="relative flex h-60 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 transition hover:border-orange-500">

                    {shopData.image ? (
                        <img
                            src={URL.createObjectURL(shopData.image)}
                            alt="Preview"
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="text-center">

                            <Camera
                                size={45}
                                className="mx-auto mb-3 text-gray-400"
                            />

                            <p className="font-medium text-gray-600">
                                Click to upload image
                            </p>

                            <p className="mt-1 text-sm text-gray-400">
                                PNG, JPG or WEBP
                            </p>

                        </div>
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 cursor-pointer opacity-0"
                        onChange={handleImageChange}
                    />

                </label>

            </div>

            {/* Cuisine */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-xl bg-orange-100 p-3">
                        <UtensilsCrossed
                            className="text-orange-600"
                            size={22}
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            Cuisines
                        </h2>

                        <p className="text-sm text-gray-500">
                            Select all cuisines served.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">

                    {cuisines.map((cui) => (
                        <button
                            key={cui}
                            type="button"
                            onClick={() => handleCuisine(cui)}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                                shopData.cuisines.includes(cui)
                                    ? "border-orange-500 bg-orange-100 text-orange-600"
                                    : "border-gray-300 bg-white text-gray-600 hover:border-orange-400"
                            }`}
                        >
                            {cui}
                        </button>
                    ))}

                </div>

            </div>

        </div>
    );
}