// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
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
                        <Link to="/logout" className="hover:text-red-400">Logout</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
