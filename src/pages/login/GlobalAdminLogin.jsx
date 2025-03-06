import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../slices/authSlice';
import { useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';


const GlobalAdminLogin = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    async function LoginGlobalAdmin(e){
        e.preventDefault();
        setLoading(true);
        try{
            const {data} = await axios.post(backendUrl + '/global-admin/login', {email, password}, {withCredentials:true});
            console.log("data: ",data);
            if(data.success){
                toast.success(data.message);
                // localStorage.setItem('token', JSON.stringify(data.token));
                dispatch(login(data.user));
                navigate('/global-admin/dashboard');
            }
        } catch(error){
            toast.error(error.message);
        }
        setLoading(false);
    }

  return (
    <div className="bg-purple-100 w-full flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-6">Global Admin Login</h1>

          {loading && <div className=" h-[500px] flex  items-center justify-center"><Loader /></div> }

          { !loading && <div className="w-[50%] bg-white shadow-lg rounded-lg p-6">
                <form onSubmit={LoginGlobalAdmin} className="flex flex-col gap-4">
                    <label className="font-semibold">Email:</label>
                    <input
                        required
                        type="email"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        value={email}
                       onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                     <label className="font-semibold">Password</label>
                    <input
                        required
                         type="password"
                         className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                   />
                   <button
                        className="mt-4 bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition"
                        type="submit"
                    >
                        Login
                     </button>
                </form>
            </div> }
    </div>
  )
}

export default GlobalAdminLogin