import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // ✅ Import Helmet
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Writing from '../components/Writing';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Newsletter from '../components/Newsletter';
import PremiumServices from '../components/PremiumServices';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AIChatbot from '../components/AIChatbot';

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll animation logic (keep this)
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Add SEO Meta Tags Here */}
      <Helmet>
        <title>Best Portfolio Website Maker | Nafiz Al Zawad</title>
        <meta
          name="description"
          content="Custom-designed, luxury portfolio websites crafted by Nafiz Al Zawad. Tailored digital identities for premium clients."
        />
        <meta
          name="keywords"
          content="nafiz al zawad, portfolio website maker, luxury web developer, customized websites, portfolio near me"
        />
        <meta property="og:title" content="Nafiz Al Zawad | Luxury Portfolio Developer" />
        <meta property="og:description" content="High-end portfolio websites for elite clients. Built by Nafiz Al Zawad." />
        <meta property="og:image" content="https://zawad.dev/preview.jpg" />
        <meta property="og:url" content="https://zawad.dev/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Page Content */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Skills />
        <Achievements />
        <Newsletter />
        <PremiumServices />
        <Contact />
        <Footer />
        <AIChatbot />
      </div>
    </>
  );
};

export default Index;
