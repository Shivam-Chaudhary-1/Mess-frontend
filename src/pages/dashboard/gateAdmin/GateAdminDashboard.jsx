import React from 'react'
import { Outlet } from 'react-router-dom';
import GateAdminSidebar from './GateAdminSidebar';
import { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const GateAdminDashboard = () => {
  // console.log("hii");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className=' w-full h-auto min-h-[90vh] flex flex-row bg-gray-100'>
      {isSidebarOpen && <GateAdminSidebar setIsSidebarOpen={setIsSidebarOpen}/> }
      {!isSidebarOpen && <MdOutlineKeyboardDoubleArrowRight className=" text-[26px] mt-3 ml-2 cursor-pointer" onClick={()=>setIsSidebarOpen(true)} /> }
      {/* <div className=' w-[15%] h-[50vh] bg-green-300'></div> */}

      <div className=' w-[85%] h-full bg-gray-100 '>
          <Outlet/>
      </div>
    </div>
  )
}

export default GateAdminDashboard;