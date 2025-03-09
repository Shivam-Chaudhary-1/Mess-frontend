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
            // axios.defaults.withCredentials=true;
            // if (localStorage.getItem('token')) {
            //     try {
            //         const {data} = await axios.get(backendUrl + '/global-admin/get-details', {withCredentials: true});
            //         console.log("data: ", data);
            //         const token = data.user.token;
            //         console.log('token', token);
            //         dispatch(login({ user: data.user, token }));
            //     } catch (error) {
            //         console.error("Error fetching details:", error);
            //     }
            // }
            // else{
                dispatch(login({ 
                    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null, 
                    token: localStorage.getItem('token') || null
                }));                
            // }
        };
    
        fetchDetails(); // Call the async function
    }, []);

    return (
        <div>
        <Router>
            <div className="flex">
                <Navbar />

                {/* Main Content */}
                <div className="flex-1 transition-all duration-300 pt-16 ml-0">
                    <Routing />
                </div>
            </div>
        </Router>
        </div>
    );
}

export default App;
