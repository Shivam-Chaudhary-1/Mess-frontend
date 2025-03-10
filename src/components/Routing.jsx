import React from "react";
import LandingPage from "../pages/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import GloabalAdminSignup from "../pages/login/Signup";
import Login from "../pages/login/Login"
import GloabalAdminDashboard from "../pages/dashboard/gloabalAdmin/GloabalAdminDashboard";
import GloabalAdminAccount from "../pages/dashboard/gloabalAdmin/GloabalAdminAccount";
import PageNotFound from "./PageNotFound";
import GetAllHostels from "../pages/dashboard/gloabalAdmin/GetAllHostels";
import CreateHostel from "../pages/dashboard/gloabalAdmin/CreateHostel";
import HostelAdminDashboard from "../pages/dashboard/hostelAdminDashboard/HostelAdminDashboard";
import HostelAdminAccount from "../pages/dashboard/hostelAdminDashboard/HostelAdminAccount";
import CreateStudent from "../pages/dashboard/hostelAdminDashboard/CreateStudent";
import ShowAllStudents from "../pages/dashboard/hostelAdminDashboard/ShowAllStudents";
import DeleteStudent from "../pages/dashboard/hostelAdminDashboard/DeleteStudent";
import HostelStatus from "../pages/dashboard/hostelAdminDashboard/HostelStatus";
import CreateGateAdmin from "../pages/dashboard/gloabalAdmin/CreateGateAdmin";
import GetAllGates from "../pages/dashboard/gloabalAdmin/GetAllGates";
import GateAdminDashboard from "../pages/dashboard/gateAdmin/GateAdminDashboard";
import GateAdminAccount from "../pages/dashboard/gateAdmin/GateAdminAccount";
import StudentEntry from "../pages/dashboard/gateAdmin/StudentEntry";


function Routing() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
             
             {/* Gate admin */}
            <Route path="/global-admin/dashboard" element={<GloabalAdminDashboard/>} >
                <Route index element={<GloabalAdminAccount />} />
                <Route path="create-hostel" element={<CreateHostel />} />
                <Route path="create-gate" element={<CreateGateAdmin />} />
                <Route path="get-all-hostels" element={<GetAllHostels />} />
                <Route path="get-all-gates" element={<GetAllGates />} />
                <Route path="*" element={<PageNotFound/>}/>
            </Route>
             


             {/* hostel admin */}
            <Route path="/hostel-admin/dashboard" element={<HostelAdminDashboard/>} >
                <Route index element={<HostelAdminAccount/>} />
                <Route path="create-student" element={<CreateStudent/>} />
                <Route path="get-all-students" element={<ShowAllStudents />} />
                <Route path="delete-student" element={<DeleteStudent />} />
                <Route path="current-status" element={<HostelStatus />} />
                <Route path="*" element={<PageNotFound/>}/>
            </Route>


            {/* gate admin */}
            <Route path="/gate-admin/dashboard" element={<GateAdminDashboard/>} >
                <Route index element={<GateAdminAccount/>} />
                <Route path="student-entry" element={<StudentEntry/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Route>

            {/* login/signup */}

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<GloabalAdminSignup/>} />

            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
}

export default Routing;
