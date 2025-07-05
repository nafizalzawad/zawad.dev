import React from 'react';
import { Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PremiumServices: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full border border-primary/20">
              <Crown className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Premium Portfolio Design</h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Elevate your professional presence with a luxury portfolio that commands attention and 
            converts opportunities into partnerships.
          </p>
          <p className="text-lg font-medium text-primary mb-8">
            For visionaries who demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/premium-portfolio">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>Starting from $2,500 • Limited availability - only 3 projects per month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
