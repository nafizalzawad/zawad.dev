import React from 'react';
import { Award, Calendar, Users, Video } from 'lucide-react';

type Achievement = {
  title: string;
  description: string;
  icon: React.ReactNode;
  year: string;
};

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: 'FIFA Community Volunteer',
      description: 'Selected as a volunteer for the FIFA World Cup 2022 in Qatar.',
      icon: <Award className="h-8 w-8 text-primary" />,
      year: '2022-Present'
    },
    {
      title: 'Bishwo Shahitto Kendro Awards',
      description: 'Received national reading competition awards for outstanding literary achievements.',
      icon: <Award className="h-8 w-8 text-primary" />,
      year: '2015 and 2016'
    },
    {
      title: 'Client Management',
      description: 'Successfully managed and supported over 4,500 international clients.',
      icon: <Users className="h-8 w-8 text-primary" />,
      year: '2024'
    },
    {
      title: 'Webinar Organizer',
      description: 'Planned and executed successful webinar series at Eightcap with 100+ attendees.',
      icon: <Video className="h-8 w-8 text-primary" />,
      year: '2025'
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-navy-light/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 bg-card rounded-lg border border-muted hover:border-primary transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                {achievement.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <div className="flex items-center text-xs bg-muted px-2 py-0.5 rounded text-slate-light">
                    <Calendar className="h-3 w-3 mr-1" />
                    {achievement.year}
                  </div>
                </div>
                <p className="text-slate mt-2">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;