import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="bg-green-700 py-16 px-6 md:px-12 lg:px-24 text-center text-white">
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Join SkillSwap & Elevate Your Skills 
      </motion.h2>
      
      <motion.p
        className="mt-4 text-lg max-w-2xl mx-auto text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Unlock endless learning opportunities. Exchange knowledge with thousands of creators, all for free!
      </motion.p>

      {/* Social Proof */}
      <motion.div
        className="mt-6 flex items-center justify-center gap-6 text-gray-300"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-3xl font-bold text-white">50K+</span>
          <span className="text-sm">Active Users</span>
        </motion.div>
        
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-3xl font-bold text-white">10K+</span>
          <span className="text-sm">Skill Exchanges</span>
        </motion.div>
      </motion.div>

      {/* Signup Button */}
      <motion.button
        className="mt-8 bg-white text-green-800 font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-200"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
      >
        <Link to="/signup">
        Sign Up for Free</Link>
      </motion.button>
    </section>
  );
}
