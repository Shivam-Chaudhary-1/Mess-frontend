import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import nbhImage from "../../../assets/nbh.jpeg";
import himgiriImage from '../../../assets/himgiri.jpeg'
import { motion } from "framer-motion";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { toast } from "react-toastify";
import { MdOutlineArrowDropUp } from "react-icons/md";


function GetAllHostels() {
    const navigate = useNavigate(); // React Router navigation
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [admins, setAdmins] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hostel, setHostel] = useState("None");
    
    useEffect(() => {
        const fetchData = async () => {
            axios.defaults.withCredentials=true;
            try {
                const { data } = await axios.get(backendUrl + "/hostel-admin/get-all-hostels");
                if(data.success){
                    setAdmins(data.admins);
                    console.log(admins);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log("Updated admins:", admins);
    }, [admins]);

    // Function to navigate to the details page with specific content
    const handleClick = async (hostel) => {
        console.log("hostel", hostel)
        axios.defaults.withCredentials = true;

        try{

            const {data} = await axios.delete(backendUrl+'/hostel-admin/delete-hostel', {data:{hostel}});

            if(data.success){
                toast.success(data.message);
                setAdmins(admins.filter((admin) => admin.hostel !== hostel));
            }
            else{
                toast.error(data.message);
            }

        } catch(error){
            toast.error(error.message);
        }
    };

    return (
<div className="bg-gray-100 w-full min-h-screen flex flex-col items-center">
  <h1 className="text-3xl text-green-800 font-semibold text-center mt-6">
    Hostels
  </h1>

  <div className="flex flex-col gap-4 mt-4 w-[90%]">
    {/* Table Header */}
    <div className="w-full flex justify-between px-6 pr-12 bg-white py-4 shadow-md rounded-lg border-b-2 border-green-500">
      <p className="font-semibold text-gray-700">Hostel Name</p>
      <p className="font-semibold text-gray-700">Hostel Admin</p>
      <p className="font-semibold text-gray-700">Actions</p>
    </div>

    {/* Hostel List */}
    {admins?.map((admin, index) => (
      <div key={index} className="flex flex-col gap-4 items-center p-4 bg-white shadow-lg rounded-lg">
        <div className="w-full flex justify-between px-6">
          <p className="text-gray-700 font-medium">{admin.hostel}</p>
          <p className="text-gray-700 font-medium">{admin.firstName} {admin.lastName}</p>

          <div className="flex gap-4">
            {/* Dropdown Button */}
            {isMenuOpen && hostel === admin.hostel ? (
              <MdOutlineArrowDropUp
                onClick={() => {
                  setIsMenuOpen(false);
                  setHostel("none");
                }}
                className="cursor-pointer text-[26px] text-gray-700 "
              />
            ) : (
              <MdOutlineArrowDropDown
                onClick={() => {
                  setIsMenuOpen(true);
                  setHostel(admin.hostel);
                }}
                className="cursor-pointer text-[26px] text-gray-700 "
              />
            )}

            {/* Delete Button */}
            <MdDelete
              onClick={() => {
                handleClick(admin.hostel);
                setHostel(admin.hostel);
              }}
              className="cursor-pointer text-red-600 text-xl hover:text-red-500 transition"
            />
          </div>
        </div>

        {/* Expandable Admin Details */}
        {isMenuOpen && hostel === admin.hostel && (
          <div className="flex h-auto flex-col gap-4 w-full border-t border-gray-500 py-2">
            <div className="w-full flex justify-between px-6">
              <p className="text-gray-700 font-semibold">Email</p>
              <p className="text-gray-700">{admin.email}</p>
            </div>
            <div className="w-full flex justify-between px-6">
              <p className="text-gray-700 font-semibold">Contact Number</p>
              <p className="text-gray-700">{admin.contactNumber}</p>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

    );
}

export default GetAllHostels;
