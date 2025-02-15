import { motion } from "framer-motion";
import { FaUserPlus, FaSearch, FaExchangeAlt, FaRocket } from "react-icons/fa";

const steps = [
  { icon: <FaUserPlus />, title: "Sign Up", description: "Create a free account and set up your profile." },
  { icon: <FaSearch />, title: "Find Resources", description: "Explore videos, images, and documents shared by others." },
  { icon: <FaExchangeAlt />, title: "Share & Learn", description: "Upload your own resources and exchange knowledge." },
  { icon: <FaRocket />, title: "Grow Your Skills", description: "Engage with the community and improve your expertise!" },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-center" id="howitworks">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-green-700"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How It Works - Simple Steps to Get Started 🚀
      </motion.h2>
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Follow these simple steps to start learning and sharing skills on SkillSwap!
      </p>

      {/* Steps Timeline */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg border border-green-300 flex flex-col items-center w-64 transition-transform duration-300 hover:scale-105"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-green-700 text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-green-700">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
