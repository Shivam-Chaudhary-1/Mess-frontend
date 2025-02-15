import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function SideBarLinks() {
    return (
        <div className="p-6 flex flex-col space-y-5 ">
            <Link to="/" className="text-md hover:text-indigo-300">
                HomePage
            </Link>
            <Link to="/hostel-data" className="text-md hover:text-indigo-300">
                Visit Hostel
            </Link>
            <Link to="/owner-profile" className="text-md hover:text-indigo-300">
                Owner Profile
            </Link>
            <Link to="/hostel-admin-info" className="text-md hover:text-indigo-300">
                Hostel Admin Info
            </Link>
            <Link to="/hostel-info" className="text-md hover:text-indigo-300">
                Hostel Info
            </Link>
            <Link to="/create-stu" className="text-md hover:text-indigo-300">
                Create Student
            </Link>
            <Link to="/delete-stu" className="text-md hover:text-indigo-300">
                Delete Student
            </Link>
            <Link to="/update-stu" className="text-md hover:text-indigo-300">
                Update Student
            </Link>
            <Link to="/entry-stu" className="text-md hover:text-indigo-300">
                Entry Student
            </Link>
            <Link to="/logout" className="text-md mt-auto hover:text-red-400">
                Logout
            </Link>
        </div>
    );
}

export default SideBarLinks;
