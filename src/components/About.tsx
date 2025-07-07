
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { key: 'experience', value: 1, suffix: '+' },
    { key: 'projects', value: 5, suffix: '+' },
    { key: 'clients', value: 0, suffix: '+' }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Class- 10',
      company: 'St. Marys senior secondary school',
      description: 'Completed my High School Examinations'
    },
    {
      year: '2022',
      title: 'Class- 12',
      company: 'St. Marys senior secondary school',
      description: 'Completed my class 12 examination from CBSE Board'
    },
    {
      year: '2024',
      title: 'Frontend Developer',
      company: '',
      description: 'Creating responsive user interfaces and improved user experience for web applications and developing Other Skills'
    },
    {
      year: '2026',
      title: 'Computer Science Degree',
      company: 'Graphic Era Hill University',
      description: 'Graduated with honors, specializing in software engineering and web technologies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                <img
                  src="./myphoto.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-8 border-white dark:border-gray-700 shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('about.bio')}
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.key} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t(`about.${stat.key}`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience & Education
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
                      <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
