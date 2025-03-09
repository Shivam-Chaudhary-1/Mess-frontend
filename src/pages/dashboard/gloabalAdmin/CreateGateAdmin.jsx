import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';


const CreateGateAdmin = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [gateAdmin, setGateAdmin] = useState({
      email: "",
      gate: "",
      password: "",
      confirmPassword: "",
    });

    const navigate = useNavigate();

  const handleChange = (e) => {
    setGateAdmin({ ...gateAdmin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Gate Admin Data:", gateAdmin);
    axios.defaults.withCredentials = true;
    try{
        const {data} = await axios.post(backendUrl+'/gate-admin/create', gateAdmin);
        console.log("data: ", data);
        if(data.success){
            toast.success(data.message);
            navigate('/global-admin/dashboard/get-all-gates');
        }
        else{
            // console.log(data.message);
            toast.error(data.message);
        }
    } catch(error){
        toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
      <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">
        Create Gate Admin
      </h1>
  
      <form className="space-y-5" onSubmit={handleSubmit}>
  
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={gateAdmin.email}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-1 focus:ring-green-600 bg-white"
            placeholder="Enter email"
          />
        </div>
  
        {/* Gate Selection */}
        <div className="flex flex-col">
          <label htmlFor="gate" className="text-lg font-medium text-gray-700">
            Select Gate
          </label>
          <select
            required
            id="gate"
            name="gate"
            value={gateAdmin.gate}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-1 focus:ring-green-600 bg-white"
          >
            <option value="" disabled>Select a gate</option>
            <option value="Gate 1">Gate 1</option>
            <option value="Gate 2">Gate 2</option>
          </select>
        </div>
  
        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-medium text-gray-700">
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            value={gateAdmin.password}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-1 focus:ring-green-600 bg-white"
            placeholder="Enter password"
          />
        </div>
  
        {/* Confirm Password */}
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="text-lg font-medium text-green-700">
            Confirm Password
          </label>
          <input
            required
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={gateAdmin.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-1 focus:ring-green-600 bg-white"
            placeholder="Confirm password"
          />
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-md text-lg font-bold hover:bg-yellow-600 transition duration-200 shadow-lg"
        >
          Create Gate Admin
        </button>
  
      </form>
    </div>
  </div>
  
  );
};

export default CreateGateAdmin;
