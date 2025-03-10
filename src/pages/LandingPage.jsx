import React from "react";


export default function LandingPage() {
    return (
      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center px-6 py-10">
        {/* Header */}
        
        {/* Hero Section */}
        <section className="text-center max-w-4xl mt-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">Reduce Food Wastage, Optimize Hostel Meals</h2>
          <p className="mt-4 text-lg text-gray-600">Our system tracks student availability to ensure food is prepared only for present students, minimizing waste and saving resources.</p>
        </section>
        
        {/* Features */}
        <section id="features" className="max-w-6xl mt-16">
          <h3 className="text-2xl font-semibold text-gray-800">Why Use This?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-semibold text-green-700">Live Student Data</h4>
              <p className="text-gray-600 mt-2">Track real-time student availability to optimize meal preparation.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-semibold text-green-700">Waste Reduction</h4>
              <p className="text-gray-600 mt-2">Minimize food waste and reduce hostel mess expenses effectively.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-semibold text-green-700">Easy Management</h4>
              <p className="text-gray-600 mt-2">Admins can view, manage, and forecast hostel food needs effortlessly.</p>
            </div>
          </div>
        </section>
        
        
      </div>
    );
  }
  

