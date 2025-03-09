import React from 'react'
import { Outlet } from 'react-router-dom';
import GlobalAdminSideBar from './globalAdminSideBar';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from 'react';

const GloabalAdminDashboard = () => {
  // console.log("hii");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className=' h-auto min-h-[90vh] flex flex-row bg-gray-100'>
      {isSidebarOpen && <GlobalAdminSideBar setIsSidebarOpen={setIsSidebarOpen}/> }
      {!isSidebarOpen && <MdOutlineKeyboardDoubleArrowRight className=" text-[26px] mt-3 ml-2 cursor-pointer" onClick={()=>setIsSidebarOpen(true)} /> }
      {/* <div className=' w-[15%] h-[50vh] bg-green-300'></div> */}

      <div className=' w-[85%] h-full bg-gray-100 mt-12'>
        <h1 className="text-4xl font-extrabold text-slate-700 text-center">
          Global Admin Dashboard
        </h1>
          <Outlet/>
      </div>
    </div>
  )
}

export default GloabalAdminDashboard;