import { motion } from "framer-motion";

function Entry_stu() {

   
    return (
        <div className="bg-gradient-to-b from-purple-100 to-purple-200 px-10 w-full h-screen flex flex-col items-center">

            {/* Title Section */}
            <motion.div
                className="text-4xl font-bold text-gray-700 pt-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Departing To
            </motion.div>

            {/* Input Fields Section */}
            <motion.div
                className="grid gap-6 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                {["Enter Roll Number"].map((placeholder, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg p-4 shadow-lg w-4/4 mx-auto"
                        whileHover={{ scale: 1.04 }}
                    >
                        <input
                            type="text"
                            placeholder={placeholder}
                            className="w-full bg-transparent outline-none text-gray-700 text-lg"
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Submit Button */}
            <div className="flex flex-row gap-12">

                <motion.button
                    className="bg-yellow-400 text-white px-6 py-3 rounded-lg mt-10 hover:bg-blue-500 shadow-md transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Home
                </motion.button>
                <motion.button
                    className="bg-green-400 text-white px-6 py-3 rounded-lg mt-10 hover:bg-blue-500 shadow-md transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Market
                </motion.button>
            </div>
        </div>
    );
}

export default Entry_stu;
