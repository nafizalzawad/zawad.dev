import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  Globe, 
  GitBranch, 
  Paintbrush,
  MessageCircle,
  Clock,
  Brain
} from 'lucide-react';

type SkillGroup = {
  category: string;
  icon: React.ReactNode;
  skills: { name: string; level?: number }[];
};

const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Programming',
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'PHP', level: 70 }
      ]
    },
    {
      category: 'Web Development',
      icon: <Globe className="h-5 w-5 text-primary" />,
      skills: [
        { name: 'HTML & CSS', level: 85 },
        { name: 'React', level: 75 },
        { name: 'Flask', level: 85 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      category: 'Database',
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Database Design', level: 80 }
      ]
    },
    {
      category: 'Tools',
      icon: <GitBranch className="h-5 w-5 text-primary" />,
      skills: [
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'Canva' },
        { name: 'ChatGPT' }
      ]
    },
    {
      category: 'Design',
      icon: <Paintbrush className="h-5 w-5 text-primary" />,
      skills: [
        { name: 'UI/UX Basics' },
        { name: 'Wireframing' }
      ]
    },
    {
      category: 'Soft Skills',
      icon: <MessageCircle className="h-5 w-5 text-primary" />,
      skills: [
        { name: 'Client Support' },
        { name: 'Communication' },
        { name: 'Time Management', icon: <Clock className="h-4 w-4" /> },
        { name: 'Problem Solving', icon: <Brain className="h-4 w-4" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <Card key={index} className="bg-card border border-muted">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {group.icon}
                  <h3 className="text-xl font-semibold ml-2">{group.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {group.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-slate-light">{skill.name}</span>
                        {skill.level && (
                          <span className="text-xs text-primary">{skill.level}%</span>
                        )}
                      </div>
                      
                      {skill.level ? (
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      ) : (
                        <div className="flex flex-wrap">
                          <span className="pill-tag">{skill.name}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;