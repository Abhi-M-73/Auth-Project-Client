import React, { useState } from "react";
import { Link } from "react-router-dom";


const Signup = () => {
    const [input, setInput] = useState({
        userName: "",
        email: "",
        password: "",
    });

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleUserSignup = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-4">
            <div className="w-full max-w-md border-t-4 border-b-4 border-black bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Create an Account</h2>
                <p className="text-gray-500 text-center mb-6">Join us by filling in your details below.</p>

                <form onSubmit={handleUserSignup} className="space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Username</label>
                        <input
                            onChange={handleChangeInput}
                            value={input.userName}
                            name="userName"
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Email</label>
                        <input
                            onChange={handleChangeInput}
                            value={input.email}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Password</label>
                        <input
                            onChange={handleChangeInput}
                            value={input.password}
                            name="password"
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
                        />
                    </div>

                    {/* Register Button */}
                    <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                        Signup
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-blue-500 font-medium hover:underline">
                        Login here
                    </Link>
                </p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700-800 transition mt-10">
                    Signup with Google
                </button>
            </div>
        </div>
    );
};

export default Signup;