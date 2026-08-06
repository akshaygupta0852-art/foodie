import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeClosed } from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginAuth(e) {
        e.preventDefault();
        if (!email) {
            return console.log('email is required');
        }
        if (!password) {
            return console.log('Password is required');
        }
        const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });
        const result = await response.json();
        if (response.ok) {
            localStorage.setItem('Admintoken', result.token);
            navigate('/admin/dashboard');
        } else {
            console.log(result.message)
        }
    }
    return (
        <form onSubmit={(e)=>{
            loginAuth(e);
        }} className="w-full px-(--space-xl) mt-(--space-lg) space-y-(--space-md)">

            <div>
                <label className="mb-2 block font-medium">
                    Email
                </label>

                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4">
                    <MdEmail className="text-xl text-gray-400" />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
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
                        type={showPass ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        placeholder="Enter your password"
                        className="w-full bg-transparent px-(--space-md) py-(--space-md) outline-none max-lg:py-(--space-sm)"
                    />
                    <button type="button" onClick={() => {
                        setShowPass(prev => !prev);
                    }}>
                        {showPass ? <EyeClosed /> : <Eye />}
                    </button>
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