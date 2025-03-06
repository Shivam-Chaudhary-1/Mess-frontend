// src/components/Navbar.js
import React, { Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
    const user = useSelector(state => state.user.user);
    const token = useSelector(state => state.user.token);
    // if(user) console.log("user: ", token);
    const [isGlobalAdmin, setIsGlobalAdmin] = useState(false);
    
    useEffect(()=>{
        if(user && user.role==='globalAdmin'){
            setIsGlobalAdmin(true);
        }    
    })
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <nav className="bg-purple-800 text-white shadow-md fixed w-full z-[50]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 text-2xl font-bold">
                        <Link to="/" className="pl-10">Hostel Management</Link>
                    </div>
                    <div className="hidden md:flex space-x-10">
                        <Link to="/" className="hover:text-indigo-300">Home</Link>
                        <Link to="/owner-profile" className="hover:text-indigo-300">Owner Profile</Link>
                        <Link to="/hostel-data" className="hover:text-indigo-300">Hostel Data</Link>
                        {user && token && isGlobalAdmin && <Link to="/global-admin/dashboard" className=" bg-white p-1 px-3 text-center text-black font-bold rounded-full">D</Link>}
                        {/* {user && token && isGlobalAdmin && <Link to="/global-admin/dashboard" className=" bg-white p-1 px-3 text-center text-black font-bold rounded-full">D</Link>} */}
                        {!token && !user && <div className=" flex gap-3">
                            <Link to="/global-admin/logout" className="hover:text-red-400">Logout</Link>
                            <Link to="/global-admin/login" className="hover:text-red-400">Login</Link>
                        </div>}
                    </div>
                </div>
            </div>
        </nav>
        </Suspense>
    );
}

export default Navbar;
