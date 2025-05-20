import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code } from 'lucide-react';

type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
};

const Projects: React.FC = () => {
  const projects: ProjectType[] = [
    {
      title: 'TrafficMind',
      description: 'A real-time traffic monitoring system built with Flask and MySQL. Leverages Socket.IO for real-time updates and data visualization.',
      tags: ['Python', 'Flask', 'MySQL', 'Socket.IO'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/nafizalzawad/trafficmind',
      demo: 'https://github.dev/nafizalzawad/trafficmind'
    },
    {
      title: 'MediChain',
      description: 'Blockchain-based medical record system ensuring secure, tamper-proof storage and sharing of patient data between healthcare providers.',
      tags: ['Blockchain', 'Smart Contracts', 'React', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/nafizalzawad/medichain'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/nafizalzawad/zawad.dev',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card overflow-hidden border border-muted card-hover">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-dark/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-navy p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-navy p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Code className="h-5 w-5 text-primary" />
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="pill-tag">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:text-primary-foreground">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
