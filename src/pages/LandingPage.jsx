import React from "react";
import { motion } from "framer-motion";
import ChildImage from "../assets/child-8966218_1280.jpeg";
import FoodWasteImage from "../assets/foodwaste.jpg";
import GarbageImage from "../assets/garbage-8040768_1280.jpeg";
import HungerImage from "../assets/hungerDayImg.jpeg";

function LandingPage() {
    return (
        <div className="w-full bg-gradient-to-b from-purple-100 to-purple-200 flex flex-col items-center p-8">
            {/* Image Section */}
            <motion.div
                className="flex flex-wrap justify-center gap-6 mt-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Child Image */}
                <motion.img
                    src={ChildImage}
                    alt="Child"
                    className="h-auto rounded-xl shadow-lg w-60 cursor-pointer hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                />

                {/* Food Waste Image */}
                <motion.img
                    src={FoodWasteImage}
                    alt="Food Waste"
                    className="h-auto rounded-xl shadow-lg w-60 cursor-pointer hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                />

                {/* Garbage Image */}
                <motion.img
                    src={GarbageImage}
                    alt="Garbage"
                    className="h-auto rounded-xl shadow-lg w-60 cursor-pointer hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                />

                {/* Hunger Image */}
                <motion.img
                    src={HungerImage}
                    alt="Hunger"
                    className="h-auto rounded-xl shadow-lg w-60 cursor-pointer hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                />
            </motion.div>

            {/* References Section */}
            <motion.div
                className="flex flex-col space-y-5 w-full my-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-2xl font-bold text-grey-800 text-center mt-8">
                    WHAT THE NUMBERS SAY
                </h1>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            UNEP: Food Waste Report
                        </h3>
                        <a
                            href="https://www.unep.org/resources/publication/food-waste-index-report-2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            https://www.unep.org/resources/publication/food-waste-index-report-2024
                        </a>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            FAO: Food Loss and Waste Report
                        </h3>
                        <a
                            href="https://www.fao.org/food-loss-and-food-waste/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            https://www.fao.org/food-loss-and-food-waste/en/
                        </a>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            World Resources Institute: Reducing Food Waste
                        </h3>
                        <a
                            href="https://www.wri.org/initiatives/food-loss-and-waste"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            https://www.wri.org/initiatives/food-loss-and-waste
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default LandingPage;
