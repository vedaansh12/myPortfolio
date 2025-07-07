import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github, X } from "lucide-react";

const Projects = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "A Simple Calculator",
      description:
        "A simple calculator app with basic arithmetic operations using HTML, CSS and Javascript",
      image: "./calc.png",
      tech: ["HTML", "CSS", "JavaScript"],
      demoUrl: "./calc.mp4",
      codeUrl: "https://github.com/vedaansh12/Calculator",
      details:
        "A simple calculator app with basic arithmetic operations using HTML, CSS and Javascript with all basic operations like addition, subtraction, multiplication, and division.",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Socket.io", "Express"],
      demoUrl: "#",
      codeUrl: "#",
      details:
        "A real-time collaborative task management application with features like drag-and-drop kanban boards, team collaboration, file sharing, and progress tracking.",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["React", "API Integration", "Charts.js"],
      demoUrl: "#",
      codeUrl: "#",
      details:
        "An elegant weather dashboard that provides detailed weather information, forecasts, and beautiful visualizations with location-based services.",
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Modern social platform with real-time messaging",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "Redux"],
      demoUrl: "#",
      codeUrl: "#",
      details:
        "A full-featured social media application with user profiles, posts, real-time messaging, notifications, and content sharing capabilities.",
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description: "Data visualization platform for business insights",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      demoUrl: "#",
      codeUrl: "#",
      details:
        "An advanced analytics dashboard providing interactive data visualizations, custom reports, and business intelligence insights.",
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Online education platform with video streaming",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      demoUrl: "#",
      codeUrl: "#",
      details:
        "A comprehensive learning management system with course creation, video streaming, assessments, progress tracking, and student management.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                    <ExternalLink size={16} />
                    {t("projects.viewProject")}
                  </button>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    <Github size={16} />
                    {t("projects.viewCode")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {selectedProject.details}
                  </p>
                  {selectedProject.demoUrl &&
                    selectedProject.demoUrl.endsWith(".mp4") && (
                      <div className="mb-6">
                        <video
                          controls
                          className="w-full h-auto rounded-lg shadow"
                          src={selectedProject.demoUrl}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.demoUrl &&
                    selectedProject.demoUrl.endsWith(".mp4") ? (
                      <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                        onClick={() =>
                          window.open(selectedProject.demoUrl, "_blank")
                        }
                      >
                        ▶️ {t("projects.watchDemo")}
                      </button>
                    ) : (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        {t("projects.viewProject")}
                      </a>
                    )}

                    <a
                      href={selectedProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} />
                      {t("projects.viewCode")}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
