import React from 'react'
import { Outlet } from 'react-router-dom';
import GlobalAdminSideBar from './globalAdminSideBar';

const GloabalAdminDashboard = () => {
  // console.log("hii");
  return (
    <div className=' h-auto min-h-[90vh] flex flex-row bg-purple-100'>
      <GlobalAdminSideBar/>
      {/* <div className=' w-[15%] h-[50vh] bg-green-300'></div> */}

      <div className=' w-[85%] h-full bg-purple-100 felx flex-col gap-4 p-4'>
          <h1 className='text-3xl font-bold text-gray-800 text-center'>Dashboard</h1>
          <Outlet/>
      </div>
    </div>
  )
}

export default GloabalAdminDashboard;