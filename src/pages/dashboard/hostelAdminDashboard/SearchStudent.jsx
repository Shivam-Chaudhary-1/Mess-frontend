// import { useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { toast } from "react-toastify";

// function SearchStudent() {
//     const [rollNumber, setRollNumber] = useState("");
//     const [isDataPresent, setIsDataPresent] = useState(false);
//     const [student, setStudent] = useState("");

//     const backendUrl = import.meta.env.VITE_BACKEND_URL; // Backend URL from environment variables

//     const handleDelete = async () => {
//         axios.defaults.withCredentials=true;
//         try {
//             const { data } = await axios.post(`${backendUrl}/student/auth/get-student`, { rollNumber });

//             if (data.success) {
//                 setIsDataPresent(true);
//                 toast.success(data.message);
//                 setRollNumber("");
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error(data.message);
//             console.error(error);
//         }
//     };

//     return (
//         <div className="bg-purple-100 px-10 w-full h-screen flex flex-col items-center">
//             {/* Title Section */}
//             <motion.div
//                 className="text-4xl font-bold text-gray-700 pt-16"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//             >
//                 DELETE STUDENT
//             </motion.div>

//             {/* Input Field */}
//             <motion.div
//                 className="bg-white rounded-lg p-4 shadow-lg w-80 mt-8"
//                 whileHover={{ scale: 1.04 }}
//             >
//                 <input
//                     type="text"
//                     placeholder="Enter Roll Number"
//                     className="w-full bg-transparent outline-none text-gray-700 text-lg"
//                     value={rollNumber}
//                     onChange={(e) => setRollNumber(e.target.value)}
//                 />
//             </motion.div>

//             {/* Submit Button */}
//             <motion.button
//                 className="bg-red-500 text-white px-6 py-3 rounded-lg mt-10 hover:bg-red-600 shadow-md transition-transform duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 onClick={handleDelete}
//             >
//                 Delete
//             </motion.button>

//             {student && <div>
//                 hello
//             </div>}
//         </div>
//     );
// }

// export default SearchStudent;
