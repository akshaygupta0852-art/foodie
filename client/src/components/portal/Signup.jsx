import {
    FiUser,
    FiMail,
    FiLock,
    FiArrowRight,
} from "react-icons/fi";

const Signup = () => {
    return (
        <form className="w-full px-(--space-lg) mt-(--space-lg) space-y-(--space-md) max-lg:space-y-(--space-sm) max-lg:mt-(--space-sm)">

            {/* Name */}
            <div>
                <label className="mb-2 block font-medium">
                    Full Name
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4">
                    <FiUser className="text-xl text-gray-400" />

                    <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-transparent px-(--space-md) py-(--space-lg) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="mb-2 block font-medium">
                    Email
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4">
                    <FiMail className="text-xl text-gray-400" />

                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full bg-transparent px-(--space-md) py-(--space-lg) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>

            {/* Password */}
            <div>
                <label className="mb-2 block font-medium">
                    Password
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4">
                    <FiLock className="text-xl text-gray-400" />

                    <input
                        type="password"
                        required
                        placeholder="Create a password"
                        className="w-full bg-transparent px-(--space-md) py-(--space-lg) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>

            {/* Confirm Password */}
            <div>
                <label className="mb-2 block font-medium">
                    Confirm Password
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4">
                    <FiLock className="text-xl text-gray-400" />

                    <input
                        type="password"
                        placeholder="Confirm your password"
                        required
                        className="w-full bg-transparent px-(--space-md) py-(--space-lg) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3">
                <input
                    type="checkbox"
                    className="mt-1 accent-[#FF6B35]"
                />

                <span className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a
                        href="#"
                        className="font-medium text-[#FF6B35]"
                    >
                        Terms & Conditions
                    </a>
                </span>
            </label>

            {/* Button */}
            <button
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-(--primary) py-4 text-lg font-semibold text-white transition cursor-pointer hover:bg-(--primary-dark) max-lg:py-(--space-sm)"
            >
                Create Account
                <FiArrowRight />
            </button>
        </form>
    )
}

export default Signup