import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { use } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function ShowAllStudents() {
    const user = useSelector(state => state.user.user);
    // console.log("user", user.hostel);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [hostel, setHostel] = useState("");

    useEffect(() => {
        setHostel(user.hostel);
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        axios.defaults.withCredentials=true;
        setLoading(true);
        try {
            setHostel(user.hostel);
            const { data } = await axios.post(`${backendUrl}/student/auth/get-all-students`, {hostel:user.hostel});
            console.log("students", data);
            if (data.success) {
                const sortedStudents = data.data.availableStudents
                    .concat(data.data.notAvailableStudents)
                    .sort((a, b) => a.rollNumber.localeCompare(b.rollNumber)); // Lexicographic sort

                setStudents(sortedStudents);
            } else {
                setError(data.message);
                toast.error(data.message);
            }
        } catch (err) {
            setError("Error fetching student data.");
            toast.error("Error fetching student data.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-slate-700">Student Data</h1>

                {loading && <p className="text-center text-blue-500">Loading students...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {!loading && !error && students.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                                <tr className="bg-gray-300 text-left">
                                    <th className="border border-gray-300 px-4 py-2">Roll No</th>
                                    <th className="border border-gray-300 px-4 py-2">Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Email</th>
                                    <th className="border border-gray-300 px-4 py-2">Year</th>
                                    <th className="border border-gray-300 px-4 py-2">Hostel</th>
                                    <th className="border border-gray-300 px-4 py-2">Total days outside</th>
                                    <th className="border border-gray-300 px-4 py-2">Status</th>
                                    <th className="border border-gray-300 px-4 py-2">Outgoing Dates</th>
                                    <th className="border border-gray-300 px-4 py-2">Incoming Dates</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => (
                                    <tr key={student._id} className={`hover:bg-green-100 ${index % 2 ? "bg-gray-100" : "bg-white"}`}>
                                        <td className="border border-gray-300 px-4 py-2">{student.rollNumber}</td>
                                        <td className="border border-gray-300 px-4 py-2">{student.firstName} {student.lastName}</td>
                                        <td className="border border-gray-300 px-4 py-2">{student.email}</td>
                                        <td className="border border-gray-300 px-4 py-2">{student.year}</td>
                                        <td className="border border-gray-300 px-4 py-2">{student.hostel}</td>
                                        <td className="border border-gray-300 px-4 py-2">{student.totalDaysOutside}</td>
                                        <td className={`border border-gray-300 px-4 py-2 font-semibold ${student.isAvailable ? "text-green-600" : "text-red-600"}`}>
                                            {student.isAvailable ? "Available" : "Not Available"}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <details>
                                                <summary className="cursor-pointer text-blue-500">View</summary>
                                                <ul className="mt-1">
                                                    {student.outgoingDate.slice().reverse().map((out, index) => (
                                                        <li key={index} className="text-xs text-gray-700">
                                                            {out.date} ({out.day}) - {out.time}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </details>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <details>
                                                <summary className="cursor-pointer text-blue-500">View</summary>
                                                <ul className="mt-1">
                                                    {student.incomingDate.slice().reverse().map((into, index) => (
                                                        <li key={index} className="text-xs text-gray-700">
                                                            {into.date} ({into.day}) - {into.time}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </details>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {!loading && !error && students.length === 0 && (
                    <p className="text-center text-gray-600">No students found.</p>
                )}
            </div>
        </div>
    );
}

export default ShowAllStudents;
