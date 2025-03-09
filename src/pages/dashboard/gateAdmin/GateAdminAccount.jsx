import React from 'react'
import { useSelector } from 'react-redux'

const GateAdminAccount = () => {
  
    const user = useSelector(state => state.user.user);
    console.log("gate user", user.gate);
    
  return (
    <div className='w-full h-full bg-gray-100 mt-9 flex justify-center items-center text-center flex-col gap-6 p-6'>
    {/* Heading with a bold, prominent font */}
    <h1 className='text-4xl font-semibold text-gray-800'>
        {user.gate}
    </h1>

    {/* Wrapper for content with some padding and box-shadow for elevation */}
    <div className='w-[90%] sm:w-[70%] md:w-[60%] flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg'>
        {/* You can add content here */}
        <p className='text-lg text-gray-600'>
            Welcome to the {user.gate} gate
        </p>
        <p className='text-lg text-gray-600'>
            Email for this gate is : {user.email}
        </p>
    </div>
</div>

  )
}

export default GateAdminAccount