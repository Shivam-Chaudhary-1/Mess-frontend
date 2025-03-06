import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import { logout } from '../../../slices/authSlice'

const paths = [
    {
        name:'Account',
        path:'/global-admin/dashboard'
    },
    {
        name:'Create hostel',
        path:'/global-admin/dashboard/create-hostel'
    },
    {
        name:'Hostels',
        path:'/global-admin/dashboard/get-all-hostels'
    },
    {
        name:'Logout',
    }
]

const GlobalAdminSideBar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const logOutHandler = async () =>{
        axios.defaults.withCredentials = true;

        try{

            const {data} = await axios.post(backendUrl+'/global-admin/logout');
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
    <div className=' h-[50vh] w-[15%] bg-orange-300'>
       {paths.map((item, index) => 
                item.name === "Logout" ? (
                    <button onClick={ ()=>logOutHandler()} key={index} className=" block w-full flex justify-start p-2 text-red-600 hover:bg-red-400">
                        {item.name}
                    </button>
                ) : (
                    <Link key={index} to={item.path} className={` ${location.pathname===item.path ? "text-white": "text-black"} block p-2 hover:bg-orange-500`}>
                        {item.name}
                    </Link>
                )
            )}
    </div>
  )
}

export default GlobalAdminSideBar