import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function HeroSection() {
  const categories = ["images", "videos", "documents", "snippets"]; 

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
          Connect with talented people, exchange skills, and build something
          amazing. No money, just knowledge.
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
          <div className="relative inline-block">
            <select
              className="p-2 pr-8 bg-green-200 text-green-700 border-2 border-green-900 rounded-r-full text-lg cursor-pointer opacity-75 appearance-none 
           hover:bg-green-600 hover:text-white focus:opacity-100 transition duration-300"
            >
              {categories.map((category, index) => (
                <option key={index} value={category} className="capitalize">
                  {category}
                </option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-700 pointer-events-none">
              <FaChevronDown size={14} />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
