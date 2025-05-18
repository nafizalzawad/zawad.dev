import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would submit the form to a backend service
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  const socialLinks = [
    { name: 'Email', icon: <Mail className="h-6 w-6" />, link: 'mailto:alzawadnafiz@gmail.com', label: 'alzawadnafiz@gmail.com' },
    { name: 'LinkedIn', icon: <Linkedin className="h-6 w-6" />, link: 'https://linkedin.com/in/nafizalzawad', label: '/nafizalzawad' },
    { name: 'GitHub', icon: <Github className="h-6 w-6" />, link: 'https://github.com/nafizalzawad', label: '/nafizalzawad' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className="bg-card border border-muted">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="text-primary h-5 w-5" />
                Send Me a Message
              </CardTitle>
              <CardDescription>
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      required
                      className="bg-background border-muted focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      required
                      className="bg-background border-muted focus:border-primary" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Enter subject" 
                    required
                    className="bg-background border-muted focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Enter your message" 
                    required
                    rows={5}
                    className="bg-background border-muted focus:border-primary" 
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" onClick={handleSubmit} className="w-full">
                Send Message
              </Button>
            </CardFooter>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8 lg:pl-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-slate mb-6">
                I'm currently open to new opportunities, freelance projects, and interesting collaborations. 
                Don't hesitate to reach out through any of the channels below.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-card border border-muted hover:border-primary transition-colors duration-300"
                  >
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{social.name}</h4>
                      <p className="text-slate text-sm">{social.label}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <p className="text-slate">
                  Based in <span className="text-primary">Dhaka, Bangladesh</span> and available for remote work worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;