import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaLocationDot,
    FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="relative min-w-dvw bg-(--bg-dark) text-white mt-24">
            <div className="w-screen max-w-full mx-auto px-6 py-16">

                {/* Top */}

                <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">

                    {/* Logo */}

                    <div className="lg:col-span-2">

                        <h2 className="text-3xl font-bold">
                            <span className="text-(--primary)">Crave</span>Cart
                        </h2>

                        <p className="text-gray-400 mt-5 leading-7 max-w-md">
                            Fresh food, fast delivery, and unforgettable flavors.
                            Discover your favorite restaurants and enjoy delicious meals
                            delivered right to your doorstep.
                        </p>

                        <div className="flex gap-4 mt-8">

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-(--primary) transition flex items-center justify-center"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-(--primary) transition flex items-center justify-center"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-(--primary) transition flex items-center justify-center"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-(--primary) transition flex items-center justify-center"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>

                    </div>

                    {/* Company */}

                    <div>

                        <h3 className="text-lg font-semibold mb-5">
                            Company
                        </h3>

                        <ul className="space-y-3 text-gray-400">

                            <li className="hover:text-(--primary) cursor-pointer">About Us</li>
                            <li className="hover:text-(--primary) cursor-pointer">Careers</li>
                            <li className="hover:text-(--primary) cursor-pointer">Our Story</li>
                            <li className="hover:text-(--primary) cursor-pointer">Blog</li>

                        </ul>

                    </div>

                    {/* Links */}

                    <div>

                        <h3 className="text-lg font-semibold mb-5">
                            Quick Links
                        </h3>

                        <ul className="text-gray-400">

                            <Link to="/"><li className="hover:text-(--primary) cursor-pointer my-3">Home</li></Link>
                            <Link to='/restaurants'><li className="hover:text-(--primary) cursor-pointer my-3">Restaurants</li></Link>
                            <Link to='/categories'><li className="hover:text-(--primary) cursor-pointer my-3">Categories</li></Link>
                            <Link to='/offers'><li className="hover:text-(--primary) cursor-pointer my-3">Offers</li></Link>
                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-lg font-semibold mb-5">
                            Contact
                        </h3>

                        <div className="space-y-4 text-gray-400">

                            <div className="flex gap-3">
                                <FaLocationDot className="text-(--primary) mt-1" />
                                <span>Panna, Madhya Pradesh</span>
                            </div>

                            <div className="flex gap-3">
                                <MdEmail className="text-(--primary) mt-1" />
                                <span>support@cravecart.com</span>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-(--primary) mt-1" />
                                <span>+91 98765 43210</span>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-gray-700 mt-14 pt-6 flex md:flex-row flex-col justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm">
                        © 2026 CraveCart. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-gray-500">

                        <a href="#" className="hover:text-(--primary)">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-(--primary)">
                            Terms
                        </a>

                        <a href="#" className="hover:text-(--primary)">
                            Cookies
                        </a>

                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer