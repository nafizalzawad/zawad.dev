import React, { useEffect } from 'react';
import { Crown, Sparkles, Users, Zap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PremiumPortfolioPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Crown className="h-6 w-6" />,
      title: 'Luxury Design',
      description: 'Bespoke, high-end designs that reflect your premium brand and personal style.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Performance Optimized',
      description: 'Lightning-fast loading times with cutting-edge optimization techniques.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'White-Glove Service',
      description: 'Dedicated support and personalized consultation throughout the entire process.'
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Exclusive Features',
      description: 'Custom animations, interactive elements, and unique functionality tailored to you.'
    }
  ];

  // ... keep existing code (return statement with JSX)
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full border border-primary/20">
                  <Crown className="h-12 w-12 text-primary" />
                </div>
              </div>
              
              <h1 className="text-5xl font-bold mb-6">Premium Portfolio Design</h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                Elevate your professional presence with a luxury portfolio that commands attention and 
                converts opportunities into partnerships.
              </p>
              <p className="text-lg font-medium text-primary mb-8">
                For visionaries who demand excellence.
              </p>
              
              <Button size="lg" className="mr-4">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Examples
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">What Makes Our Service Premium?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Every detail is crafted with precision, every interaction designed for impact, 
                  and every element optimized for your success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {features.map((feature, index) => (
                  <Card key={index} className="border-primary/20">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Investment & Timeline</h2>
                <p className="text-muted-foreground">
                  Premium quality requires time and expertise. Here's what to expect.
                </p>
              </div>

              <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-muted/10">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Exclusive Portfolio Package</CardTitle>
                  <CardDescription className="text-base">
                    Limited availability - only 3 projects per month
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Custom Design & Development</span>
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Advanced Animations & Interactions</span>
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mobile-First Responsive Design</span>
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>SEO Optimization</span>
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>6 Months Premium Support</span>
                      <span className="text-primary">✓</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-muted">
                    <p className="text-center text-sm text-muted-foreground mb-4">
                      Starting from $2,500 • 2-3 week delivery
                    </p>
                    <Button className="w-full" size="lg">
                      Schedule Consultation
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      Free 30-minute discovery call to discuss your vision
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Stand Out?</h3>
                <p className="text-muted-foreground mb-6">
                  Join successful entrepreneurs, executives, and creators who've elevated their digital presence 
                  with a premium portfolio that opens doors and creates opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg">
                    View Portfolio Examples
                  </Button>
                  <Button size="lg">
                    Get Started Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PremiumPortfolioPage;
