import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-grid-pattern overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/80 to-background"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          <p 
            className={`text-primary mb-5 font-mono transform transition-all duration-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Hi, my name is
          </p>
          
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-2 transform transition-all duration-500 delay-100 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Nafiz Al Zawad.
          </h1>
          
          <h2 
            className={`text-3xl md:text-5xl font-bold text-slate mb-6 transform transition-all duration-500 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            CSE Student | Blockchain & Fintech Enthusiast
          </h2>
          
          <p 
            className={`text-lg md:text-xl text-slate mb-8 max-w-xl transform transition-all duration-500 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Building scalable tech & human-centered digital solutions.
            <br />
            Passionate about the intersection of technology, finance and user experience.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-500 delay-400 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <Button asChild variant="default" size="lg">
              <a href="/Nafiz Al Zawad_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:text-primary-foreground">
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-slate text-sm mb-2">Scroll Down</span>
        <ArrowDown className="text-primary animate-bounce h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;