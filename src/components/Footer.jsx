import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Brand & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">SkillSwap</h2>
          <p className="text-gray-300 mt-2">Learn. Share. Grow Together. 🚀</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">How It Works</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-3 flex justify-center md:justify-start gap-4 text-gray-300">
            <a href="#" className="hover:text-white"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={24} /></a>
          </div>
        </motion.div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-600 my-6 opacity-50"></div>

      {/* Copyright Section */}
      <motion.div
        className="text-center text-gray-400 text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </motion.div>
    </footer>
  );
}
