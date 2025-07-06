import React, { useState, useEffect } from 'react';
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
import { Github, Linkedin, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

// Constants for EmailJS - Replace these with your actual values
const SERVICE_ID = 'service_fe4lj4h';  // Replace with your actual service ID
const TEMPLATE_ID = 'template_sn978xi'; // Replace with your actual template ID
const PUBLIC_KEY = '6KKthX0Gifqgr542F'; // Replace with your actual PUBLIC KEY (not user ID)

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Initialize EmailJS with your PUBLIC KEY, not user ID
    emailjs.init(PUBLIC_KEY);
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    console.log("Attempting to send email with EmailJS");

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };

      console.log("Email parameters:", { 
        serviceId: SERVICE_ID,
        templateId: TEMPLATE_ID,
        params: templateParams
      });

      // Using send method with the latest EmailJS approach (no need for user ID as third parameter)
      const result = await emailjs.send(
        SERVICE_ID, 
        TEMPLATE_ID,
        templateParams
      );
      
      console.log("Email sent successfully:", result);
      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please check console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'Email', icon: <Mail className="h-6 w-6" />, link: 'mailto:contact@zawad.dev', label: 'contact@zawad.dev' },
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Enter your name" 
                              className="bg-background border-muted focus:border-primary"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email" 
                              placeholder="Enter your email" 
                              className="bg-background border-muted focus:border-primary"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Enter subject" 
                            className="bg-background border-muted focus:border-primary"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Enter your message" 
                            rows={5}
                            className="bg-background border-muted focus:border-primary"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
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
