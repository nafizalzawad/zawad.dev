import React from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Writing: React.FC = () => {
  const articles = [
    {
      title: 'The Rise of Blockchain in Banking: Beyond Cryptocurrency',
      excerpt: 'How blockchain technology is revolutionizing traditional banking systems through smart contracts, digital identity verification, and secure transactions.',
      date: 'March 15, 2023',
      readTime: '8 min read',
      link: '#'
    },
    {
      title: 'World Cup 2022: How Technology Changed The Beautiful Game',
      excerpt: 'An analysis of how VAR, goal-line technology, and data analytics have transformed football at the highest level during the Qatar World Cup.',
      date: 'December 20, 2022',
      readTime: '6 min read',
      link: '#'
    },
    {
      title: 'The Evolution of Football Tactics: From 2-3-5 to Modern Systems',
      excerpt: 'A deep dive into how football formations and strategies have evolved over the decades, reflecting changes in athleticism, technology, and strategic thinking.',
      date: 'October 5, 2022',
      readTime: '10 min read',
      link: '#'
    }
  ];

  return (
    <section id="writing" className="py-20 bg-navy-light/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Writing</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-lg">
              Previously a digital content writer at <span className="font-medium">Janakantha</span>, 
              I enjoy creating engaging content about technology, finance, and sports. 
              Here are some of my featured articles:
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <Card key={index} className="bg-card border border-muted overflow-hidden hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {article.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-slate-light">
                    <span>{article.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate"></span>
                    <span>{article.readTime}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="text-primary p-0 hover:no-underline">
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      Read article →
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;