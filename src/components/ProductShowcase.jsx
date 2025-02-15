import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function ProductShowcase({ file }) {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-8">
      {/* Product Display */}
      <motion.div
        className="flex-1 bg-gray-100 p-4 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Media Preview */}
        {file.type === "image" && (
          <img src={file.url} alt={file.title} className="w-full rounded-lg" />
        )}
        {file.type === "video" && (
          <video controls className="w-full rounded-lg">
            <source src={file.url} type="video/mp4" />
          </video>
        )}
        {file.type === "pdf" && (
          <iframe
            src={file.url}
            className="w-full h-[500px] rounded-lg border"
            title={file.title}
          ></iframe>
        )}

        {/* Download Button */}
        <motion.a
          href={file.downloadLink}
          download
          className="mt-4 flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-full w-max mx-auto hover:bg-green-700 transition"
          whileHover={{ scale: 1.1 }}
        >
          <FaDownload /> Download
        </motion.a>
      </motion.div>

      {/* Right Section: Uploader Details & Product Details */}
      <motion.div
        className="w-full md:w-1/3 bg-green-50 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Uploader Details */}
        <div className="text-center border-b pb-4 mb-4">
          <img
            src={file.uploadedBy.avatar}
            alt={file.uploadedBy.name}
            className="w-20 h-20 rounded-full mx-auto mb-2"
          />
          <h3 className="text-xl font-bold text-green-700">{file.uploadedBy.name}</h3>
          <p className="text-gray-600 text-sm">{file.uploadedBy.bio}</p>
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{file.title}</h2>
          <p className="text-gray-600 mt-2">{file.description}</p>
        </div>
      </motion.div>
    </section>
  );
}
