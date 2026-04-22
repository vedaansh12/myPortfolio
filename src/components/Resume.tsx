import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye, Code2, BarChart2 } from "lucide-react";

const resumes = [
  {
    id: "fullstack",
    label: "Full Stack Developer",
    icon: <Code2 size={20} />,
    file: "/vedaanshFullStackResume.pdf",
    preview: "./fullStack.png",
    color: "from-blue-600 to-purple-600",
    border: "border-blue-500",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    description: "React · Node.js · TypeScript · Databases",
  },
  {
    id: "dataanalyst",
    label: "Data Analyst",
    icon: <BarChart2 size={20} />,
    file: "/vedaanshDataResume.pdf",
    preview: "./dataAnalyst.png",
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-500",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
    description: "Python · SQL · Power BI · Machine Learning",
  },
];

const Resume = () => {
  const [selected, setSelected] = useState("fullstack");
  const active = resumes.find((r) => r.id === selected);

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose a resume tailored to your interest
          </p>
        </motion.div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 gap-1">
            {resumes.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelected(r.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selected === r.id
                    ? `bg-gradient-to-r ${r.color} text-white shadow-md`
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                }`}
              >
                {r.icon}
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resume Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resumes.map((r) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelected(r.id)}
              className={`cursor-pointer bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center border-2 transition-all duration-300 ${
                selected === r.id
                  ? `${r.border} shadow-xl scale-105`
                  : "border-transparent shadow-md hover:shadow-lg hover:scale-102"
              }`}
            >
              {/* Badge */}
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${r.badge}`}>
                {r.label}
              </span>

              {/* Resume Thumbnail */}
              <div className="w-28 h-36 bg-white dark:bg-gray-700 rounded-lg shadow-md mx-auto mb-5 flex items-center justify-center overflow-hidden">
                <img
                  src={r.preview}
                  alt={`${r.label} Resume Preview`}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML = `<div class='flex flex-col items-center justify-center h-full text-gray-400'>${r.id === "fullstack" ? "💻" : "📊"}<span class='text-xs mt-2'>Preview</span></div>`;
                  }}
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Vedaansh Vishwakarma
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">
                {r.label}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={active.file}
            download
            className={`bg-gradient-to-r ${active.color} text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            <Download size={20} />
            Download {active.label} Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={active.file}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <Eye size={20} />
            Preview Resume
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
