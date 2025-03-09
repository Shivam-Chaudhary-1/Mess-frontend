import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdModeEdit } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setUser } from '../../../slices/authSlice';

const HostelAdminAccount = () => {
    
    const user = useSelector(state => state.user.user);
    const [isFirstNameUpdating, setIsFirstNameUpdating] = useState(false);
    const [isLastNameUpdating, setIsLastNameUpdating] = useState(false);
    const [isEmailUpdating, setIsEmailUpdating] = useState(false);
    const [isContactUpdating, setIsContactUpdating] = useState(false);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [contactNumber, setContactNumber] = useState(user.contactNumber);

    const [loading, setLoading] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const dispatch = useDispatch();

    const updateHandler = async ()=>{
        // e.preventDefault();
        setLoading(true);

        try{
            axios.defaults.withCredentials=true;

            const {data} = await axios.post(backendUrl+'/hostel-admin/update', {firstName, lastName, email, contactNumber});
    
            if(data.success){
                dispatch(setUser({firstName, lastName, email, contactNumber}));
                toast.success("update successfull");
            }
            else{
                toast(data.message);
            }
        } catch(error){
            toast.error(error.message);
        }
        setLoading(false);
    }


    const handleFirstName = () => {
        setIsFirstNameUpdating(!isFirstNameUpdating);
    }
    const handleLastName = () => {
        setIsLastNameUpdating(!isLastNameUpdating);
    }
    const handleEmail = () => {
        setIsEmailUpdating(!isEmailUpdating);
    }
    const handleContact = () => {
        setIsContactUpdating(!isContactUpdating);
    }
    


  return (
    <div className=' text-[18px] w-full h-full bg-gray-100 flex justify-center item-center flex-col gap-4 p-4'>
        <h1 className=' text-center text-3xl font-semibold text-slate-700'>Account Information</h1>
        <div>
        <form className="flex flex-col gap-6 p-6 w-[70%] mx-auto bg-white rounded-lg shadow-lg">
  <div className="flex flex-col gap-6">
    {/* First Name */}
    <div className="flex justify-between items-center border-b pb-2 border-gray-300">
      <div className="flex flex-col w-[80%]">
        <label htmlFor="firstName" className="text-gray-700 font-medium">First Name</label>
        <input 
          disabled={!isFirstNameUpdating} 
          onChange={(e) => setFirstName(e.target.value)} 
          value={firstName} 
          type="text" 
          id="firstName" 
          placeholder="Enter first name" 
          className={`outline-none bg-transparent text-gray-800 text-lg ${isFirstNameUpdating ? "border-b border-gray-500 focus:border-blue-500" : "opacity-60"}`} 
        />
      </div>
      <div className="flex justify-end w-[20%]">
        {!isFirstNameUpdating ? (
          <MdModeEdit onClick={handleFirstName} className="text-gray-500 cursor-pointer hover:text-green-800" size={20} />
        ) : (
          <div className="flex gap-2">
            <button 
              disabled={loading} 
              onClick={() => { updateHandler(); setIsFirstNameUpdating(false); }} 
              className="bg-green-800 hover:bg-green-700 text-white px-3 py-1 rounded-md transition"
            >Save</button>
            <button 
              disabled={loading} 
              onClick={() => { setIsFirstNameUpdating(false); setFirstName(user.firstName); }} 
              className="border border-gray-500 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-200 transition"
            >Cancel</button>
          </div>
        )}
      </div>
    </div>

    {/* Last Name */}
    <div className="flex justify-between items-center border-b pb-2 border-gray-300">
      <div className="flex flex-col w-[80%]">
        <label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</label>
        <input 
          disabled={!isLastNameUpdating} 
          onChange={(e) => setLastName(e.target.value)} 
          value={lastName} 
          type="text" 
          id="lastName" 
          placeholder="Enter last name" 
          className={`outline-none bg-transparent text-gray-800 text-lg ${isLastNameUpdating ? "border-b border-gray-500 focus:border-blue-500" : "opacity-60"}`} 
        />
      </div>
      <div className="flex justify-end w-[20%]">
        {!isLastNameUpdating ? (
          <MdModeEdit onClick={handleLastName} className="text-gray-500 cursor-pointer hover:text-green-800" size={20} />
        ) : (
          <div className="flex gap-2">
            <button 
              disabled={loading} 
              onClick={() => { updateHandler(); setIsLastNameUpdating(false); }} 
              className="bg-green-800 hover:bg-green-700 text-white px-3 py-1 rounded-md transition"
            >Save</button>
            <button 
              disabled={loading} 
              onClick={() => { setIsLastNameUpdating(false); setLastName(user.lastName); }} 
              className="border border-gray-500 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-200 transition"
            >Cancel</button>
          </div>
        )}
      </div>
    </div>

    {/* Email (Unchangeable) */}
    <div className="flex justify-between items-center border-b pb-2 border-gray-300">
      <div className="flex flex-col w-[80%]">
        <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
        <input 
          disabled 
          value={email} 
          type="email" 
          id="email" 
          className="outline-none bg-transparent text-gray-800 text-lg opacity-60 cursor-not-allowed" 
        />
      </div>
      <div className="flex justify-end w-[20%]">
        <button disabled className="border border-gray-400 text-gray-500 px-3 py-1 rounded-md">Unchangeable</button>
      </div>
    </div>

    {/* Phone Number */}
    <div className="flex justify-between items-center border-b pb-2 border-gray-300">
      <div className="flex flex-col w-[80%]">
        <label htmlFor="phone" className="text-gray-700 font-medium">Phone</label>
        <input 
          disabled={!isContactUpdating} 
          onChange={(e) => setContactNumber(e.target.value)} 
          value={contactNumber} 
          type="tel" 
          id="phone" 
          placeholder="Enter phone number" 
          className={`outline-none bg-transparent text-gray-800 text-lg ${isContactUpdating ? "border-b border-gray-500 focus:border-blue-500" : "opacity-60"}`} 
        />
      </div>
      <div className="flex justify-end w-[20%]">
        {!isContactUpdating ? (
          <MdModeEdit onClick={handleContact} className="text-gray-500 cursor-pointer hover:text-green-800" size={20} />
        ) : (
          <div className="flex gap-2">
            <button 
              disabled={loading} 
              className="bg-green-800 hover:bg-green-700 text-white px-3 py-1 rounded-md  transition"
            >Save</button>
            <button 
              disabled={loading} 
              onClick={() => { setIsContactUpdating(false); setContactNumber(user.contactNumber); }} 
              className="border border-gray-500 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-200 transition"
            >Cancel</button>
          </div>
        )}
      </div>
    </div>
  </div>
</form>

        </div>
    </div>
  )
}

export default HostelAdminAccount