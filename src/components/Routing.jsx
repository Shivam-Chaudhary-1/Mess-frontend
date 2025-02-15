import React from "react";
import LandingPage from "../pages/LandingPage";
import Create_stu from "../pages/Create_stu";
import HostelData from "../pages/HostelsData";
import Delete_stu from "../pages/Delete_stu";
import Update_stu from "../pages/Update_stu";
import Entry_stu from "../pages/Entry_stu";
import OwnerProfile from "../pages/OwnerProfile";
import HostelInfo from "../pages/HostelInfo";
import HostelAdminInfo from "../pages/HostelAdminInfo";
import AdminDetails from "../pages/AdminDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Routing() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/hostel-data" element={<HostelData />} />
            <Route path="/owner-profile" element={<OwnerProfile />} />
            <Route path="/create-stu" element={<Create_stu />} />
            <Route path="/delete-stu" element={<Delete_stu />} />
            <Route path="/hostel-admin-info" element={<HostelAdminInfo />} />
            <Route path="/update-stu" element={<Update_stu />} />
            <Route path="/entry-stu" element={<Entry_stu />} />
            <Route path="/hostel-info" element={<HostelInfo />} />
            <Route path="/admin-details" element={<AdminDetails />} />
        </Routes>
    );
}

export default Routing;
