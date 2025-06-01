import React from 'react';
import profilePic from '/Nafiz Al Zawad.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="col-span-2">
            <p className="text-lg mb-4">
              I'm a 3rd-year Computer Science student from Bangladesh with a passion for blockchain technology, 
              fintech solutions, and creating human-centered digital experiences.
            </p>
            
            <p className="text-lg mb-4">
              My technical interests span across <span className="text-primary">Python</span>, 
              <span className="text-primary"> Flask</span>, <span className="text-primary">Blockchain</span>, 
              and <span className="text-primary">Database Management Systems</span>. I enjoy tackling complex 
              problems and turning them into simple, elegant solutions.
            </p>
            
            <p className="text-lg mb-4">
              Beyond coding, I'm an effective communicator with strong problem-solving abilities.
              I've worked with international clients, created scalable solutions, and developed 
              blockchain-based applications that address real-world challenges.
            </p>
            
            <p className="text-lg mb-6">
              When I'm not in front of a computer, you'll find me enjoying concerts (huge Kaavish fan!), 
              reading novels, or volunteering for community initiatives.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Technical Toolkit</h3>
              <ul className="grid grid-cols-2 gap-2 text-slate">
                <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">Python & Flask</li>
                <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">JavaScript & React</li>
                <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">MySQL & Database Design</li>
                <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">Blockchain Development</li>
                <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">HTML, CSS & Tailwind</li>
                <li className="flex items-center before:content-['▹'] before:text-primary before:mr-2">Git & Version Control</li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card rounded-md overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 rounded-md translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
              <div className="relative z-10">
                <img 
                   src={profilePic} 
                   alt="Nafiz Al Zawad"
                   className="rounded-md w-full aspect-square object-cover" 
                />

                <div className="absolute inset-0 bg-navy-dark/30 hover:bg-transparent transition-colors duration-300 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
