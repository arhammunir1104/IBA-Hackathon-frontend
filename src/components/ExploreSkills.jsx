import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaCamera, FaMusic, FaPenFancy, FaChartBar } from "react-icons/fa";

const categories = [
  { name: "Web Development", icon: <FaCode /> },
  { name: "Graphic Design", icon: <FaPaintBrush /> },
  { name: "Photography", icon: <FaCamera /> },
  { name: "Music Production", icon: <FaMusic /> },
  { name: "Creative Writing", icon: <FaPenFancy /> },
  { name: "Marketing & SEO", icon: <FaChartBar /> },
];

export default function ExploreSkills() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-center">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-green-700"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore Skills - Browse by Category 🎯
      </motion.h2>
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Discover a variety of skills shared by talented people. Learn, share, and grow!
      </p>

      {/* Skills Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-green-50 p-6 rounded-2xl shadow-lg border border-green-300 flex flex-col items-center transition-transform duration-300 cursor-pointer hover:scale-105 hover:bg-green-100"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-green-700 text-4xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold text-green-700">{category.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
