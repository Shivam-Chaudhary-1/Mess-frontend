import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function HomePage() {
    const navigate = useNavigate(); // React Router navigation

    // Function to navigate to the details page with specific content
    const handleClick = (hostelName, isAdding = false) => {
        navigate("/hostel-info", { state: { hostelName, isAdding } });
    };

    return (
        <div className="bg-gradient-to-b from-purple-100 to-purple-200 px-10 w-full h-screen">

            {/* Dashboard Title */}
            <motion.div
                className="flex justify-center text-4xl font-bold text-gray-800 pt-20"
                initial={{ opacity: 1, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                VISIT HOSTELS DATA
            </motion.div>

            {/* Cards Section */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                {[...Array(6)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="m-auto flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-center text-2xl font-semibold text-gray-800">
                            NBH HOSTEL
                        </div>
                        <motion.button
                            className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                            whileHover={{ scale: 1.1 }} onClick={() => handleClick("Himgiri Boys Hostel")}
                        >
                            VISIT
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default HomePage;
