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
        <div className="w-full mt-6 flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    <h1 className="text-4xl font-bold text-green-900 mb-6">Global Admin Registration</h1>

    {loading ? (
        <div className="h-[500px] flex items-center justify-center">
            <Loader />
        </div>
    ) : !submited ? (
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Create Global Admin Account</h2>
            <form onSubmit={CreateGlobalAdmin} className="flex flex-col gap-5">
                <div>
                    <label className="font-medium text-gray-700">First Name:</label>
                    <input
                        required
                        type="text"
                        className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-600"
                        value={adminFirstName}
                        onChange={(e) => setAdminFirstName(e.target.value)}
                        placeholder="Enter first name"
                    />
                </div>

                <div>
                    <label className="font-medium text-gray-700">Last Name:</label>
                    <input
                        required
                        type="text"
                        className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-600"
                        value={adminLastName}
                        onChange={(e) => setAdminLastName(e.target.value)}
                        placeholder="Enter last name"
                    />
                </div>

                <div>
                    <label className="font-medium text-gray-700">Email:</label>
                    <input
                        required
                        type="email"
                        className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-600"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>

                <div>
                    <label className="font-medium text-gray-700">Contact:</label>
                    <input
                        required
                        type="text"
                        className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-600"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter contact number"
                    />
                </div>

                <div>
                    <label className="font-medium text-gray-700">Password:</label>
                    <input
                        required
                        type="password"
                        className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-600"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </div>

                <div>
                    <label className="font-medium text-gray-700">Confirm Password:</label>
                    <input
                        required
                        type="password"
                        className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-600"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                    />
                </div>

                <button
                    className="mt-4 bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-yellow-700 transition-all duration-300"
                    type="submit"
                >
                    Register as Global Admin
                </button>
            </form>
        </div>
    ) : !otpVerified ? (
        <div className="mt-6 w-full max-w-md bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Verify OTP</h2>
            <form onSubmit={VerifyOtp} className="flex flex-col gap-4">
                <input
                    required
                    type="text"
                    maxLength="6"
                    className="p-3 border border-gray-300 rounded-lg text-center text-lg tracking-widest shadow-sm 
                               focus:outline-none focus:ring-1 focus:ring-green-600  transition 
                               placeholder-gray-400"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP"
                />
                <button
                    className="mt-2 bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-yellow-700 transition-all duration-300"
                    type="submit"
                >
                    Verify OTP
                </button>
            </form>
        </div>
    ) : null}
</div>

    );
}

export default GloabalAdminSignup;