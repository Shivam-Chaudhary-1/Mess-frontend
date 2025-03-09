import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function DeleteStudent() {
    const [rollNumber, setRollNumber] = useState("");
    const user = useSelector(state=>state.user.user);
    const hostel = user.hostel;

    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Backend URL from environment variables

    const handleDelete = async () => {
        axios.defaults.withCredentials=true;
        try {
            const { data } = await axios.post(`${backendUrl}/student/auth/delete-student`, { rollNumber:rollNumber.toLocaleLowerCase(), hostel });

            if (data.success) {
                toast.success(data.message);
                setRollNumber("");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(data.message);
            console.error(error);
        }
    };

    return (
        <div className="bg-gray-100 px-6 w-full h-screen flex flex-col items-center">
            {/* Title */}
            <h1 className="text-3xl font-semibold text-slate-700 mt-16">Delete Student</h1>

            {/* Input Field */}
            <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-md w-80 mt-6 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-400 transition-all">
                <input
                    type="text"
                    placeholder="Enter Roll Number"
                    className="w-full bg-transparent outline-none text-gray-700 text-lg placeholder-gray-400"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                />
            </div>

            {/* Delete Button */}
            <button
                className="bg-red-500 text-[18px] text-white px-6 py-3 rounded-lg mt-8 hover:bg-red-600 shadow-md transition-all focus:ring-2 focus:ring-red-300 active:scale-95"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default DeleteStudent;
