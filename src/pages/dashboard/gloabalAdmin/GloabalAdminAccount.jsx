import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdModeEdit } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setUser } from '../../../slices/authSlice';

const GloabalAdminAccount = () => {
    
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

            const {data} = await axios.post(backendUrl+'/global-admin/update', {firstName, lastName, email, contactNumber});
    
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
    <div className=' w-full h-full bg-purple-100 flex justify-center item-center flex-col gap-4 p-4'>
        <h1 className=' text-center text-3xl font-semibold text-gray-800'>Account Information</h1>
        <div>
            <form className='flex flex-col gap-4 p-4 lg:w-1/2 mx-auto bg-gray-100 rounded-md p-6'>
                <div className='flex flex-col gap-4'>
                
                    <div className='flex  gap-2 justify-between border-b pb-2 border-black'>
                        <div className='flex  gap-2 justify-between w-[80%]'>
                        <label htmlFor="name">Firts name</label>
                        <input disabled={!isFirstNameUpdating} onChange={ (e) =>setFirstName(e.target.value)} value={firstName} type="text" id='name' placeholder='Name' className=' opacity-60 outline-none bg-gray-100' />
                        </div>
                        <div className=' pr-3 w-[30%] flex justify-end'>
                            {!isFirstNameUpdating ? <MdModeEdit onClick={handleFirstName} className=' cursor-pointer' /> : <div className=' flex gap-2'>
                                <button disabled={loading} 
                                                 onClick={()=>{
                                                    updateHandler();
                                                    setIsFirstNameUpdating(false);
                                                 }}
                                                 className=' border border-black text-black text-white rounded-md px-2'>Save</button>
                                <button disabled={loading} 
                                        onClick={ () => {
                                            setIsFirstNameUpdating(false);
                                            setFirstName(user.firstName);
                                        }}
                                        className=' border border-black text-red-700 text-white rounded-md px-2'  >Cancel</button>
                            </div>}
                        </div>
                    </div>

                    <div className='flex  gap-2 justify-between border-b pb-2 border-black'>
                        <div className='flex  gap-2 justify-between w-[80%]'>
                        <label htmlFor="name">Last name</label>
                        <input disabled={!isLastNameUpdating} onChange={ (e) =>setLastName(e.target.value)}  value={lastName} type="text" id='name' placeholder='Name' className=' opacity-60 outline-none bg-gray-100' />
                        </div>
                        <div className=' pr-3 w-[30%] flex justify-end'>
                            {!isLastNameUpdating ? <MdModeEdit onClick={handleLastName} className=' cursor-pointer' /> : <div className=' flex gap-2'>
                                <button disabled={loading}
                                         onClick={()=>{
                                                    updateHandler();
                                                    setIsLastNameUpdating(false);
                                                 }}
                                         className='border border-black text-black text-white rounded-md px-2'>Save</button>
                                <button disabled={loading} 
                                        onClick={ () => {
                                            setIsLastNameUpdating(false);
                                            setLastName(user.lastName);
                                        }}
                                        className='border border-black text-red-700 text-white rounded-md px-2'>Cancel</button>
                            </div>}
                        </div>
                    </div>

                    <div className='flex  gap-2 justify-between border-b pb-2 border-black'>
                        <div className='flex  gap-2 justify-between w-[80%]'>
                        <label htmlFor="email">Email</label>
                        <input disabled={!isEmailUpdating} onChange={ (e) =>setEmail(e.target.value)}  value={email} type="email" id='email' placeholder='Email' className=' opacity-60 outline-none bg-gray-100' />
                        </div>
                        <div className=' pr-3 w-[30%] flex justify-end'>
                            {!isEmailUpdating ? <MdModeEdit onClick={handleEmail} className=' cursor-pointer' /> : <div className=' flex gap-2'>
                                <button disabled={loading} className='border border-black text-black text-white rounded-md px-2'>Save</button>
                                <button disabled={loading} 
                                        onClick={ () => {
                                            setIsEmailUpdating(false);
                                            setEmail(user.email);
                                        }}
                                        className='border border-black text-red-700 text-white rounded-md px-2'>Cancel</button>
                            </div>}
                        </div>
                    </div>

                    <div className='flex  gap-2 justify-between border-b pb-2 border-black'>
                        <div className='flex  gap-2 justify-between w-[80%]'>
                        <label htmlFor="phone">Phone</label>
                        <input disabled={!isContactUpdating} onChange={ (e) =>setContactNumber(e.target.value)}  value={contactNumber} type="tel" id='phone' placeholder='Phone' className=' opacity-60 outline-none bg-gray-100' />
                        </div>
                        <div className=' pr-3 w-[30%] flex justify-end'>
                            {!isContactUpdating ? <MdModeEdit onClick={handleContact} className=' cursor-pointer' /> : <div className=' flex gap-2'>
                                <button disabled={loading} className='border border-black text-black text-white rounded-md px-2'>Save</button>
                                <button disabled={loading} 
                                        onClick={ () => {
                                            setIsContactUpdating(false);
                                            setContactNumber(user.contactNumber);
                                        }}
                                        className='border border-black text-red-700 text-white rounded-md px-2'>Cancel</button>
                            </div>}
                        </div>
                    </div>

                    {/* <div className='flex flex-col gap-2'>
                        <button className='bg-purple-700 text-white p-2 rounded-md'>Update</button>
                    </div> */}

                </div>
            </form>
        </div>
    </div>
  )
}

export default GloabalAdminAccount