import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import { logout } from '../../../slices/authSlice'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


const paths = [
    {
        name:'Account',
        path:'/hostel-admin/dashboard'
    },
    {
        name:'Create student',
        path:'/hostel-admin/dashboard/create-student'
    },
    {
        name:'All students',
        path:'/hostel-admin/dashboard/get-all-students'
    },
    {
        name:'Delete student',
        path:'/hostel-admin/dashboard/delete-student'
    },
    {
        name:'Search student',
        path:'/hostel-admin/dashboard/search-student'
    },
    {
        name:'Current status',
        path:'/hostel-admin/dashboard/current-status'
    },
    {
        name:'Logout',
    }
]

const HostelAdminSidebar = ({setIsSidebarOpen}) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const logOutHandler = async () =>{
        axios.defaults.withCredentials = true;

        try{

            const {data} = await axios.post(backendUrl+'/hostel-admin/logout');
            console.log("data: ", data);
            if(data.success){
                dispatch(logout());
                toast.success(data.message);
                navigate('/');
            }
            else{
                toast.error(data.message);
            }
        } catch(error){
            toast.error(error.message);
        }
    }
    
  return (
    <div className=' h-[100vh] w-[15%] bg-[#37474F]'>
       <div className=' text-white flex justify-end mr-5 h-9 items-end text-[26px] mt-1 cursor-pointer'>
       <MdOutlineKeyboardDoubleArrowLeft onClick={ ()=>setIsSidebarOpen(false)} />
       </div>
       {paths.map((item, index) => 
                item.name === "Logout" ? (
                    <button onClick={ ()=>logOutHandler()} key={index} className=" block w-full flex justify-start p-2 hover:text-white text-[#FF9800] hover:bg-red-700">
                        {item.name}
                    </button>
                ) : (
                    <Link key={index} to={item.path} className={` ${location.pathname===item.path ? "text-white": "text-gray-300"} block p-2 hover:bg-orange-500`}>
                        {item.name}
                    </Link>
                )
            )}
    </div>
  )
}

export default HostelAdminSidebar