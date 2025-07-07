import React from "react";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Download or preview my resume
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center"
          >
            <div className="mb-8">
              <div className="mb-8">
                <div className="w-32 h-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="./resume.jpg" 
                    alt="Resume Preview"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Vedaansh Vishwakarma - Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full Stack Developer
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/vedaanshResume.pdf" // Make sure this file is in your public folder
                download
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/vedaanshResume.pdf" // For preview, still link to the file
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Eye size={20} />
                Preview Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
