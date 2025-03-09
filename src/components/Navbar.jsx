// src/components/Navbar.js
import React, { Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
    const user = useSelector(state => state.user.user);
    const token = useSelector(state => state.user.token);
    // if(user) console.log("user: ", user);
    // if(token) console.log("token: ", token);
    const [isGlobalAdmin, setIsGlobalAdmin] = useState(false);
    const [isHostelAdmin, setIsHostelAdmin] = useState(false);
    const [isGateAdmin, setIsGateAdmin] = useState(false);
    
    useEffect(()=>{
        if(user && user?.role==='globalAdmin'){
            setIsGlobalAdmin(true);
            setIsHostelAdmin(false);
            setIsGateAdmin(false);
        }
        if(user && user?.role==='hostel-admin'){
            setIsHostelAdmin(true);
            setIsGlobalAdmin(false);
            setIsGateAdmin(false);
        }
        if(user && user.role==='gate-admin'){
            setIsGateAdmin(true);
            setIsGlobalAdmin(false);
            setIsHostelAdmin(false);
        }
    })
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <nav className="bg-[#263238] text-[#F9F5EB] shadow-md fixed w-full z-[50]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 text-2xl font-bold">
                        <Link to="/" className="pl-10">Hostel Management</Link>
                    </div>
                    <div className="hidden md:flex space-x-10">
                        {/* <Link to="/" className="hover:text-indigo-300">Home</Link> */}
                        {user && isGlobalAdmin && <Link to="/global-admin/dashboard" className=" bg-white py-3 px-3 text-center text-black font-bold rounded-full bg-[#F9F5EB]">GD</Link>}
                        {user && isHostelAdmin && <Link to="/hostel-admin/dashboard" className=" bg-white py-3 px-3 text-center text-black font-bold rounded-full bg-[#F9F5EB]">HD</Link>}
                        {user && isGateAdmin && <Link to="/gate-admin/dashboard" className=" bg-white py-3 px-3 text-center text-black font-bold rounded-full bg-[#F9F5EB]">GD</Link>}
                        { !user && <div className=" flex gap-3">
                            <Link to="/signup" className="hover:text-red-400 p-[5px] px-[10px] border border-white">Signup</Link>
                            <Link to="/login" className="hover:text-red-400 p-[5px] px-[10px] border border-white">Login</Link>
                        </div>}
                    </div>
                </div>
            </div>
        </nav>
        </Suspense>
    );
}

export default Navbar;
