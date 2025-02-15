import { motion } from "framer-motion";

function OwnerProfile() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-200 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full flex flex-col items-center space-y-4"
            >
                {/* Profile Image */}
                <motion.img
                    src="https://media.licdn.com/dms/image/v2/D5603AQGaUkVOpmUD8A/profile-displayphoto-shrink_200_200/B56ZTk6MLkHsAY-/0/1739007249454?e=2147483647&v=beta&t=CH5ETV6JO10Dibts_uWRs6c-28k2_IV-FT9uHF2WUT8"
                    alt="Hostel Admin"
                    className="w-32 h-32 rounded-full border-4 border-purple-400 shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                />

                {/* Name */}
                <motion.h2
                    className="text-2xl font-bold text-gray-800"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    The ULTIMATE OWNER
                </motion.h2>

                {/* Email */}
                <motion.p
                    className="text-gray-600 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    pxxx
                </motion.p>
            </motion.div>
        </div>
    );
}

export default OwnerProfile;
