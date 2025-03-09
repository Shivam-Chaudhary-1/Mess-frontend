import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function CreateStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hostel, setHostel] = useState("");
  const [year, setYear] = useState("");
  const user = useSelector(state => state.user.user);

  const backendUrl = import.meta.env.VITE_BACKEND_URL; // Backend URL from environment variables

  // Function to send student data to backend
  const submitStudentData = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/student/auth/create`, {
        firstName,
        lastName,
        rollNumber:rollNumber.toLocaleLowerCase(),
        email,
        year,
        hostel: user.hostel
      }, { withCredentials: true });  // Ensuring cookies are sent

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center px-8 pb-8 bg-gray-100">
    {/* Title Section */}
    <h2 className="text-3xl text-slate-700 font-semibold pt-16">ADD STUDENT</h2>
  
    {/* Input Fields Section */}
    <div className="grid gap-5 mt-8 w-full max-w-md">
      {/* First Name Input */}
          <div className="bg-white border outline-none focus-within:ring-1 focus-within:ring-green-800 focus-within:rounded-xl transition-all duration-300 rounded-lg p-3 shadow-sm">
            <input
              required
              type="text"
              placeholder="Enter First Name"
              className="w-full bg-transparent outline-none text-gray-900 text-lg"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
  
      {/* Last Name Input */}
      <div className="bg-white border outline-none focus-within:ring-1 focus-within:ring-green-800 focus-within:rounded-xl transition-all duration-300 rounded-lg p-3 shadow-sm">
        <input
          required
          type="text"
          placeholder="Enter Last Name"
          className="w-full bg-transparent outline-none text-gray-900 text-lg"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
  
      {/* Roll Number Input */}
      <div className="bg-white border outline-none focus-within:ring-1 focus-within:ring-green-800 focus-within:rounded-xl transition-all duration-300 rounded-lg p-3 shadow-sm">
        <input
          required
          type="text"
          placeholder="Enter Roll Number"
          className="w-full bg-transparent outline-none text-gray-900 text-lg"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
      </div>
  
      {/* Email Input */}
      <div className="bg-white border outline-none focus-within:ring-1 focus-within:ring-green-800 focus-within:rounded-xl transition-all duration-300 rounded-lg p-3 shadow-sm">
        <input
          required
          type="email"
          placeholder="Enter Email Address"
          className="w-full bg-transparent outline-none text-gray-900 text-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
  
      {/* Batch Year Input */}
      <div className="bg-white border outline-none focus-within:ring-1 focus-within:ring-green-800 focus-within:rounded-xl transition-all duration-300 rounded-lg p-3 shadow-sm">
        <input
          type="number"
          placeholder="Enter Batch Year"
          className="w-full bg-transparent outline-none text-gray-900 text-lg"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
    </div>
  
    {/* Submit Button */}
    <button
      className="bg-green-700 text-[18px] text-white px-6 py-3 rounded-md mt-8 hover:bg-green-800 shadow-md transition"
      onClick={submitStudentData}
    >
      Submit
    </button>
  </div>
  
  );
}

export default CreateStudent;
