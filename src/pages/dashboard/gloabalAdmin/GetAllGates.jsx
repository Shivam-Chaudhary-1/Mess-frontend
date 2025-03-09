import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { toast } from "react-toastify";
import { MdOutlineArrowDropUp } from "react-icons/md";


function GetAllGates() {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [gateAdmins, setGateAdmin] = useState([]);
    const [gate, setGate] = useState("None");
    
    useEffect(() => {
        const fetchData = async () => {
            axios.defaults.withCredentials=true;
            try {
                const { data } = await axios.get(backendUrl + "/gate-admin/get-all-gates");
                
                console.log("data gate", data);
                if(data.success){
                    setGateAdmin(data.gateAdmins);
                    console.log("admins", gateAdmins);
                }
                else{
                   toast.error(data.message);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log("Updated gateAdmins:", gateAdmins);
    }, [gateAdmins]);

    // Function to navigate to the details page with specific content
    const handleClick = async (gate) => {
        axios.defaults.withCredentials = true;
        
        try{
            
            const {data} = await axios.post(backendUrl+'/gate-admin/delete-gate', {gate});
            
            console.log("gate data", data.success);

            if(data.success){
                toast.success(data.message);
                setGateAdmin(gateAdmins.filter((gateAdmin) => gateAdmin.gate !== gate));
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
            <h1 className=" text-3xl text-green-800 font-semibold text-center mt-6">Gates </h1>
            <div className="flex flex-col gap-4 mt-4 w-[90%]">
            <div className=" w-full flex justify-between px-6 pr-12 bg-white py-4 shadow-md rounded-lg border-b-2 border-green-500">
                <p className="font-semibold text-gray-700">Gate Name</p>
                <p className="font-semibold text-gray-700">Gate Admin</p>
                <p className="font-semibold text-gray-700">Actions</p>
            </div>
               {gateAdmins?.map((gateAdmin, index) => (
                 <div key={index} className="flex flex-col gap-4 items-center p-4 bg-white shadow-lg rounded-lg">
                    <div className=" w-full flex justify-between px-6">
                        <p className="text-gray-700 font-medium">{gateAdmin.gate}</p>
                        <p className="text-gray-700 font-medium">{gateAdmin.email}</p>
                        <div className="flex gap-4">
                           <MdDelete
                           onClick={ ()=>{
                            handleClick(gateAdmin.gate);
                            setGate(gateAdmin.gate)}} className="cursor-pointer text-red-600 text-xl hover:text-red-500 transition" />
                        </div>
                    </div>
                 </div>
               ))}
            </div>
        </div>
    );
}

export default GetAllGates;
