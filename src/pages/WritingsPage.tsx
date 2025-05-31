import React from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import Header from '../components/Header';
import Footer from '../components/Footer';

const WritingsPage: React.FC = () => {
  // Using the same articles data structure from the Writing component
  const articles = [
    {
      title: 'ওজিল নেই, জার্মানি এবার দোষ চাপাবে কার উপর',
      date: 'December 02, 2022',
      readTime: '2:15 min',
      link: 'https://fb.watch/zWqGGPI5uB/',
    },
    {
      title: 'এল ক্লাসিকোর ইতিহাস',
      date: 'October 16, 2022',
      readTime: '3:34 min',
      link: 'https://fb.watch/zWqWQ0riP7/',
    },
    {
      title: 'ফুটবল বিশ্বকাপ থেকে নিষিদ্ধ করা হয় যে দেশ গুলোকে',
      date: 'October 5, 2022',
      readTime: '3:41 min',
      link: 'https://fb.watch/zWrdwpBvdZ/',
    },
    {
      title: 'Sustainable Finance: The Future of Investment',
      excerpt: 'Exploring how ESG criteria and green investments are reshaping financial markets and offering new opportunities for socially conscious investors.',
      date: 'August 12, 2022',
      readTime: '7 min read',
      link: '#',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.'
    }
  ];

  React.useEffect(() => {
    // Update document title
    document.title = "Nafiz Al Zawad | Writings";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-navy-light/20 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Writings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My Writings & Digital Content
          </h1>
          
          <div className="mb-8">
            <p className="text-lg text-slate">
              Previously a digital content writer at <span className="font-medium">Janakantha</span>, 
              I enjoy creating engaging content about technology, finance, and sports. 
              Here's a collection of my featured articles and digital content.
            </p>
          </div>

          <div className="space-y-12">
            {articles.map((article, index) => (
              <Card key={index} className="bg-card border border-muted overflow-hidden hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
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
                  <p className="text-slate mb-6">{article.excerpt}</p>
                  <p className="text-slate">{article.content}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="text-primary p-0 hover:no-underline">
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      Read full article →
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WritingsPage;
