import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburger } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SideBarLinks from "./components/SideBarLinks";
import Routing from "./components/Routing";
function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Router>
            <div className="flex">
                <Navbar />
                <motion.div
                    className={`bg-purple-700 text-white h-screen flex flex-col space-y-6 fixed z-30 pt-16 ${sidebarOpen ? "w-[22%]" : "w-0"
                        } overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={{ width: sidebarOpen ? "22%" : "0" }}
                    transition={{ duration: 0.3 }}
                >
                    {sidebarOpen && (
                        < SideBarLinks />
                    )}
                </motion.div>

                {/* Sidebar Overlay */}
                {sidebarOpen && (
                    <div
                        // className="fixed inset-0 z-20 bg-black opacity-5"
                        onClick={toggleSidebar}
                    ></div>
                )}

                <button
                    onClick={toggleSidebar}
                    className="text-gray-700 bg-white p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none fixed top-4 left-4 z-[60]"
                >
                    {sidebarOpen ? <RxCross2 size={24} /> : <GiHamburger size={24} />}
                </button>

                {/* Main Content */}
                <div className={`flex-1 transition-all duration-300 pt-16 ${sidebarOpen ? 'ml-[22%]' : 'ml-0'}`}>
                    <Routing />
                </div>
            </div>
        </Router>
    );
}

export default App;
