import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import HostelAdminSidebar from "./HostelAdminSidebar";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const HostelAdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="h-auto min-h-screen flex flex-row bg-gray-100 ">
      {/* Sidebar */}
      {isSidebarOpen && <HostelAdminSidebar setIsSidebarOpen={setIsSidebarOpen} />}
      {!isSidebarOpen && <MdOutlineKeyboardDoubleArrowRight className=" text-[26px] mt-3 ml-2 cursor-pointer" onClick={()=>setIsSidebarOpen(true)} /> }

      {/* Main Content */}
      <div className="w-full min-h-screen bg-gray-100 flex flex-col gap-6 p-6">
        <h1 className="text-4xl font-extrabold text-slate-700 text-center">
          Hostel Admin Dashboard
        </h1>
        <Outlet />
      </div>
    </div>
  );
};

export default HostelAdminDashboard;
