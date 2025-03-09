import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useSelector } from "react-redux";

function HostelStatus() {
    const [stats, setStats] = useState({
        totalStudents: 0,
        availableStudents: 0,
        marketGoingStudents: 0,
        homeGoingStudents: 0
    });

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const user = useSelector(state => state.user.user);
    const hostel = user.hostel;

    useEffect(() => {
        async function fetchStats() {
            axios.defaults.withCredentials = true;
            try {
                const { data } = await axios.post(`${backendUrl}/student/auth/current-status`, { hostel });
                console.log("students", data);
                if (data.success) {
                    setStats({
                        totalStudents: data.totalStudents.length,
                        availableStudents: data.availableStudents.length,
                        marketGoingStudents: data.marketGoingStudents.length,
                        homeGoingStudents: data.homeGoingStudents.length
                    });
                }
            } catch (error) {
                console.error("Error fetching hostel stats:", error);
            }
        }
        fetchStats();
    }, []);

    const data = [
        { name: "Total Students", value: stats.totalStudents, color: "#16A34A" },  // Green - Overall
        { name: "Available Students", value: stats.availableStudents, color: "#22C55E" },  // Emerald - Present
        { name: "Home-Going Students", value: stats.homeGoingStudents, color: "#F59E0B" },  // Amber - Food Wastage
        { name: "Market-Going Students", value: stats.marketGoingStudents, color: "#DC2626" }  // Red - Potential Waste
    ];

    const pieChartData = data.slice(1); // Remove "Total Students" from pie chart data

    const analytics = data.map((item) => ({
        ...item,
        percentage: stats.totalStudents > 0 ? ((item.value / stats.totalStudents) * 100).toFixed(2) : 0
    }));

    return (
        <div className="bg-gray-100 w-full min-h-screen flex items-center justify-center p-6">
            <div className="flex flex-col items-center w-full max-w-6xl text-center">
                {/* Title */}
                <h1 className="text-4xl font-bold text-slate-700">HOSTEL FOOD WASTAGE REPORT</h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
                    {analytics.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md text-white"
                            style={{ backgroundColor: item.color }}
                        >
                            <div className="text-lg font-medium">{item.name}</div>
                            <div className="text-3xl font-bold mt-2">{item.value}</div>
                        </div>
                    ))}
                </div>

                {/* Pie Chart */}
                <div className="mt-12 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Student Distribution</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                outerRadius={150}
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" align="center" layout="horizontal" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default HostelStatus;
