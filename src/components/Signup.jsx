import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const Signup = ({setUser}) => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleUserSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/user/register', input, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setUser(response.data.user); 
                navigate('/signin');
            }
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error(error.response.data.message)
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md border-t-4 border-b-4 border-black bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Create an Account</h2>
                <p className="text-gray-500 text-center mb-6">Join us by filling in your details below.</p>

                <form onSubmit={handleUserSignup} className="space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Username</label>
                        <input
                            onChange={handleChangeInput}
                            value={input.username}
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black outline-none"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black outline-none"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black outline-none"
                        />
                    </div>

                    {/* Register Button */}
                    <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                        Signup
                    </button>
                </form>

                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700-800 transition mt-6">
                    Signup with Google
                </button>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link to={"/signin"} className="text-blue-500 font-medium hover:underline">
                        Sign in
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Signup;