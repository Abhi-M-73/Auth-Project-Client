import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-4">
            <div className="w-full max-w-md bg-white border-t-4 border-b-4 border-black rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Sign In</h2>

                <form className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-end text-sm">
                        <a href="#" className="text-blue-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Signin Button */}
                    <button className="w-full bg-black text-white py-2 shadow rounded-lg hover:bg-gray-800 transition">
                        Signin
                    </button>
                </form>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <Link to={"/signup"} className="text-blue-500 font-medium hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;