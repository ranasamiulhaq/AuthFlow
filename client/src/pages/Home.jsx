import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("Auth Successful / Logged In");
    const [showModal, setShowModal] = useState(false);

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const res = await axios.post(
                    `${BACKEND_URL}/auth/userVerification`,
                    {},
                    { withCredentials: true }
                );
                
                if (!res.data.status) {
                    navigate("/login");
                }
            } catch (error) {
                console.error("Verification error:", error);
                navigate("/login");
            }
        };

        verifyUser();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await axios.post(`${BACKEND_URL}/auth/logout`, {}, { withCredentials: true });
            setMessage("You have been logged out successfully.");
            setShowModal(true);
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } catch (error) {
            setMessage("An error occurred during logout.");
            setShowModal(true);
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
            <div className="text-center p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700 max-w-sm w-full">
                <h1 className="text-3xl font-bold text-white mb-4">Auth Successful</h1>
                <p className="text-gray-400 mb-6">Welcome! You are now authenticated.</p>
                <button 
                    onClick={handleLogout}
                    className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                >
                    Log Out
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-white text-center border border-gray-700">
                        <p className="text-lg font-semibold">{message}</p>
                        <button 
                            onClick={() => setShowModal(false)}
                            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
