import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
 
  const categories = ["Images", "Videos", "PDF Files"];

  return (
    <section className="relative bg-green-50 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 text-center">
      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full">
        <motion.h1
          className="text-5xl font-bold text-green-700 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SkillSwap. Learn & Grow Together.
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">
          Connect with talented people, exchange skills, and build something amazing. No money, just knowledge.
        </p>

        {/* Improved Search Bar */}
        <motion.div
          className="flex items-center bg-white p-3 rounded-full shadow-lg w-full max-w-lg border border-green-300 mt-8 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="text"
            placeholder="Search by creator name, tags..."
            className="flex-grow p-3 rounded-l-full text-gray-700 outline-none text-lg"
          />
          <select className="p-3 bg-green-600 text-white rounded-r-full text-lg cursor-pointer">
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </motion.div>
      </div>
    </section>
  );
}
