import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from '../../components/Loader';

function GloabalAdminSignup() {
    const navigate = useNavigate();
    const [adminFirstName, setAdminFirstName] = useState("");
    const [adminLastName, setAdminLastName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);  

    const [submited, setSubmited] = useState(false);
    const [otp, setOtp] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);


    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    // console.log("backendurl: ", backendUrl);


    async function VerifyOtp(e) {
        e.preventDefault();
        setOtp(true);
        try {
            const { data } = await axios.post(backendUrl + '/global-admin/verify-otp', {
                email, otp
            }, {withCredentials:true});

            if(data.success) {
                toast.success(data.message);
                setOtpVerified(true);
                navigate("/global-admin/login");
            }
            else{
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
        setOtp(false);
    }

    async function CreateGlobalAdmin(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post(backendUrl + '/global-admin/create', {
                firstName: adminFirstName,
                lastName: adminLastName,
                email,
                contactNumber: contact,
                password,
                confirmPassword
            });
            // console.log("data: ",data);
            if (data.success) {
                setSubmited(true);
                toast.success(data.message);
            }
            else{
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
        setLoading(false);
    }

    return (
        <div className="bg-purple-100 w-full flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Global Admin Login</h1>
            
            {loading && <div className=" h-[500px] flex  items-center justify-center"><Loader /></div> }

            { !loading && !submited && <div className="w-[50%] bg-white shadow-lg rounded-lg p-6">
                <form onSubmit={CreateGlobalAdmin} className="flex flex-col gap-4">
                    <label className="font-semibold">First Name:</label>
                    <input
                        required
                        type="text"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        value={adminFirstName}
                        onChange={(e) => setAdminFirstName(e.target.value)}
                        placeholder="Enter first name"
                    />
                    <label className="font-semibold">Last Name:</label>
                    <input
                        required
                        type="text"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        value={adminLastName}
                        onChange={(e) => setAdminLastName(e.target.value)}
                        placeholder="Enter last name"
                    />
                    <label className="font-semibold">Email:</label>
                    <input
                        required
                        type="email"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                    <label className="font-semibold">Contact:</label>
                    <input
                        required
                        type="text"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter contact number"
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
                    <label className="font-semibold">Confirm Password:</label>
                    <input
                        required
                        type="password"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                    />
                    <button
                        className="mt-4 bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div> }

            { !loading && submited && !otpVerified && 
            <div className="mt-6 px-12 p-4 bg-gray-50 border rounded-md height-screen">
                <h2 className="text-lg font-semibold text-purple-700 mb-2">Verify OTP</h2>
                <form onSubmit={VerifyOtp} className="flex flex-col gap-4">
                    <input
                        required
                        type="text"
                        maxLength="6"
                        className="p-2 border rounded-lg text-center text-lg tracking-widest shadow-sm 
                                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition 
                                   placeholder-gray-400"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter 6-digit OTP"
                    />
                    <button
                        className="mt-2 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
                        type="submit"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
            }

        </div>
    );
}

export default GloabalAdminSignup;