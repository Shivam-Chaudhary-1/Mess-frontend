// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { GiHamburger } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import Navbar from "./components/Navbar";
// import { Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import SideBarLinksHostelAdmin from "./components/SideBarLinksHostelAdmin";

// function GetStudents() {
//     const [sidebarOpen, setSidebarOpen] = useState(true);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     // return (
//         <div>
//             <ToastContainer />
//             {/* <Navbar /> */}

//             {/* Sidebar & Main Content Container */}
//             <div className="flex">
//                 {/* Sidebar */}
//                 <AnimatePresence>
//                     {sidebarOpen && (
//                         <motion.div
//                             initial={{ x: "-100%", opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             exit={{ x: "-100%", opacity: 0 }}
//                             transition={{ duration: 0.3, ease: "easeInOut" }}
//                             className="bg-purple-700 text-white h-screen fixed top-0 left-0 z-30 pt-16 w-[22%] shadow-lg"
//                         >
//                             <SideBarLinksHostelAdmin />
//                         </motion.div>
//                     )}
//                 </AnimatePresence>

//                 {/* Sidebar Toggle Button */}
//                 <button
//                     onClick={toggleSidebar}
//                     className="text-gray-700 bg-white p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none fixed top-4 left-4 z-[60] transition-all duration-300"
//                 >
//                     {sidebarOpen ? <RxCross2 size={24} /> : <GiHamburger size={24} />}
//                 </button>

//                 {/* Main Content with Smooth Transition */}
//                 <motion.div
//                     animate={{ marginLeft: sidebarOpen ? "22%" : "0%" }}
//                     transition={{ duration: 0, ease: "easeInOut" }}
//                     className="flex-1 min-h-screen transition-all duration-300"
//                 >
//                     <Outlet />
//                 </motion.div>
//             </div>
//         </div>
//     );
// }

// export default GetStudents;