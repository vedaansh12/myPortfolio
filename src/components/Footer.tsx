
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vedaansh12 ', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vedaansh-vishwakarma-057a7124b/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vedaanshvishwakarma896@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-6">
              Ready to bring your ideas to life? Let's work together!
            </p>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 Vedaansh Vishwakarma. All rights reserved. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
