import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';


const CreateHostel = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [hostelAdmin, setHostelAdmin] = useState({
      firstName: "",
      lastName: "",
      hostel: "",
      email: "",
      contactNumber: "",
      password: "",
      confirmPassword: "",
    });

    const navigate = useNavigate();

  const handleChange = (e) => {
    setHostelAdmin({ ...hostelAdmin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hostel Admin Data:", hostelAdmin);
    axios.defaults.withCredentials = true;
    try{
        const {data} = await axios.post(backendUrl+'/hostel-admin/create', hostelAdmin);
        console.log("data: ", data);
        if(data.success){
            toast.success(data.message);
            navigate('/global-admin/dashboard/get-all-hostels');
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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-10">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 border-t-4 border-green-600">
          <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
            Create Hostel
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-lg font-medium text-gray-700">
                Hostel Admin First Name
              </label>
              <input
                required
                type="text"
                id="firstName"
                name="firstName"
                value={hostelAdmin.firstName}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Enter first name"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-lg font-medium text-gray-700">
                Hostel Admin Last Name
              </label>
              <input
                required
                type="text"
                id="lastName"
                name="lastName"
                value={hostelAdmin.lastName}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Enter last name"
              />
            </div>

            {/* Hostel Name */}
            <div className="flex flex-col">
              <label htmlFor="hostel" className="text-lg font-medium text-gray-700">
                Select Hostel Name
              </label>
              <select
                required
                id="hostel"
                name="hostel"
                value={hostelAdmin.hostel}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600 bg-white"
              >
                <option value="" disabled>Select a hostel</option>
                <option value="Neelkanth">Neelkanth</option>
                <option value="Himadari">Himadari</option>
                <option value="Himgiri">Himgiri</option>
                <option value="Kelash">Kelash</option>
              </select>
            </div>

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
                value={hostelAdmin.email}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Enter email"
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col">
              <label htmlFor="contactNumber" className="text-lg font-medium text-gray-700">
                Contact Number
              </label>
              <input
                required
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={hostelAdmin.contactNumber}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Enter contact number"
              />
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
                value={hostelAdmin.password}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Enter password"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="text-lg font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                required
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={hostelAdmin.confirmPassword}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Confirm password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 rounded-md text-lg font-bold hover:bg-yellow-700 transition duration-200 shadow-lg"
            >
              Create Hostel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateHostel;
