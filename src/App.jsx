import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiHamburger } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SideBarLinks from "./components/SideBarLinks";
import Routing from "./components/Routing";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./slices/authSlice";
import { login } from "./slices/authSlice";
import axios from "axios";
function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const dispatch = useDispatch();
    // const user = useSelector(state => state.user.user);
   
    
    useEffect(() => {
        const fetchDetails = async () => {
            axios.defaults.withCredentials=true;
            if (localStorage.getItem('token')) {
                try {
                    const {data} = await axios.get(backendUrl + '/global-admin/get-details', {withCredentials: true});
                    console.log("data: ", data);
                    const token = data.user.token;
                    console.log('token', token);
                    dispatch(login({ user: data.user, token }));
                } catch (error) {
                    console.error("Error fetching details:", error);
                }
            }
        };
    
        fetchDetails(); // Call the async function
    }, []);

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
                    {sidebarOpen ? <RxCross2 size={24} className=" text-purple-800" /> : <GiHamburger size={24} className=" text-purple-800" />}
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
