import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../slices/authSlice";
import axios from "axios";
import Loader from "../../components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [role, setRole] = useState("global-admin");

  const changeRoleHandler = () => {
    if (role === "global-admin") setRole("hostel-admin");
    else if (role === "hostel-admin") setRole("gate-admin");
    else setRole("global-admin");
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${backendUrl}/${role}/login`,
        { email, password },
        { withCredentials: true }
      );

      if (data.success) {
        toast.success(data.message);
        dispatch(login({ user: data.user, token: data.user.token }));
        navigate(`/${role}/dashboard`);
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl  text-green-900 mb-6 font-bold">Admin Login</h1>

      {/* Role Selection */}
      <button
        onClick={changeRoleHandler}
        className="bg-green-700 text-white px-6 py-2 text-[16px] rounded-md hover:bg-green-800 transition mb-4"
      >
        Switch to {role === "global-admin" ? "Hostel" : role === "hostel-admin" ? "Gate" : "Global"} Admin
      </button>

      {loading && (
        <div className="h-[500px] flex items-center justify-center">
          <Loader />
        </div>
      )}

      {!loading && (
        <div className="w-[90%] max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {role === "global-admin"
              ? "Global Admin Login"
              : role === "hostel-admin"
              ? "Hostel Admin Login"
              : "Gate Admin Login"}
          </h2>

          <form onSubmit={loginHandler} className="flex flex-col gap-4">
            <label className="font-medium text-gray-700">Email:</label>
            <input
              required
              type="email"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />

            <label className="font-medium text-gray-700">Password:</label>
            <input
              required
              type="password"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />

            <button
              className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition"
              type="submit"
            >
              Login as {role === "global-admin" ? "Global" : role === "hostel-admin" ? "Hostel" : "Gate"} Admin
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
