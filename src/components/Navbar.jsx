import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md  w-full relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-green-600"
        >
          SkillSwap
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {["Home", "Features", "How It Works", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-700 hover:text-green-600 transition"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Login / Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <motion.button
            className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition"
            whileTap={{ scale: 0.9 }}
          >
            Login
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            whileTap={{ scale: 0.9 }}
          >
            Sign Up
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6 text-green-600" /> : <Menu className="w-6 h-6 text-green-600" />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md p-4 absolute top-full left-0 w-full"
        >
          {["Home", "Features", "How It Works", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block py-2 text-gray-700 hover:text-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="mt-4 space-y-2">
            <button className="w-full px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Sign Up
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
