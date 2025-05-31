import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Writings', href: '/writings' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary">
          Nafiz<span className="text-foreground">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                {link.href.startsWith('/#') ? (
                  <a 
                    href={link.href}
                    className="nav-link text-slate hover:text-primary px-1 py-2 text-sm font-medium"
                  >
                    <span className="text-primary mr-1">{`0${index + 1}.`}</span>
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href}
                    className="nav-link text-slate hover:text-primary px-1 py-2 text-sm font-medium"
                  >
                    <span className="text-primary mr-1">{`0${index + 1}.`}</span>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:text-primary-foreground">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6 text-foreground" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </button>
          <nav>
            <ul className="flex flex-col space-y-6 items-center">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a 
                      href={link.href} 
                      className="text-foreground hover:text-primary text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-primary mr-2">{`0${index + 1}.`}</span>
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-foreground hover:text-primary text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-primary mr-2">{`0${index + 1}.`}</span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="mt-4">
                <Button asChild variant="outline" className="border-primary text-primary hover:text-primary-foreground">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
