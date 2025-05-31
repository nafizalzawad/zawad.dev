import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate">
              © {currentYear} Nafiz Al Zawad. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a href="#about" className="text-slate hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-slate hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-slate hover:text-primary transition-colors">Projects</a>
            <Link to="/writings" className="text-slate hover:text-primary transition-colors">Writings</Link>
            <a href="#contact" className="text-slate hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-slate">
            Built with <span className="text-primary">React</span> & <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
