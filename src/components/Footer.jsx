import React from "react";
import { NavLink } from "react-router-dom";

const scrollToTopWithTimer = () => {
    let scrollPosition = window.scrollY;
    const scrollStep = 50;
    const intervalSpeed = 20;

    const scrollInterval = setInterval(() => {
        if (scrollPosition > 0) {
            window.scrollBy(0, -scrollStep);
            scrollPosition -= scrollStep;
        } else {
            clearInterval(scrollInterval);
        }
    }, intervalSpeed);
};

function Footer() {
    return (
        <div className="w-screen bg-purple-100 flex flex-col items-center">
            <div className="w-screen bg-[#eeedeb] px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-8">

                {/* About Us Section */}
                <div className="md:w-1/3 text-center md:text-left">
                    <h1 className="text-xl font-semibold">ABOUT US</h1>
                    <p className="mt-4 text-gray-700">TEAM VELDORA</p>
                    <div className="mt-4 text-gray-600 text-sm">
                        <p>Copyright Information</p>
                        <p>Terms And Conditions</p>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="md:w-1/3 text-center">
                    <h1 className="text-xl font-semibold">QUICK LINKS</h1>
                    <div className="mt-4 flex flex-col gap-3 text-gray-700">
                        <NavLink to="/" onClick={scrollToTopWithTimer}>
                            HOME
                        </NavLink>
                        <NavLink to="/owner-profile">
                            OWNER PROFILE
                        </NavLink>
                        <NavLink to="/hostel-data">
                            HOSTEL DATA
                        </NavLink>
                        <NavLink to="/dashboard">
                            DASHBOARD
                        </NavLink>
                    </div>
                </div>

                {/* Contact Section with Image */}
                <div className="md:w-1/3 text-center flex flex-col items-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4">
                        <img src="./src/assets/logo.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-gray-700 text-sm">
                        <p>OPERATING HOURS:</p>
                        <p>Morning: 8:00 - 9:30 AM</p>
                        <p>Evening: 5:30 - 6:00 PM</p>
                        <p>Night: 7:30 - 9:00 PM</p>
                        <p className="mt-2">EMAIL: nbh@nith.ac.in</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
