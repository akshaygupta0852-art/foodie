import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    FiUser,
    FiMail,
    FiLock,
    FiArrowRight,
} from "react-icons/fi";
import { Eye, EyeClosed } from "lucide-react";


const Signup = () => {

    const inputPass = useRef(null);
    const cnfrmPassInput = useRef(null);
    const [showPass, setShowPass] = useState(false)

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfrmPass, setCnfrmPass] = useState('');
    const checkBox = useRef(null);
    const navigate = useNavigate();
    async function signUpAuth(e) {
        e.preventDefault();
        if (!fullName) {
            return console.error("Full name is required");
        }

        if (!email) {
            return console.error("Email is required");
        }

        if (password.length < 8) {
            return console.error("Password must be at least 8 characters");
        }
        if (password !== cnfrmPass) {
            return console.error('password mismatch')
        }
        if (!checkBox.current.checked) {
            return console.error("Please accept the terms and conditions");
        }
        const response = await fetch(`${import.meta.env.VITE_API_URL}/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fullName, email, password })
        });
        const result = await response.json();
        if (response.ok) {
            localStorage.setItem('token', result.token);
            localStorage.setItem('userId', result.userId);
            navigate('/')
        }
        else {
            console.error('error', result.message);
        }
    }

    return (
        <form
            onSubmit={(e) => {
                signUpAuth(e);
            }}
            className="w-full px-(--space-lg) mt-(--space-lg) space-y-(--space-md) max-lg:space-y-(--space-sm) max-lg:mt-(--space-sm)">

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
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                        }}
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
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
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
                        type={showPass ? 'text' : "password"}
                        required
                        ref={inputPass}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        placeholder="Create a password"
                        className="w-full bg-transparent px-(--space-md) py-(--space-lg) outline-none max-lg:py-(--space-sm)"
                    />
                    <button type="button" onClick={()=>{
                        setShowPass(prev => !prev);
                    }}>
                        {showPass ? <EyeClosed onClick={()=>{
                            inputPass.current.type = 'password';
                            cnfrmPassInput.current.type = 'password';
                        }} /> : <Eye onClick={()=>{
                            inputPass.current.type = 'text';
                            cnfrmPassInput.current.type = 'text';
                        }} />}
                    </button>
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
                        type={showPass ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        required
                        value={cnfrmPass}
                        ref={cnfrmPassInput}
                        onChange={(e) => {
                            setCnfrmPass(e.target.value)
                        }}
                        className="w-full bg-transparent px-(--space-md) py-(--space-lg) outline-none max-lg:py-(--space-sm)"
                    />
                </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3">
                <input
                    type="checkbox"
                    ref={checkBox}
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
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-(--primary) py-4 text-lg font-semibold text-white transition cursor-pointer hover:bg-(--primary-dark) max-lg:py-(--space-sm)"
            >
                Create Account
                <FiArrowRight />
            </button>
        </form>
    )
}

export default Signup