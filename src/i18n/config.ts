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
        titles: [
          'Full Stack Developer',
          'Data Scientist',
          'React Expert',
          'Problem Solver',
          'Creative Thinker'
        ],
        description:
          "I've always believed that great software is built at the crossroads of logic and creativity. As a Full Stack Developer with a strong foundation in Data Science and Analytics, I craft responsive, scalable web applications while using data to drive smarter decisions — from designing intuitive React interfaces to engineering robust Node.js backends and uncovering patterns in complex datasets.",
        downloadResume: 'Download Resume',
        contactMe: 'Contact Me'
      },
      about: {
        title: 'About Me',
        bio: "I'm a Full Stack Developer and Data Science enthusiast who transforms ideas into powerful digital experiences. With deep expertise in React, TypeScript, and Node.js on the web side — and data analytics, modeling, and visualization on the intelligence side — I build solutions that are not just functional, but insightful. I thrive at the intersection of clean code and meaningful data, turning complex problems into elegant, scalable solutions.",
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
      testimonials: {
        title: 'Testimonials',
        subtitle: 'What people say about working with me'
      },
      resume: {
        title: 'My Resume',
        subtitle: 'A summary of my experience and qualifications',
        download: 'Download Resume'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "Have a project in mind? Let's build something great together.",
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
        about: 'परिचय',
        skills: 'कौशल',
        projects: 'प्रोजेक्ट्स',
        resume: 'रिज्यूमे',
        testimonials: 'प्रशंसापत्र',
        contact: 'संपर्क'
      },
      hero: {
        welcome: 'मेरे पोर्टफोलियो में आपका स्वागत है',
        name: 'वेदांश विश्वकर्मा',
        titles: [
          'फुल स्टैक डेवलपर',
          'डेटा साइंटिस्ट',
          'रिएक्ट एक्सपर्ट',
          'समस्या समाधानकर्ता',
          'रचनात्मक विचारक'
        ],
        description:
          'मेरा मानना है कि बेहतरीन सॉफ़्टवेयर तर्क और रचनात्मकता के संगम पर बनता है। एक फुल स्टैक डेवलपर और डेटा साइंस विशेषज्ञ के रूप में, मैं React और Node.js से स्केलेबल वेब एप्लिकेशन बनाता हूं और डेटा एनालिटिक्स से बेहतर निर्णय लेने में मदद करता हूं।',
        downloadResume: 'रिज्यूमे डाउनलोड करें',
        contactMe: 'संपर्क करें'
      },
      about: {
        title: 'मेरे बारे में',
        bio: 'मैं एक फुल स्टैक डेवलपर और डेटा साइंस उत्साही हूं जो विचारों को शक्तिशाली डिजिटल अनुभवों में बदलता है। React, TypeScript और Node.js में गहरी विशेषज्ञता के साथ-साथ डेटा एनालिटिक्स, मॉडलिंग और विज़ुअलाइज़ेशन में भी दक्षता रखता हूं। मैं स्वच्छ कोड और सार्थक डेटा के संगम पर काम करना पसंद करता हूं — जटिल समस्याओं को सुंदर और स्केलेबल समाधानों में बदलता हूं।',
        experience: 'वर्षों का अनुभव',
        projects: 'पूर्ण प्रोजेक्ट्स',
        clients: 'संतुष्ट क्लाइंट्स'
      },
      skills: {
        title: 'मेरे कौशल',
        subtitle: 'वे तकनीकें और उपकरण जिनसे मैं काम करता हूं'
      },
      projects: {
        title: 'मेरे प्रोजेक्ट्स',
        subtitle: 'मेरे हालिया कार्यों की एक झलक',
        viewProject: 'लाइव डेमो',
        viewCode: 'सोर्स कोड'
      },
      testimonials: {
        title: 'प्रशंसापत्र',
        subtitle: 'लोग मेरे साथ काम करने के बारे में क्या कहते हैं'
      },
      resume: {
        title: 'मेरा रिज्यूमे',
        subtitle: 'मेरे अनुभव और योग्यताओं का सारांश',
        download: 'रिज्यूमे डाउनलोड करें'
      },
      contact: {
        title: 'संपर्क में रहें',
        subtitle: 'कोई प्रोजेक्ट मन में है? आइए मिलकर कुछ शानदार बनाएं।',
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
