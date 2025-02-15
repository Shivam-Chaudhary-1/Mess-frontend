import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function AdminDetails() {
    const location = useLocation();
    const { hostelName, isAdding } = location.state || {};

    const [adminName, setAdminName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            className="bg-purple-100 w-full h-screen flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Title with animation */}
            <motion.h1
                className="text-3xl font-bold mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {isAdding ? "Add Hostel Admin Info" : "Admin Details"}
            </motion.h1>

            {/* Motion Card */}
            <motion.div
                className="w-[50%] bg-white shadow-lg rounded-lg p-6 relative cursor-pointer"
                onClick={() => setExpanded(!expanded)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {isAdding ? (
                    <motion.form
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <label className="font-semibold">Admin Name:</label>
                        <motion.input
                            type="text"
                            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            value={adminName}
                            onChange={(e) => setAdminName(e.target.value)}
                            placeholder="Enter admin name"
                            whileFocus={{ scale: 1.02 }}
                        />

                        <label className="font-semibold">Contact:</label>
                        <motion.input
                            type="text"
                            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="Enter contact number"
                            whileFocus={{ scale: 1.02 }}
                        />

                        <label className="font-semibold">Email:</label>
                        <motion.input
                            type="email"
                            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            whileFocus={{ scale: 1.02 }}
                        />

                        <motion.button
                            className="mt-4 bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Save Admin Info
                        </motion.button>
                    </motion.form>
                ) : (
                    <div>
                        {/* Admin Details */}
                        <motion.h2
                            className="text-xl font-semibold text-gray-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {hostelName}
                        </motion.h2>

                        <motion.p className="mt-2 text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                            <strong>Name:</strong> Denver
                        </motion.p>
                        <motion.p className="mt-2 text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            <strong>Contact:</strong> 0000554857
                        </motion.p>
                        <motion.p className="mt-2 text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                            <strong>Email:</strong> xyz23@gmail.com
                        </motion.p>

                        {/* Expandable Section */}
                        <AnimatePresence>
                            {expanded && (
                                <motion.div
                                    className="mt-4 border-t pt-4"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-gray-700"><strong>Address:</strong> XYZ Street, City</p>
                                    <p className="text-gray-700"><strong>Office Hours:</strong> 9 AM - 6 PM</p>
                                    <p className="text-gray-700"><strong>Additional Notes:</strong> Available for queries</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Expand/Collapse Arrow */}
                        <motion.div
                            className="absolute top-4 right-4 text-gray-500"
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            ▼
                        </motion.div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

export default AdminDetails;