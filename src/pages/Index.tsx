
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
// import IntroVideo from '../components/IntroVideo';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../i18n/config';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
{/*         <IntroVideo /> */}
        <Skills />
        <Projects />
        <Resume />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
