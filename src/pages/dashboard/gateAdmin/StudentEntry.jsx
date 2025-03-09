import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function StudentEntry() {
    const navigate = useNavigate();
    const [rollNumber, setRollNumber] = useState("");
    const [goOutside, setGoOutside] = useState(false);
    const [checkStatus, setStatus] = useState(false);
    const [loadingCheck, setLoadingCheck] = useState(false);
    const [loadingEntry, setLoadingEntry] = useState(false);

    const StatusCheck = async () => {
        if (!rollNumber.trim()) {
            toast.error("Please enter a valid Roll Number.");
            return;
        }

        axios.defaults.withCredentials=true;

        setLoadingCheck(true);
        try {
            const { data } = await axios.post(
                backendUrl+"/student/auth/checkEntry",
                { rollNumber:rollNumber.toLocaleLowerCase() }
            );
            // rollNumber.toLocaleLowerCase();
            // console.log("roll", rollNumber);

            if (!data.success) {
                toast.error(data.message);
            } else {
                setStatus(true);
                setGoOutside(data.isAvailable);
                toast.success("Status checked successfully.");
            }
        } catch (error) {
            toast.error("Error checking status.");
            console.error(error);
        }
        setLoadingCheck(false);
    };

    const handleEntry = async (goingStatus) => {
        setLoadingEntry(true);
        axios.defaults.withCredentials=true;
        try {
            const { data } = await axios.post(
                `${backendUrl}/student/auth/outEntry`,
                { rollNumber:rollNumber.toLocaleLowerCase(), goingStatus },
                { withCredentials: true }
            );

            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }

            setStatus(false);
            // navigate("dashboard-hostelAdmin/entry-stu");
        } catch (error) {
            toast.error("Error processing request.");
            console.error(error);
        }
        setLoadingEntry(false);
    };

    return (
        <div className="gray-100 px-10 w-full h-screen flex flex-col items-center justify-center">
        {/* Title Section */}
        <h1 className="text-5xl font-bold text-gray-700 mb-8">Departing To</h1>
    
        {/* Input Field */}
        <div className="bg-white rounded-xl p-5 shadow-lg w-96 mx-auto flex items-center border border-gray-300">
            <input
                type="text"
                placeholder="Enter Roll Number"
                className="w-full bg-transparent outline-none text-gray-800 text-lg px-2"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
            />
        </div>
    
        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-6">
            {!checkStatus && (
                <button
                    className="bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 shadow-md transition-all duration-300"
                    onClick={StatusCheck}
                    disabled={loadingCheck}
                >
                    {loadingCheck ? "Checking..." : "CHECK"}
                </button>
            )}
    
            {checkStatus && !goOutside && (
                <button
                    className="bg-[#2E7D32] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-600 shadow-md transition-all duration-300"
                    onClick={() => handleEntry(false)}
                    disabled={loadingEntry}
                >
                    {loadingEntry ? "Processing..." : "GO INSIDE NIT"}
                </button>
            )}
    
            {checkStatus && goOutside && (
                <div className="flex flex-row gap-6">
                    <button
                        className="bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-600 shadow-md transition-all duration-300"
                        onClick={() => handleEntry(false)}
                        disabled={loadingEntry}
                    >
                        {loadingEntry ? "Processing..." : "Home"}
                    </button>
                    <button
                        className="bg-yellow-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-yellow-600 shadow-md transition-all duration-300"
                        onClick={() => handleEntry(true)}
                        disabled={loadingEntry}
                    >
                        {loadingEntry ? "Processing..." : "Market"}
                    </button>
                </div>
            )}
        </div>
    </div>
    
    
    );
}

export default StudentEntry;