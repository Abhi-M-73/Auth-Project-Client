import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = ({ user, setUser }) => {
    const navigate = useNavigate();

    // Logout function
    const handleLogout = async () => {
        try {
            const response = await axios.get('http://localhost:3000/user/logout', {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setUser(null);
                navigate("/signin");
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
                <h2 className="text-3xl font-bold mb-4">User Profile</h2>
                {user ? (
                    <>
                        <img src={user?.profile || "https://img.icons8.com/3d-fluency/94/user-male-circle.png"} alt="user-male-circle" className="mx-auto" />
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold capitalize">{user.username}</h3>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <p className="text-gray-600">No user logged in</p>
                )}
            </div>
        </div>
    );
};

export default Home;
