
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        resume: 'Resume',
        testimonials: 'Testimonials',
        contact: 'Contact'
      },
      hero: {
        welcome: 'Welcome to my portfolio',
        name: 'Vedaansh Vishwakarma',
        titles: ['Full Stack Developer', 'React Expert', 'Problem Solver', 'Creative Thinker'],
        description: 'Full Stack Developer & Data Scientist crafting end-to-end digital experiences — from pixel-perfect React interfaces to intelligent, data-driven backends powered by Node.js and modern analytics.',
        downloadResume: 'Download Resume',
        contactMe: 'Contact Me'
      },
      about: {
        title: 'About Me',
        bio: 'I am a Full Stack Developer and Data Science enthusiast who transforms ideas into powerful digital experiences. With deep expertise in React, TypeScript, and Node.js on the web side — and data analytics, modeling, and visualization on the intelligence side — I build solutions that are not just functional, but insightful. I thrive at the intersection of clean code and meaningful data.',
        experience: 'Years Experience',
        projects: 'Projects Completed',
        clients: 'Happy Clients'
      },
      skills: {
        title: 'My Skills',
        subtitle: 'Technologies and tools I work with'
      },
      projects: {
        title: 'My Projects',
        subtitle: 'A showcase of my recent work',
        viewProject: 'Live Demo',
        viewCode: 'Source Code'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "Let's work together on your next project",
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        phone: 'Phone',
        location: 'Location'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'होम',
        about: 'के बारे में',
        skills: 'कौशल',
        projects: 'प्रोजेक्ट्स',
        resume: 'रिज्यूमे',
        testimonials: 'प्रशंसापत्र',
        contact: 'संपर्क'
      },
      hero: {
        welcome: 'मेरे पोर्टफोलियो में आपका स्वागत है',
        name: 'वेदांश विश्वकर्मा',
        titles: ['फुल स्टैक डेवलपर', 'रिएक्ट एक्सपर्ट', 'समस्या समाधानकर्ता', 'रचनात्मक विचारक'],
        description: 'आधुनिक तकनीकों जैसे रिएक्ट, नोड.जेएस और टाइपस्क्रिप्ट का उपयोग करके नवाचार वेब समाधान बनाने में एक जुनूनी फुल स्टैक डेवलपर।',
        downloadResume: 'रिज्यूमे डाउनलोड करें',
        contactMe: 'संपर्क करें'
      },
      about: {
        title: 'मेरे बारे में',
        bio: 'मैं एक जुनूनी फुल स्टैक डेवलपर हूं जिसके पास गतिशील, उपयोगकर्ता-अनुकूल वेब एप्लिकेशन बनाने में अनुभव है। मेरी विशेषज्ञता रिएक्ट और टाइपस्क्रिप्ट जैसी फ्रंटएंड तकनीकों के साथ-साथ नोड.जेएस और डेटाबेस के साथ बैकएंड डेवलपमेंट में फैली हुई है।',
        experience: 'वर्षों का अनुभव',
        projects: 'पूर्ण प्रोजेक्ट्स',
        clients: 'खुश ग्राहक'
      },
      skills: {
        title: 'मेरे कौशल',
        subtitle: 'तकनीकें और उपकरण जिनके साथ मैं काम करता हूं'
      },
      projects: {
        title: 'मेरे प्रोजेक्ट्स',
        subtitle: 'मेरे हाल के काम का प्रदर्शन',
        viewProject: 'लाइव डेमो',
        viewCode: 'सोर्स कोड'
      },
      contact: {
        title: 'संपर्क में रहें',
        subtitle: 'आइए आपके अगले प्रोजेक्ट पर एक साथ काम करते हैं',
        name: 'नाम',
        email: 'ईमेल',
        message: 'संदेश',
        send: 'संदेश भेजें',
        phone: 'फोन',
        location: 'स्थान'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
