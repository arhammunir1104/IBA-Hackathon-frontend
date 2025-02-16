import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav className="bg-white shadow-md  w-full relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-green-600"
        >
          SkillSwap
        </motion.div>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link className="text-gray-700 hover:text-green-600 transition" to="/">
              Home
          </Link>
          <Link className="text-gray-700 hover:text-green-600 transition" to="/edit">
              Edit Profile
          </Link>
          <Link className="text-gray-700 hover:text-green-600 transition" to="/uploadproject">
              Upload Project
          </Link>
          <Link className="text-gray-700 hover:text-green-600 transition" to="/dashboard">
            Dashboard
          </Link>
      
        </div>
        {/* Login / Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <motion.button
              className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition"
              whileTap={{ scale: 0.9 }}
            >
              Login
            </motion.button>
          </Link>
          <Link to="/signup">
          <motion.button
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            whileTap={{ scale: 0.9 }}
            >
            Sign Up
          </motion.button>
            </Link>
        </div>

    
      </div>
      
    
    </nav>
  );
};

export default Navbar2;
