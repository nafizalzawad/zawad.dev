import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import Resume from '/Nafiz Al Zawad_Resume.pdf';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero-section" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Moving Grid Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(rgba(64, 224, 208, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(64, 224, 208, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        />
        <div 
          className="absolute inset-0 opacity-20 transition-transform duration-500 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(rgba(64, 224, 208, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(64, 224, 208, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        />
        <div 
          className="absolute inset-0 opacity-10 transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(rgba(64, 224, 208, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(64, 224, 208, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '150px 150px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
      </div>

      {/* Moving Grid Background - Light Mode */}
      <div className="absolute inset-0 z-0 block dark:hidden">
        <div 
          className="absolute inset-0 opacity-40 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(rgba(22, 101, 52, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22, 101, 52, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        />
        <div 
          className="absolute inset-0 opacity-30 transition-transform duration-500 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(rgba(22, 101, 52, 0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22, 101, 52, 0.7) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        />
        <div 
          className="absolute inset-0 opacity-20 transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(rgba(22, 101, 52, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22, 101, 52, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '150px 150px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float dark:bg-primary/40 bg-primary/80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Scanning Lines */}
      <div className="absolute inset-0 z-1">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-horizontal" />
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent animate-scan-vertical" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/90 to-background/80 z-1"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse z-1"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse z-1" style={{ animationDelay: '1s' }}></div>
      
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
            <span className="animate-text-shimmer bg-gradient-to-r from-slate via-primary to-slate bg-clip-text text-transparent bg-300% bg-size-200">
              CSE Student | Blockchain & Fintech Enthusiast
            </span>
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
              <a href={Resume} target="_blank" rel="noopener noreferrer">
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
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-slate text-sm mb-2">Scroll Down</span>
        <ArrowDown className="text-primary animate-bounce h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;
