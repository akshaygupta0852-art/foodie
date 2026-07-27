import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";

const Login = () => {
    return (
        <form className="w-full px-(--space-xl) mt-(--space-lg) space-y-(--space-md)">

            <div>
                <label className="mb-2 block font-medium">
                    Email
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4">
                    <MdEmail className="text-xl text-gray-400" />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full bg-transparent px-(--space-md) py-(--space-md) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>

            <div>
                <div className="mb-2 flex justify-between">
                    <label className="font-medium">
                        Password
                    </label>

                    <button
                        type="button"
                        className="text-sm text-[#FF6B35]"
                    >
                        Forgot?
                    </button>
                </div>

                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4">
                    <RiLockPasswordLine className="text-xl text-gray-400" />

                    <input
                        type="password"
                        required
                        placeholder="Enter your password"
                        className="w-full bg-transparent px-(--space-md) py-(--space-md) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="accent-[#FF6B35]"
                    />

                    <span className="text-sm">
                        Remember me
                    </span>
                </label>
            </div>

            <button
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-(--primary) py-(--space-md) mt-(--space-3xl) text-lg font-semibold text-white transition cursor-pointer hover:bg-(--primary-dark) max-lg:py-(--space-sm) max-lg:mt-(--space-xl)"
            >
                Login
                <FiArrowRight />
            </button>
        </form>
    )
}

export default Login