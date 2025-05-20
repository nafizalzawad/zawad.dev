import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  achievements: string[];
  id: string;
};

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Ontech ICT',
      role: 'Sales & Marketing Specialist',
      duration: 'Mar 2025 - Present',
      location: 'Remote (Part-time)',
      description: [
        'Provide technical support and consultations for web application development',
        'Assist in managing and monitoring blockchain-based applications',
        'Collaborate with cross-functional teams to deliver client solutions'
      ],
      achievements: [
        'Contributed to multiple successful client projects',
        'Maintained exceptional client satisfaction ratings'
      ],
      id: 'ontech',
    },
    {
      company: 'Eightcap Bangladesh',
      role: 'Sales & Marketing Intern',
      duration: 'Jan 2025 - Feb 2025',
      location: 'Melbourne, Australia (Remote)',
      description: [
        'Initiated and hosted Eightcap’s first educational webinar in Bangladesh, expanding brand awareness by 35% in the local market',
        'Developed and localized promotional strategies for global trading tools, increasing lead generation by 25%',
        'Managed client relationships and provided support for platform users'
      ],
      achievements: [
        'Successfully organized multiple webinars with 100+ attendees',
        'Developed educational content that improved client retention'
      ],
      id: 'eightcap',
    },
    {
      company: 'Doin Tech',
      role: 'Virtual Executive, Client Experience',
      duration: 'Jan 2024 - Dec 2024',
      location: 'Dhaka, Bangladesh (Remote)',
      description: [
        'Provided personalized support to over 4,500 international clients, maintaining a 90% satisfaction rate',
        'Collaborated with the tech team to ensure client requirements were met',
        'Played a key role in supporting fintech tools (SureShotFX and Telegram Signal Copier), optimizing client conversion and product adoption by 20%'
      ],
      achievements: [
        'Generated over $20,000 in sales within three months',
        'Served and supported over 4,500 international clients',
        'Recognized as the 2nd top performer company-wide in Q4 for overall client success impact'
      ],
      id: 'doin',
    },
    {
      company: 'The Daily Janakantha',
      role: 'Digital Content Creator',
      duration: 'Sep 2022 - Dec 2023',
      location: 'Dhaka, Bangladesh',
      description: [
        'Authored and published high-impact football articles, driving a 40% increase in online engagement during sports events',
        'Enhanced SEO practices in digital content, improving search visibility by 35%',
        'Strengthened audience connection by aligning writing style with reader preferences'
      ],
      achievements: [
        'Completed a comprehensive FIFA World Cup 2022 feature package, resulting in a 50% rise in sports section readership'
      ],
      id: 'janakantha',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-navy-light/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="ontech" className="w-full">
            <div className="mb-6">
              <TabsList className="flex flex-wrap justify-start gap-2">
                {experiences.map((exp) => (
                  <TabsTrigger 
                    key={exp.id} 
                    value={exp.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {exp.company}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {experiences.map((exp) => (
              <TabsContent key={exp.id} value={exp.id} className="animate-fade-in border-l-2 border-primary pl-6">
                <div className="mb-1 flex items-center">
                  <Briefcase className="text-primary mr-2 h-5 w-5" />
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                </div>
                <p className="text-slate mb-4">{exp.company} | {exp.duration} | {exp.location}</p>
                
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">★</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
