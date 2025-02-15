import React from "react";
import { useNavigate } from "react-router-dom";
import nbhImage from "../assets/nbh.jpeg";
import himgiriImage from "../assets/himgiri.jpeg";
import { motion } from "framer-motion";

function HostelAdminInfo() {
    const navigate = useNavigate(); // React Router navigation

    // Function to navigate to the details page with specific content
    const handleClick = (hostelName, isAdding = false) => {
        navigate("/admin-details", { state: { hostelName, isAdding } });
    };

    return (
        <div className="bg-purple-100 w-full min-h-screen flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-12 text-center"
            >
                <h1 className="text-4xl font-bold text-grey-800">Hostel Admin Info</h1>
                <p className="text-gray-600 mt-2">Manage hostel admins efficiently</p>
            </motion.div>

            {/* Info Section */}
            <div className="w-full flex flex-wrap justify-center gap-10 mt-12 px-6">
                {/* Neelkanth Boys Hostel */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-[70%] md:w-[45%] lg:w-[30%] bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center"
                >
                    <img
                        src={nbhImage}
                        alt="NBH"
                        className="h-44 w-full object-cover rounded-lg shadow-lg"
                    />
                    <h1 className="text-xl font-bold text-center mt-5">Neelkanth Boys Hostel</h1>

                    <button
                        className="mt-8 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
                        onClick={() => handleClick("Neelkanth Boys Hostel")}
                    >
                        View Admin Info
                    </button>
                </motion.div>

                {/* Himgiri Boys Hostel */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-[70%] md:w-[45%] lg:w-[30%] bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center"
                >
                    <img
                        src={himgiriImage}
                        alt="Himgiri"
                        className="h-44 w-full object-cover rounded-lg shadow-lg"
                    />
                    <h1 className="text-xl font-bold text-center mt-5">Himgiri Boys Hostel</h1>

                    <button
                        className="mt-8 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
                        onClick={() => handleClick("Himgiri Boys Hostel")}
                    >
                        View Admin Info
                    </button>
                </motion.div>

                {/* Add New Hostel */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-[70%] md:w-[45%] lg:w-[30%] bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center"
                >
                    <div className="w-44 h-44 rounded-full bg-purple-300 flex items-center justify-center">
                        <span className="text-4xl text-white font-bold">+</span>
                    </div>
                    <h1 className="text-xl font-bold text-center mt-5">Add Hostel</h1>

                    <button
                        className="mt-8 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
                        onClick={() => handleClick("", true)}
                    >
                        Add Hostel Admin
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default HostelAdminInfo;
